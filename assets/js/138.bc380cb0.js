(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{582:function(n,s,a){"use strict";a.r(s);var e=a(12),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[s("code",[n._v("Transaction")]),n._v(" （事务） 在 "),s("code",[n._v("React")]),n._v(" 源码中的分布可以说非常广泛。如果你在调试 "),s("code",[n._v("React")]),n._v(" 项目的过程中，发现函数调用栈中出现了 "),s("code",[n._v("initialize")]),n._v(" 、 "),s("code",[n._v("perform")]),n._v(" 、 "),s("code",[n._v("close")]),n._v(" 、 "),s("code",[n._v("closeAll")]),n._v(" 或者 "),s("code",[n._v("notifyAll")]),n._v(" 这样的方法名，那么很可能你当前就处于一个 "),s("code",[n._v("Trasaction")]),n._v(" 中。")]),n._v(" "),s("p",[s("code",[n._v("Transaction")]),n._v(" 在 "),s("code",[n._v("React")]),n._v(" 源码中表现为一个核心类， "),s("code",[n._v("React")]),n._v(" 官方曾经这样描述它："),s("strong",[n._v("Transaction 是创建一个黑盒")]),n._v("，该黑盒能够封装任何的方法。因此，那些需要在函数运行前、后运行的方法可以通过此方法封装（即使函数运行中有异常抛出，这些固定的方法仍可运行），实例化 "),s("code",[n._v("Transaction")]),n._v(" 时只需提供相关的方法即可。")]),n._v(" "),s("p",[s("code",[n._v("React")]),n._v(" 源码中的一段对 "),s("code",[n._v("Transaction")]),n._v(" 的工作机制有一个非常形象的流程图，如下：")]),n._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n *\n * <pre>\n *                       wrappers (injected at creation time)\n *                                      +        +\n *                                      |        |\n *                    +-----------------|--------|--------------+\n *                    |                 v        |              |\n *                    |      +---------------+   |              |\n *                    |   +--|    wrapper1   |---|----+         |\n *                    |   |  +---------------+   v    |         |\n *                    |   |          +-------------+  |         |\n *                    |   |     +----|   wrapper2  |--------+   |\n *                    |   |     |    +-------------+  |     |   |\n *                    |   |     |                     |     |   |\n *                    |   v     v                     v     v   | wrapper\n *                    | +---+ +---+   +---------+   +---+ +---+ | invariants\n * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained\n * +-----------------\x3e|-|---|-|---|--\x3e|anyMethod|---|---|-|---|-|--------\x3e\n *                    | |   | |   |   |         |   |   | |   | |\n *                    | |   | |   |   |         |   |   | |   | |\n *                    | |   | |   |   |         |   |   | |   | |\n *                    | +---+ +---+   +---------+   +---+ +---+ |\n *                    |  initialize                    close    |\n *                    +-----------------------------------------+\n * </pre>\n *\n */")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br")])]),s("p",[n._v("说白了， "),s("code",[n._v("Transaction")]),n._v(" 就像是一个「壳子」，它首先会将目标函数用 "),s("code",[n._v("wrapper")]),n._v(" （一组 "),s("code",[n._v("initialize")]),n._v(" 及 "),s("code",[n._v("close")]),n._v(" 方法称为一个 "),s("code",[n._v("wrapper")]),n._v(" ） 封装起来，同时需要使用 "),s("code",[n._v("Transaction")]),n._v(" 类暴露的 "),s("code",[n._v("perform")]),n._v(" 方法去执行它。如上面的注释所示，在 "),s("code",[n._v("anyMethod")]),n._v(" 执行之前， "),s("code",[n._v("perform")]),n._v(" 会先执行所有 "),s("code",[n._v("wrapper")]),n._v(" 的 "),s("code",[n._v("initialize")]),n._v(" 方法，执行完后，再执行所有 "),s("code",[n._v("wrapper")]),n._v(" 的 "),s("code",[n._v("close")]),n._v(" 方法。")]),n._v(" "),s("p",[n._v("这就是 "),s("code",[n._v("React")]),n._v(" 中的事务机制。")])])}),[],!1,null,null,null);s.default=t.exports}}]);