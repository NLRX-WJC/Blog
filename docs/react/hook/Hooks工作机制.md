## 1. 前言

如果你在之前开发中使用过 `React Hooks` ，那么你一定知道使用 `React Hooks` 有两条铁的使用规则：

* 只在 `React` 函数中调用 `Hook`；
* 不要在循环、条件或嵌套函数中调用 `Hook`；

其中第一条规则「只在 `React` 函数中调用 `Hook` 」很好理解， `React Hooks` 本来就是为函数组件而生的，在普通函数中调用没有任何意义。但是第二条「不要在循环、条件或嵌套函数中调用 `Hook` 」的规则就很值得玩味了，你不禁会疑问：为啥不让我在循环、条件或嵌套函数中调用 `Hook` ？你一个 `API` 提供者可以限制我怎么用你的 `API` ，你这怎么还限制我在哪用？

关于这条规则， `React` 官方是这么补充解释的：**你必须确保 `Hook` 在每次渲染中都按照同样的顺序被调用。这样才能让 `React` 在多次的 `hook` 调用之间保持 `hook` 状态的正确。**

重点在这里：确保每一次渲染中都按照同样的顺序被调用。**顺序！顺序！！顺序！！！**

想想看，如果你在条件语句中调用了某个 `Hook` ，那么这个 `Hook` 必然不是每次渲染都会被调用，只有条件为真了才会被调用，这就导致在每次渲染时，有时有5个 `Hook` 被调用，有时却只有3个被调用， `Hook` 的调用顺序变得不确定了。那为什么 `Hook` 的调用顺序这么重要呢？为什么一定要保证所有的 `Hook` 在每次渲染时都要以同样的顺序被调用呢？这就涉及到 `Hook` 的实现机制了，接下来，本文就从源码角度出发，来探究一下 `React` 为什么要限制 `Hook` 的调用顺序。

## 2. 不按规定来会怎样

在研究源码之前，我们先来看看假如不保证 `Hooks` 的执行顺序，会出现什么样的现象？

我们来看一个 [Demo](https://codesandbox.io/s/relaxed-cookies-p0edv?file=/src/PersonalInfoComponent.jsx)，如下：

```jsx
import React, { useState } from "react";

function PersonalInfoComponent() {
  const [name,setName] = useState("难凉热血");
  const [age] = useState(18);
  const [career] = useState("前端开发");
  
  return (
    <div className="personalInfo">
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>职业：{career}</p>
      <button
        onClick={() => {
          setName("热血难凉");
        }}
      >
        修改姓名
      </button>
    </div>
  );
}

export default PersonalInfoComponent;

```

在这个 `Demo` 中，我们使用 `useState` 定义了三个状态，分别是：姓名、年龄和职业。并在视图中将这三个状态展示出来，点击「修改职业」按钮可修改职业，如下：

![](~@/react/hook/1.png)

ok，没有问题，点击「修改职业」按钮也能正常修改职业，以上都是在正常使用 `Hooks` ，接下来，我们做一点调整，使得 `Hooks` 的调用顺序不再保持一致，代码如下：

```jsx
import React, { useState } from "react";

let isMounted = false;
function PersonalInfoComponent() {
  let name, age, career, setName;
  console.log("isMounted", isMounted);

  if (!isMounted) {
    // eslint-disable-next-line
    [name, setName] = useState("难凉热血");
    // eslint-disable-next-line
    [age] = useState(18);
    // if 内部的逻辑执行一次后，就将 isMounted 置为 true（说明已挂载，后续都不再是首次渲染了）
    isMounted = true;
  }
  [career] = useState("前端开发");
  console.log("career", career);

  return (
    <div className="personalInfo">
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>职业：{career}</p>
      <button
        onClick={() => {
          setName("热血难凉");
        }}
      >
        修改姓名
      </button>
    </div>
  );
}

export default PersonalInfoComponent;

```

从上面代码中可以看到，我们把一部分的 `useState` 操作放进 `if` 条件语句里，只有在组件首次渲染的时候，名字和年龄的 `useState` 才会被调用，在之后的更新渲染中就只有职业的 `useState` 被调用，接下来，我们再点击「修改职业」按钮，看看会发生什么样的现象：

当刷新页面，渲染结果跟之前无异，一切都正常渲染：

![](~@/react/hook/1.png)

并且 `F12` 打开控制台，可以看到我们打印的 `career` 也是正确的：

![3](~@/react/hook/3.png)

接着，我们点击「修改职业」按钮，发现页面直接报错了：

![2](~@/react/hook/2.png)

从报错信息中可以看出 `React` 在提示我们**Rendered fewer hooks than expected（组件渲染的 Hooks 比期望中更少）**。没错，首次渲染的时候有三个 `Hook` 被调用了，但是当点击按钮之后进入更新渲染的时候却只有一个 `Hook` 被调用，上文也说了， `React` 要求在每次渲染中所有的 `Hook` 都必须以相同的顺序被调用，看来， `React` 提示的没毛病。

接着，我们打开控制台，看看打印的 `career` 有没有什么变化，如下：

![4](~@/react/hook/4.png)

卧槽！我明明修改的是姓名么，不是应该改 `name` 吗？怎么改到 `career` 上去了？？？  😱😱😱

看来我们必须得扒一扒 `Hooks` 的实现机制了。

> 注意：如果你想复现这个 Demo，请将 React 版本调整到 16.8.x

## 3. 透过现象看本质

从上一章节中的 `Demo` ，我们可以看到：**如果不保证每次渲染中所有 `Hook` 的调用顺序的话，会造成 `Hook` 状态的紊乱。**那么为什么会出现这种情况呢？接下来，我们就从源码的角度来一探究竟。

我们以最简单的 `useState` 为例，在 `React` 源码中， `useState` 是这样[定义](https://github.com/facebook/react/blob/17.0.2/packages/react/src/ReactHooks.js#L80-L85)的：

```javascript
export function useState(initialState) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
```

可以看到， `useState` 的源码定义非常简单，就是先获取一下当前的 `dispatcher` ，然后再调用 `dispatcher.useState` 方法并且传入 `useState` 的初始值。那么当前的 `dispatcher` 又是什么呢？通过研究源码发现，当函数组件进入 `render 阶段` 的时候，如果发现组件内存在 `Hooks` ，那么会调用 [renderWithHooks](https://github.com/facebook/react/blob/17.0.2/packages/react-reconciler/src/ReactFiberHooks.new.js#L399-L402) 方法，在这个方法中会根据不同渲染情况对当前的 `dispatcher` 进行赋值，如下：

```javascript
ReactCurrentDispatcher.current =
  current === null || current.memoizedState === null ?
  HooksDispatcherOnMount :
  HooksDispatcherOnUpdate;
```

从代码中可以看到，首先使用 `current === null || current.memoizedState === null` 区分当前组件是在 `mount` 还是 `update` ，然后把不同情况的 `dispatcher` 赋值给全局变量 `ReactCurrentDispatcher` 的 `current` 属性，赋值完以后，在 `useState` 定义里通过调用 `resolveDispatcher` 方法就能获取到当前的 `dispatcher` 了。

从这里我们就知道了， `Hooks` 在首次渲染和更新渲染时使用的是不同的 `dispatcher` ，从而执行的是不用的逻辑。下面我们就来看下首次渲染和更新渲染这两种不同的 `dispatcher` 里都干了些什么。

### 3.1 首次渲染

从上文分析得知，首次渲染使用的 `dispatcher` 是 [HooksDispatcherOnMount](https://github.com/facebook/react/blob/17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1776-L1795)，其代码如下:

```javascript
const HooksDispatcherOnMount: Dispatcher = {
  readContext,
  useCallback: mountCallback,
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle: mountImperativeHandle,
  useLayoutEffect: mountLayoutEffect,
  useMemo: mountMemo,
  useReducer: mountReducer,
  useRef: mountRef,
  useState: mountState,
  useDebugValue: mountDebugValue,
  useDeferredValue: mountDeferredValue,
  useTransition: mountTransition,
  useMutableSource: mountMutableSource,
  useOpaqueIdentifier: mountOpaqueIdentifier,
  unstable_isNewReconciler: enableNewReconciler,
};
```

还是以 `useState` 为例，在首次渲染阶段调用 `useState` 实际上调用的是 `HooksDispatcherOnMount.useState` 即 `mountState` 方法，我们继续追 `mountState` 的内部实现，它是这样[定义](https://github.com/facebook/react/blob/17.0.2/packages/react-reconciler/src/ReactFiberHooks.new.js#L1126-L1149)的：

```javascript
function mountState(initialState) {
  // 将新的 hook 对象追加进链表尾部
  const hook = mountWorkInProgressHook();
  // initialState 可以是一个回调，若是回调，则取回调执行后的值
  if (typeof initialState === 'function') {
    initialState = initialState();
  }
  // 将 initialState 作为一个“记忆值”存下来
  hook.memoizedState = hook.baseState = initialState;
  // 创建当前 hook 对象的更新队列，这一步主要是为了能够依序保留 dispatch
  const queue = (hook.queue = {
    pending: null,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: (initialState: any),
  });
  const dispatch = (queue.dispatch = (dispatchAction.bind(
    null,
    currentlyRenderingFiber,
    queue,
  ): any));
  // 返回目标数组，dispatch 其实就是常常见到的 setXXX 这个函数
  return [hook.memoizedState, dispatch];
}
```

从这段源码中我们可以看出，**mounState 的主要工作是初始化 Hooks**。在整段源码中，最需要关注的是 `mountWorkInProgressHook` 方法，它为我们道出了 `Hooks` 背后的数据结构组织形式。以下是 `mountWorkInProgressHook` 方法的[定义](https://github.com/facebook/react/blob/17.0.2/packages/react-reconciler/src/ReactFiberHooks.new.js#L544-L563)：

```javascript
function mountWorkInProgressHook() {
  // 注意，单个 hook 是以对象的形式存在的
  const hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };

  if (workInProgressHook === null) {
    // 若正在处理的 hook 链表为空，则将上面定义好的 hook 作为链表的头节点
    currentlyRenderingFiber.memoizedState = workInProgressHook = hook;
  } else {
    // 若链表不为空，则将 hook 追加到链表尾部
    workInProgressHook = workInProgressHook.next = hook;
  }
  return workInProgressHook;
}
```

到这里可以看出，**hook 相关的所有信息收敛在一个 hook 对象里，而 hook 对象之间以单向链表的形式相互串联**。

到这里，真相已经开始逐渐浮出水面了：组件中的所有 `Hooks` 之间都是以单向链表的形式串联，环环相扣的。

我们可以大胆猜想一下：假如链接中间有一环丢失了，那么这条链表的顺序就会发生变化，从而有可能导致还存在在链表之中的 `Hook` 状态与之前无法对应的情况，从而导致 `hook` 状态紊乱。

那么真相到底是不是如我们猜想的这般呢？别急，我们继续往下看，看完了首次渲染的情况，我们继续看更新渲染时都干了些什么。

### 3.2 更新渲染

更新渲染使用的 `dispatcher` 是 [HooksDispatcherOnUpdate](https://github1s.com/facebook/react/blob/17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1797-L1816)，代码如下：

```javascript
const HooksDispatcherOnUpdate: Dispatcher = {
  readContext,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState: updateState,
  useDebugValue: updateDebugValue,
  useDeferredValue: updateDeferredValue,
  useTransition: updateTransition,
  useMutableSource: updateMutableSource,
  useOpaqueIdentifier: updateOpaqueIdentifier,
  unstable_isNewReconciler: enableNewReconciler,
};
```

在更新渲染阶段调用 `useState` 实际上调用的是 `HooksDispatcherOnUpdate.useState` 即 `updateState` 方法，它是这样[定义](https://github.com/facebook/react/blob/17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1138-L1142)的：

```javascript
function updateState(initialState) {
  return updateReducer(basicStateReducer, initialState);
}
```

可以看到， `updateState` 方法最终会落到 `updateReducer` 这个方法中。

> 由于在源码中，useState 和 useReducer 复用了一套更新机制，所以 updateReducer 方法的代码量很大，此处不再逐行解析，有兴趣的话可以看源码定义，[在这里](https://github.com/facebook/react/blob/17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L651-L783)。

其实 `updateState` 做的的事情很容易理解，那就是：**按顺序去遍历之前构建好的链表，取出对应的数据信息进行渲染**。

### 3.3 小结

现在，我们把 `mountState` 和 `updateStat` e 做的事情放在一起来看，不难得出：

`mountState` （首次渲染）构建链表并渲染；

`updateState` （更新渲染）依次遍历链表并渲染。

看来，真相只有一个：**hooks 的渲染是通过「依次遍历」来定位每个 hooks 内容的。如果前后两次读到的链表在顺序上出现差异，那么渲染的结果自然是不可控的**。

## 4. 回看Demo

了解了 `Hooks` 的工作机制后，我们回看上文写的 `Demo` ，从工作机制角度分析一波。

在 `Demo` 中我们定义了三个状态，分别是：

```javascript
const [name, setName] = useState("难凉热血");
const [age] = useState(18);
const [career] = useState("前端开发");
```

在首次渲染中，构建得到的 `Hooks` 链表是这样的：

![5](~@/react/hook/5.png)

当点击「修改姓名」按钮进行更新渲染时，此时 `name` 和 `age` 的 `useState` 不会被调用，只会调用 `career` 的 `useState` 。此时对于 `React` 来说，我不会看你命名的变量名是 `career` 还是别的什么，我只认你这是第一次 `useState` 调用，于是就会认为：**喔，原来你想要的是第一个位置的 hook 啊**。

而在构建链表的时候，链表第一个位置是 `name` ，并且对应的值被改为了：热血难凉。

所以就出现了 `Demo` 中的那一幕：从开发者角度来看，我修改的是 `name` 状态，你却给我改的是 `career` 状态；而从 `React` 角度来看，你要的仅仅是第一个 `Hook` 而已。

## 5. 总结

函数组件中的 `Hooks` 是以单向链表形式相互串联的，在首次渲染时 `mountState` 构建链表并渲染，在更新渲染时 `updateState` 会依次遍历链表、读取数据并渲染。注意这个过程就像从数组中依次取值一样，是完全按照顺序（或者说索引）来的。

所以，在开发中，必须确保所有 `Hook` 在每次渲染中都按照同样的顺序被调用，保证链表的完整性！
