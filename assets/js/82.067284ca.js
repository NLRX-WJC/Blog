(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{420:function(_,v,e){_.exports=e.p+"assets/img/1.6e1e57be.jpg"},559:function(_,v,e){"use strict";e.r(v);var t=e(12),s=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[_._v("#")]),_._v(" 1. 前言")]),_._v(" "),v("p",[_._v("在"),v("code",[_._v("Vue")]),_._v("中，每个"),v("code",[_._v("Vue")]),_._v("实例从被创建出来到最终被销毁都会经历一个过程，就像人一样，从出生到死亡。在这一过程里会发生许许多多的事，例如设置数据监听，编译模板，组件挂载等。在"),v("code",[_._v("Vue")]),_._v("中，把"),v("code",[_._v("Vue")]),_._v("实例从被创建出来到最终被销毁的这一过程称为"),v("code",[_._v("Vue")]),_._v("实例的生命周期，同时，在"),v("code",[_._v("Vue")]),_._v("实例生命周期的不同阶段"),v("code",[_._v("Vue")]),_._v("还提供了不同的钩子函数，以方便用户在不同的生命周期阶段做一些额外的事情。那么，接下来的几篇文章我们就从源码角度深入剖析一下一个"),v("code",[_._v("Vue")]),_._v("实例在从生到死的生命周期里到底都经历了些什么，每个阶段都做了哪些事情。")]),_._v(" "),v("h2",{attrs:{id:"_2-生命周期流程图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-生命周期流程图"}},[_._v("#")]),_._v(" 2. 生命周期流程图")]),_._v(" "),v("p",[_._v("下图是"),v("code",[_._v("Vue")]),_._v("官网给出的"),v("code",[_._v("Vue")]),_._v("实例的生命周期流程图，如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:e(420),alt:""}})]),_._v(" "),v("p",[_._v("从图中我们可以看到，"),v("code",[_._v("Vue")]),_._v("实例的生命周期大致可分为4个阶段：")]),_._v(" "),v("ul",[v("li",[_._v("初始化阶段：为"),v("code",[_._v("Vue")]),_._v("实例上初始化一些属性，事件以及响应式数据；")]),_._v(" "),v("li",[_._v("模板编译阶段：将模板编译成渲染函数；")]),_._v(" "),v("li",[_._v("挂载阶段：将实例挂载到指定的"),v("code",[_._v("DOM")]),_._v("上，即将模板渲染到真实"),v("code",[_._v("DOM")]),_._v("中；")]),_._v(" "),v("li",[_._v("销毁阶段：将实例自身从父组件中删除，并取消依赖追踪及事件监听器；")])]),_._v(" "),v("h2",{attrs:{id:"_3-总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结"}},[_._v("#")]),_._v(" 3. 总结")]),_._v(" "),v("p",[_._v("本篇文章是生命周期篇的开篇综述，借用"),v("code",[_._v("Vue")]),_._v("官网的生命周期流程图介绍了一个"),v("code",[_._v("Vue")]),_._v("实例的生命周期大致可分为四个阶段，分别是初始化阶段、模板编译阶段、挂载阶段、销毁阶段。接下来的几篇文章我们就从这个流程图为基础，自上到下，从每个阶段入手，深入分析在每个阶段里都干了些什么。")])])}),[],!1,null,null,null);v.default=s.exports}}]);