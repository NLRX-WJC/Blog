## 语法

```
Promise.allSettled(iterable);
```

## 参数

* iterable

  一个可迭代对象， `Array` ， `Map` ， `Set` 都属于 `ES6` 的 `iterable` 类型

## 返回值

一旦所指定的 `promises` 集合中每一个 `promise` 已经完成，无论是成功的达成或被拒绝，**未决议的** `Promise` 将被**异步**完成。那时，所返回的 `promise` 的处理器将传入一个数组作为输入，该数组包含原始 `promises` 集中每个 ` promise` 的结果。

对于每个结果对象，都有一个 `status` 字符串。

* 如果它的值为 `fulfilled`，则结果对象上存在一个 `value` 。

* 如果值为 `rejected`，则存在一个 `reason` 。

`value` 或 `reason` 反映了每个 `promise` 决议或拒绝的值。

## 类型签名

```ts
Promise.allSettled<T>(promises: Iterable<Promise<T>>): Promise<Array<SettlementObject<T>>>
```

## 简单实现

```javascript
function allSettled(iterable) {
  return new Promise((resolve, reject) => {
    function addElementToResult(i, elem) {
      result[i] = elem;
      elementCount++;
      if (elementCount === result.length) {
        resolve(result);
      }
    }

    let index = 0;
    for (const promise of iterable) {
      const currentIndex = index;
      promise.then(
        (value) => addElementToResult(
          currentIndex, {
            status: 'fulfilled',
            value
          }),
        (reason) => addElementToResult(
          currentIndex, {
            status: 'rejected',
            reason
          }));
      index++;
    }
    if (index === 0) {
      resolve([]);
      return;
    }
    let elementCount = 0;
    const result = new Array(index);
  });
}
```
