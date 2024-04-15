(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{516:function(t,o,r){"use strict";r.r(o);var _=r(12),v=Object(_.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"docker-镜像"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像"}},[t._v("#")]),t._v(" Docker 镜像")]),t._v(" "),o("p",[t._v("我们都知道，操作系统分为 "),o("strong",[t._v("内核")]),t._v(" 和 "),o("strong",[t._v("用户空间")]),t._v("。对于 "),o("code",[t._v("Linux")]),t._v(" 而言，内核启动后，会挂载 "),o("code",[t._v("root")]),t._v(" 文件系统为其提供用户空间支持。而 "),o("strong",[t._v("Docker 镜像")]),t._v("（ "),o("code",[t._v("Image")]),t._v(" ），就相当于是一个 "),o("code",[t._v("root")]),t._v(" 文件系统。比如官方镜像 "),o("code",[t._v("ubuntu:18.04")]),t._v(" 就包含了完整的一套 Ubuntu 18.04 最小系统的 "),o("code",[t._v("root")]),t._v(" 文件系统。")]),t._v(" "),o("p",[o("strong",[t._v("Docker 镜像")]),t._v(" 是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像 "),o("strong",[t._v("不包含")]),t._v(" 任何动态数据，其内容在构建之后也不会被改变。")]),t._v(" "),o("h2",{attrs:{id:"分层存储"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#分层存储"}},[t._v("#")]),t._v(" 分层存储")]),t._v(" "),o("p",[t._v("因为镜像包含操作系统完整的 "),o("code",[t._v("root")]),t._v(" 文件系统，其体积往往是庞大的，因此在 Docker 设计时，就充分利用 "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Union_mount",target:"_blank",rel:"noopener noreferrer"}},[t._v("Union FS"),o("OutboundLink")],1),t._v(" 的技术，将其设计为分层存储的架构。所以严格来说，镜像并非是像一个 "),o("code",[t._v("ISO")]),t._v(" 那样的打包文件，镜像只是一个虚拟的概念，其实际体现并非由一个文件组成，而是由一组文件系统组成，或者说，由多层文件系统联合组成。")]),t._v(" "),o("p",[t._v("镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。比如，删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。在最终容器运行的时候，虽然不会看到这个文件，但是实际上该文件会一直跟随镜像。因此，在构建镜像的时候，需要额外小心，每一层尽量只包含该层需要添加的东西，任何额外的东西应该在该层构建结束前清理掉。")]),t._v(" "),o("p",[t._v("分层存储的特征还使得镜像的复用、定制变的更为容易。甚至可以用之前构建好的镜像作为基础层，然后进一步添加新的层，以定制自己所需的内容，构建新的镜像。")])])}),[],!1,null,null,null);o.default=v.exports}}]);