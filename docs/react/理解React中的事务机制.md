`Transaction` （事务） 在 `React` 源码中的分布可以说非常广泛。如果你在调试 `React` 项目的过程中，发现函数调用栈中出现了 `initialize` 、 `perform` 、 `close` 、 `closeAll` 或者 `notifyAll` 这样的方法名，那么很可能你当前就处于一个 `Trasaction` 中。

`Transaction` 在 `React` 源码中表现为一个核心类， `React` 官方曾经这样描述它：**Transaction 是创建一个黑盒**，该黑盒能够封装任何的方法。因此，那些需要在函数运行前、后运行的方法可以通过此方法封装（即使函数运行中有异常抛出，这些固定的方法仍可运行），实例化 `Transaction` 时只需提供相关的方法即可。

`React` 源码中的一段对 `Transaction ` 的工作机制有一个非常形象的流程图，如下：

```javascript
/**
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 */
```

说白了， `Transaction` 就像是一个「壳子」，它首先会将目标函数用 `wrapper` （一组 `initialize` 及 `close` 方法称为一个 `wrapper` ） 封装起来，同时需要使用 `Transaction` 类暴露的 `perform` 方法去执行它。如上面的注释所示，在 `anyMethod ` 执行之前， `perform` 会先执行所有 `wrapper` 的 `initialize` 方法，执行完后，再执行所有 `wrapper` 的 `close` 方法。

这就是 `React` 中的事务机制。
