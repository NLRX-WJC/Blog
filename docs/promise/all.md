## 语法

```
Promise.all(iterable);
```

## 参数

* iterable

  一个可迭代对象， `Array` ， `Map` ， `Set` 都属于 `ES6` 的 `iterable` 类型

## 返回值

* 如果传入的参数是一个空的可迭代对象，则返回一个**已完成（already resolved）**状态的 `Promise`。
* 如果传入的参数不包含任何 `promise`，则返回一个**异步完成（asynchronously resolved）**`Promise`。
* 其它情况下返回一个**处理中（pending）**的`Promise`。这个返回的 `promise` 之后会在所有的 `promise` 都完成或有一个 `promise` 失败时**异步**地变为完成或失败。 
* 返回值将会按照参数内的 `promise` 顺序排列，而不是由调用 `promise` 的完成顺序决定。

## 类型签名

```ts
Promise.all<T>(promises: Iterable<Promise<T>>): Promise<Array<T>>
```

## 说明

此方法在集合多个 `promise` 的返回结果时很有用。

**完成（Fulfillment）：**
如果传入的可迭代对象为空， `Promise.all` 会同步地返回一个已完成（ `resolved` ）状态的 `promise` 。
如果所有传入的 `promise` 都变为完成状态，或者传入的可迭代对象内没有 `promise` ， `Promise.all` 返回的 `promise` 异步地变为完成。
在任何情况下， `Promise.all` 返回的 `promise` 的完成状态的结果都是一个数组，它包含所有的传入迭代参数对象的值（也包括非 promise 值）。

**失败/拒绝（Rejection）：**
如果传入的 `promise` 中有一个失败（ `rejected` ）， `Promise.all` 异步地将失败的那个结果给失败状态的回调函数，而不管其它 `promise` 是否完成。

## 简单实现

```javascript
function all(promises) {
  return new Promise((reslove, reject) => {
    let index = 0
    for (const promise of promises) {
      const currentIndex = index
      promise.then((value) => {
        if (errorFlag) {
          return
        }
        result[currentIndex] = value
        elementCount++
        if (elementCount === result.length) {
          reslove(result)
        }
      }, (error) => {
        if (errorFlag) {
          return
        }
        errorFlag = true

        reject(error)
      })
      index++
    }
    if (index === 0) {
      reslove([])
      return
    }
    const result = new Array(index)
    let errorFlag = false
    let elementCount = 0
  })
}
```
