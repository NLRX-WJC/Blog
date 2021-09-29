const path = require("path");
module.exports = {
  base: "/Blog/",
  dest: "dist",
  title: "难凉热血",
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "public", "assets"),
      },
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/logo.png`,
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#000000",
      },
    ],
  ],
  themeConfig: {
    repo: "NLRX-WJC/Blog",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    sidebarDepth: 0,
    logo: "/logo.png",
    sidebar: [
      {
        title: "关于作者",
        collapsable: true,
        path: "/about/",
      },
      {
        title: "React",
        collapsable: true,
        sidebarDepth: 2,
        children: [["react/01.React基础.md", "01.React基础"]],
      },
      {
        title: "JavaScript",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          [
            "javascript/01.原生JS封装_new函数，实现new关键字的功能.md",
            "01.原生JS封装_new函数，实现new关键字的功能",
          ],
          [
            "javascript/02.通俗易懂了解函数的防抖和节流.md",
            "02.通俗易懂了解函数的防抖和节流",
          ],
          [
            "javascript/03.原生JS实现call,apply,bind函数.md",
            "03.原生JS实现call,apply,bind函数",
          ],
          [
            "javascript/04.javaScript中this到底指向谁.md",
            "04.javaScript中this到底指向谁",
          ],
          [
            "javascript/05.JavaScript中继承的多种方式和优缺点.md",
            "05.JavaScript中继承的多种方式和优缺点",
          ],
        ],
      },
      {
        title: "webpack",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ["webpack/01.常用的webpack优化方法.md", "01.常用的webpack优化方法"],
          ["webpack/02.从0开始编写webpack插件.md", "02.从0开始编写webpack插件"],
        ],
      },
      {
        title: "Docker",
        collapsable: true,
        children: [
          {
            title: "基本概念",
            collapsable: true,
            path: "/docker/basic/",
            children: [
              ["/docker/basic/", "综述"],
              ["/docker/basic/container", "Docker 容器"],
              ["/docker/basic/image", "Docker 镜像"],
            ],
          },
          {
            title: "操作容器",
            collapsable: true,
            path: "/docker/container/",
            children: [
              ["/docker/container/", "综述"],
              ["/docker/container/run", "启动容器"],
              ["/docker/container/daemon", "后台运行容器"],
              ["/docker/container/stop", "终止容器"],
              ["/docker/container/list", "列出容器"],
              ["/docker/container/attach_exec", "进入容器"],
              ["/docker/container/import_export", "导出和导入容器"],
              ["/docker/container/rm", "删除容器"],
            ],
          },
          {
            title: "Dockerfile的最佳实践",
            collapsable: true,
            path: "docker/Dockerfile的最佳实践.md",
          },
        ],
      },
      {
        title: "TypeScript",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          {
            title: "基础篇",
            collapsable: true,
            path: "/typescript/basic/01.基础类型",
            sidebarDepth: 3,
            children: [
              ["/typescript/basic/01.基础类型.md", "01.基础类型"],
              ["/typescript/basic/02.接口.md", "02.接口"],
              ["/typescript/basic/03.类.md", "03.类"],
              ["/typescript/basic/04.函数.md", "04.函数"],
              ["/typescript/basic/05.泛型.md", "05.泛型"],
              ["/typescript/basic/06.其他.md", "06.其他"],
            ],
          },
          {
            title: "高级篇",
            collapsable: true,
            path: "/typescript/advanced/01.工具类型",
            sidebarDepth: 3,
            children: [["/typescript/advanced/01.工具类型.md", "01.工具类型"]],
          },
        ],
      },
      {
        title: "教兄弟女朋友学Koa2",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ["koa2/00.前言.md", "00.前言"],
          ["koa2/01.环境准备.md", "01.环境准备"],
          ["koa2/02.中间件.md", "02.中间件"],
          ["koa2/03.路由.md", "03.路由"],
          ["koa2/04.解析请求参数.md", "04.解析请求参数"],
          ["koa2/05.数据库.md", "05.数据库"],
          ["koa2/06.代码分层.md", "06.代码分层"],
          ["koa2/07.接口鉴权.md", "07.接口鉴权"],
          ["koa2/08.错误处理.md", "08.错误处理"],
        ],
      },
      {
        title: "数据结构",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ["data-structure/01.原生JS实现栈结构.md", "01.原生JS实现栈结构"],
          ["data-structure/02.原生JS实现队结构.md", "02.原生JS实现队结构"],
          ["data-structure/03.原生JS实现单向链表.md", "03.原生JS实现单向链表"],
          ["data-structure/04.原生JS实现双向链表.md", "04.原生JS实现双向链表"],
          [
            "data-structure/05.原生JS实现二叉搜索树.md",
            "05.原生JS实现二叉搜索树",
          ],
          ["data-structure/06.原生JS实现集合结构.md", "06.原生JS实现集合结构"],
        ],
      },
      {
        title: "剑指offer-JavaScript题解",
        collapsable: true,
        sidebarDepth: 0,
        children: [
          [
            "sword-offer-by-JavaScript/01.栈的压入、弹出序列.md",
            "01.栈的压入、弹出序列",
          ],
          [
            "sword-offer-by-JavaScript/02.用两个栈实现队列.md",
            "02.用两个栈实现队列",
          ],
          [
            "sword-offer-by-JavaScript/03.调整数组顺序使奇数位于偶数前面.md",
            "03.调整数组顺序使奇数位于偶数前面",
          ],
          [
            "sword-offer-by-JavaScript/04.包含min函数的栈.md",
            "04.包含min函数的栈",
          ],
          [
            "sword-offer-by-JavaScript/05.从尾到头打印链表.md",
            "05.从尾到头打印链表",
          ],
          [
            "sword-offer-by-JavaScript/06.二维数组中的查找.md",
            "06.二维数组中的查找",
          ],
          [
            "sword-offer-by-JavaScript/07.合并两个排序的链表.md",
            "07.合并两个排序的链表",
          ],
          [
            "sword-offer-by-JavaScript/08.旋转数组的最小数字.md",
            "08.旋转数组的最小数字",
          ],
          [
            "sword-offer-by-JavaScript/09.链表中倒数第k个结点.md",
            "09.链表中倒数第k个结点",
          ],
          [
            "sword-offer-by-JavaScript/10.两个链表的第一个公共结点.md",
            "10.两个链表的第一个公共结点",
          ],
          ["sword-offer-by-JavaScript/11.反转链表.md", "11.反转链表"],
        ],
      },
      {
        title: "使用TypeScript重构axios",
        collapsable: true,
        children: [
          ["axios/01.写在最前面.md", "01.写在最前面"],
          ["axios/02.项目起手，跑通流程.md", "02.项目起手，跑通流程"],
          [
            "axios/03.实现基础功能：处理get请求url参数.md",
            "03.实现基础功能：处理get请求url参数",
          ],
          [
            "axios/04.实现基础功能：处理post请求参数.md",
            "04.实现基础功能：处理post请求参数",
          ],
          [
            "axios/05.实现基础功能：处理请求的header.md",
            "05.实现基础功能：处理请求的header",
          ],
          [
            "axios/06.实现基础功能：获取响应数据.md",
            "06.实现基础功能：获取响应数据",
          ],
          [
            "axios/07.实现基础功能：处理响应header.md",
            "07.实现基础功能：处理响应header",
          ],
          [
            "axios/08.实现基础功能：处理响应data.md",
            "08.实现基础功能：处理响应data",
          ],
          ["axios/09.异常处理：基础版.md", "09.异常处理：基础版"],
          ["axios/10.异常处理：增强版.md", "10.异常处理：增强版"],
          ["axios/11.接口扩展.md", "11.接口扩展"],
          ["axios/12.增加参数.md", "12.增加参数"],
          ["axios/13.让响应数据支持泛型.md", "13.让响应数据支持泛型"],
          ["axios/14.实现拦截器.md", "14.实现拦截器"],
          ["axios/15.默认配置.md", "15.默认配置"],
          ["axios/16.请求和响应数据配置化.md", "16.请求和响应数据配置化"],
          ["axios/17.增加axios.create接口.md", "17.增加axios.create接口"],
          ["axios/18.请求取消功能：总体思路.md", "18.请求取消功能：总体思路"],
          [
            "axios/19.请求取消功能：实现第二种使用方式.md",
            "19.请求取消功能：实现第二种使用方式",
          ],
          [
            "axios/20.请求取消功能：实现第一种使用方式.md",
            "20.请求取消功能：实现第一种使用方式",
          ],
          [
            "axios/21.请求取消功能：添加axios.isCancel接口.md",
            "21.请求取消功能：添加axios.isCancel接口",
          ],
          [
            "axios/21.请求取消功能：添加axios.isCancel接口.md",
            "21.请求取消功能：添加axios.isCancel接口",
          ],
          ["axios/22.请求取消功能：收尾.md", "22.请求取消功能：收尾"],
          ["axios/23.添加withCredentials属性.md", "23.添加withCredentials属性"],
          ["axios/24.防御XSRF攻击.md", "24.防御XSRF攻击"],
          ["axios/25.文件上传下载进度监控.md", "25.文件上传下载进度监控"],
          ["axios/26.添加HTTP授权auth属性.md", "26.添加HTTP授权auth属性"],
          [
            "axios/27.添加请求状态码合法性校验.md",
            "27.添加请求状态码合法性校验",
          ],
          ["axios/28.自定义序列化请求参数.md", "28.自定义序列化请求参数"],
          ["axios/29.添加baseURL.md", "29.添加baseURL"],
          ["axios/30.添加axios.getUrl方法.md", "30.添加axios.getUrl方法"],
          [
            "axios/31.添加axios.all和axios.spread方法.md",
            "31.添加axios.all和axios.spread方法",
          ],
          ["axios/32.写在最后面.md", "32.写在最后面"],
        ],
      },
      {
        title: "逐行剖析Vue.js源码",
        collapsable: true,
        children: [
          {
            title: "写在最前面",
            collapsable: true,
            path: "/learn-vue-source-code/start/",
          },
          {
            title: "变化侦测篇",
            collapsable: true,
            path: "/learn-vue-source-code/reactive/",
            children: [
              ["/learn-vue-source-code/reactive/", "综述"],
              ["/learn-vue-source-code/reactive/object", "Object的变化侦测"],
              ["/learn-vue-source-code/reactive/array", "Array的变化侦测"],
            ],
          },
          {
            title: "虚拟DOM篇",
            collapsable: true,
            path: "/learn-vue-source-code/virtualDOM/",
            children: [
              ["/learn-vue-source-code/virtualDOM/", "Vue中的虚拟DOM"],
              ["/learn-vue-source-code/virtualDOM/patch", "Vue中的DOM-Diff"],
              [
                "/learn-vue-source-code/virtualDOM/updataChildren",
                "更新子节点",
              ],
              [
                "/learn-vue-source-code/virtualDOM/optimizeUpdataChildren",
                "优化更新子节点",
              ],
            ],
          },
          {
            title: "模板编译篇",
            collapsable: true,
            path: "/learn-vue-source-code/complie/",
            children: [
              ["/learn-vue-source-code/complie/", "综述"],
              [
                "/learn-vue-source-code/complie/parse",
                "模板解析阶段(整体运行流程)",
              ],
              [
                "/learn-vue-source-code/complie/HTMLParse",
                "模板解析阶段(HTML解析器)",
              ],
              [
                "/learn-vue-source-code/complie/textParse",
                "模板解析阶段(文本解析器)",
              ],
              ["/learn-vue-source-code/complie/optimize", "优化阶段"],
              ["/learn-vue-source-code/complie/codegen", "代码生成阶段"],
              ["/learn-vue-source-code/complie/summary", "总结"],
            ],
          },
          {
            title: "生命周期篇",
            collapsable: true,
            path: "/learn-vue-source-code/lifecycle/",
            children: [
              ["/learn-vue-source-code/lifecycle/", "综述"],
              [
                "/learn-vue-source-code/lifecycle/newVue",
                "初始化阶段(new Vue)",
              ],
              [
                "/learn-vue-source-code/lifecycle/initLifecycle",
                "初始化阶段(initLifecycle)",
              ],
              [
                "/learn-vue-source-code/lifecycle/initEvents",
                "初始化阶段(initEvents)",
              ],
              [
                "/learn-vue-source-code/lifecycle/initInjections",
                "初始化阶段(initInjections)",
              ],
              [
                "/learn-vue-source-code/lifecycle/initState",
                "初始化阶段(initState)",
              ],
              [
                "/learn-vue-source-code/lifecycle/templateComplie",
                "模板编译阶段",
              ],
              ["/learn-vue-source-code/lifecycle/mount", "挂载阶段"],
              ["/learn-vue-source-code/lifecycle/destory", "销毁阶段"],
            ],
          },
          {
            title: "实例方法篇",
            collapsable: true,
            path: "/learn-vue-source-code/instanceMethods/data",
            children: [
              ["/learn-vue-source-code/instanceMethods/data", "数据相关的方法"],
              [
                "/learn-vue-source-code/instanceMethods/event",
                "事件相关的方法",
              ],
              [
                "/learn-vue-source-code/instanceMethods/lifecycle",
                "生命周期相关的方法",
              ],
            ],
          },
          {
            title: "全局API篇",
            collapsable: true,
            path: "/learn-vue-source-code/globalAPI/",
            children: [["/learn-vue-source-code/globalAPI/", "全局API分析"]],
          },
          {
            title: "过滤器篇",
            collapsable: true,
            path: "/learn-vue-source-code/filter/",
            children: [
              ["/learn-vue-source-code/filter/", "用法回顾"],
              ["/learn-vue-source-code/filter/filterPrinciple", "工作原理"],
              ["/learn-vue-source-code/filter/parseFilters", "解析过滤器"],
            ],
          },
          {
            title: "指令篇",
            collapsable: true,
            path: "/learn-vue-source-code/directives/customDirectives",
            children: [
              [
                "/learn-vue-source-code/directives/customDirectives",
                "自定义指令",
              ],
            ],
          },
          {
            title: "内置组件篇",
            collapsable: true,
            path: "/learn-vue-source-code/BuiltInComponents/keep-alive",
            children: [
              [
                "/learn-vue-source-code/BuiltInComponents/keep-alive",
                "keep-alive",
              ],
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "vuepress-plugin-medium-zoom",
      {
        options: {
          margin: 24,
          background: "white",
          scrollOffset: 0,
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "文档内容有更新，点击刷新立即查看新内容。",
          buttonText: "刷新",
        },
      },
    ],
  ],
};
