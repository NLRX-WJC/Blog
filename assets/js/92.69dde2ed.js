(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{493:function(s,t,n){"use strict";n.r(t);var a=n(12),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_1-前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1. 前言")]),s._v(" "),t("p",[s._v("在官方"),t("code",[s._v("axios")]),s._v("中，它还有一项非常重要的功能，就是支持主动取消请求。这个功能非常实用，我们可以想象这样一个业务场景：当请求发出后，突然出现了某种情况，此时发出的请求变得毫无意义，那么这个时候我们就可以调用取消请求的方法来主动取消发出的请求。")]),s._v(" "),t("p",[s._v("官方"),t("code",[s._v("axios")]),s._v("提供了两种取消请求的方式，示例如下：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("第一种方式:")]),s._v(" "),t("p",[s._v("可以使用"),t("code",[s._v("CancelToken.source")]),s._v("工厂创建取消令牌，如下所示：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CancelToken "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" axios"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CancelToken"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" source "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CancelToken"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\naxios\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/user/12345"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("cancelToken")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("catch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("axios"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isCancel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Request canceled"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// handle error")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\naxios"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/user/12345"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"new name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("cancelToken")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cancel the request (the message parameter is optional)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取消请求 (请求原因是可选的)")]),s._v("\nsource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cancel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Operation canceled by the user."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("第二种方式：")]),s._v(" "),t("p",[s._v("还可以通过将取消函数传递给"),t("code",[s._v("CancelToken")]),s._v("的构造函数来创建取消令牌：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CancelToken "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" axios"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CancelToken"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cancel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\naxios"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/user/12345"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("cancelToken")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CancelToken")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("executor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("c")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// An executor function receives a cancel function as a parameter")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// executor函数接收一个取消函数作为参数")]),s._v("\n    cancel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cancel the request")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cancel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])]),s._v(" "),t("p",[s._v("所谓取消令牌"),t("code",[s._v("cancelToken")]),s._v("其实就是请求配置对象中的一个属性，该属性对应一个取消请求的触发函数，例如第一种方式中的"),t("code",[s._v("source.cancel()")]),s._v("，第二种方式中的"),t("code",[s._v("cancel()")]),s._v("。当在请求外部调用了该触发函数，表示此时需要取消请求了，那么我们此时调用"),t("code",[s._v("XMLHttpRequest")]),s._v("对象上的"),t("code",[s._v("abort()")]),s._v("方法将请求取消即可。")]),s._v(" "),t("h1",{attrs:{id:"_2-示例代码分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-示例代码分析"}},[s._v("#")]),s._v(" 2. 示例代码分析")]),s._v(" "),t("p",[s._v("观察示例代码，我们从中可以总结出如下几点：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("axios")]),s._v("混合对象上又多了一个静态接口"),t("code",[s._v("CancelToken")]),s._v(";")]),s._v(" "),t("li",[t("code",[s._v("CancelToken")]),s._v("接口是一个类；")]),s._v(" "),t("li",[t("code",[s._v("CancelToken")]),s._v("类的构造函数接收一个函数作为参数；")]),s._v(" "),t("li",[s._v("并且这个参数函数也接收一个取消函数作为参数；")]),s._v(" "),t("li",[t("code",[s._v("CancelToken")]),s._v("类上有一个静态方法"),t("code",[s._v("source")]),s._v(";")]),s._v(" "),t("li",[t("code",[s._v("source")]),s._v("方法返回一个对象："),t("code",[s._v("toekn")]),s._v("和"),t("code",[s._v("cancel")]),s._v("；")]),s._v(" "),t("li",[t("code",[s._v("source.token")]),s._v("其实就是"),t("code",[s._v("CancelToken")]),s._v("类的实例，"),t("code",[s._v("source.cancel")]),s._v("就是取消请求触发函数；")]),s._v(" "),t("li",[t("code",[s._v("axios")]),s._v("混合对象上还多了一个静态接口"),t("code",[s._v("isCancel")]),s._v(";")]),s._v(" "),t("li",[t("code",[s._v("isCancel")]),s._v("接口接收错误对象"),t("code",[s._v("e")]),s._v("作为参数，用来判断该错误是不是由取消请求导致的；")])]),s._v(" "),t("h1",{attrs:{id:"_3-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-小结"}},[s._v("#")]),s._v(" 3. 小结")]),s._v(" "),t("p",[s._v("从示例代码分析中，我们可以知道，其实这两种使用方式在本质上都是一样的，都是用"),t("code",[s._v("CancelToken")]),s._v("类的实例作为取消令牌，不同之处在于：")]),s._v(" "),t("ul",[t("li",[s._v("第二种方式中我们需要显示的定义一个"),t("code",[s._v("cancel")]),s._v("变量和显示的实例化"),t("code",[s._v("CancelToken")]),s._v("类，并且把取消请求的触发函数赋给"),t("code",[s._v("cancel")]),s._v("，然后通过调用"),t("code",[s._v("cancel()")]),s._v("来取消请求；")]),s._v(" "),t("li",[s._v("而第一种方式是把变量"),t("code",[s._v("cancel")]),s._v("定义在了静态方法"),t("code",[s._v("source")]),s._v("内部，并且在"),t("code",[s._v("source")]),s._v("内部"),t("code",[s._v("CancelToken")]),s._v("类实例好，最后一并返回，这样我们就不用显示的实例化"),t("code",[s._v("CancelToken")]),s._v("类和定义"),t("code",[s._v("cancel")]),s._v("变量，取而代之的是使用"),t("code",[s._v("source.token")]),s._v("对应实例化"),t("code",[s._v("CancelToken")]),s._v("类，"),t("code",[s._v("source.cancel")]),s._v("对应触发函数"),t("code",[s._v("cancel")]),s._v("。")])]),s._v(" "),t("p",[t("strong",[s._v("那么这两种方式孰好孰坏呢，或者说第一种方式明显比第二种方式使用起来更加方便，为什么还要第二种方式？其实不然，第一种方式将实例化"),t("code",[s._v("CancelToken")]),s._v("类的过程隐藏起来了，这样对仅仅只想取消请求来说是方便了，但是如果还想在取消请求的时候做一些其他事情，那就需要使用第二种方式，显示的实例化"),t("code",[s._v("CancelToken")]),s._v("类，然后做一些你需要做的事情。")])]),s._v(" "),t("p",[s._v("OK，原理搞明白以后，我们就来实现取消请求的功能，我们先实现第二种方式，因为第一种方式其实是对第二种方式的一种高级包装罢了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);