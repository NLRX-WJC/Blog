## 语法

```
Promise.race(iterable);
```

## 参数

* iterable

  一个可迭代对象， `Array` ， `Map` ， `Set` 都属于 `ES6` 的 `iterable` 类型

## 返回值

一个**待定的** `Promise` 只要给定的迭代中的一个promise解决或拒绝，就采用第一个 `promise` 的值作为它的值，从而**异步**地解析或拒绝（一旦堆栈为空）。

## 类型签名

```ts
Promise.race<T>(promises: Iterable<Promise<T>>): Promise<T>
```

## 说明

`race` 函数返回一个 `Promise` ，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（ ` resolves` ），也可以是失败（ `rejects` ），这要取决于第一个完成的方式是两个中的哪个。

如果传的迭代是空的，则返回的 `promise` 将永远等待。

如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则 ` Promise.race` 将解析为迭代中找到的第一个值。

## 简单实现
```javascript
function race(promises) {
  return new Promise((reslove, reject) => {
    for (const promise of promises) {
      promise.then((value) => {
        if (settlementOccurred) {
          return
        }
        settlementOccurred = true
        reslove(value)
      }, (error) => {
        if (settlementOccurred) {
          return
        }
        settlementOccurred = true
        reject(error)
      })
    }
    let settlementOccurred = false
  })
}
```
