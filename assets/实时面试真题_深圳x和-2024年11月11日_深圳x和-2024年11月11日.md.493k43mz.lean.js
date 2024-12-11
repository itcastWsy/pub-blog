import{_ as o,c as r,a2 as t,o as e}from"./chunks/framework.Y1dwPOgg.js";const i="/pub-blog/assets/image-20241110140840938.DtrCZmnt.png",m=JSON.parse('{"title":"总时长","description":"","frontmatter":{},"headers":[],"relativePath":"实时面试真题/深圳x和-2024年11月11日/深圳x和-2024年11月11日.md","filePath":"实时面试真题/深圳x和-2024年11月11日/深圳x和-2024年11月11日.md","lastUpdated":1733887399000}'),n={name:"实时面试真题/深圳x和-2024年11月11日/深圳x和-2024年11月11日.md"};function l(s,a,g,d,p,h){return e(),r("div",null,a[0]||(a[0]=[t('<h1 id="总时长" tabindex="-1">总时长 <a class="header-anchor" href="#总时长" aria-label="Permalink to &quot;总时长&quot;">​</a></h1><p>20分钟</p><h1 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h1><ol><li><p>自我介绍</p></li><li><p>HarmonyOS中的生命周期</p></li><li><p>用Entry和Navigation装饰的页面有哪些区别</p></li><li><p>HarmonyOS中里面有几种包，分别有什么作用</p></li><li><p>简单介绍一下Stage模型</p></li><li><p>HarmonyOS中的动画</p></li><li><p>如果我从A页面跳到B页面，然后再从B页面跳回A页面，并且想要携带数据，你会怎么做</p></li><li><p>ArkTS和TS的区别有哪些区别</p></li><li><p>了解过多线程吗</p></li></ol><h1 id="_1-harmonyos中的生命周期" tabindex="-1">1. HarmonyOS中的生命周期 <a class="header-anchor" href="#_1-harmonyos中的生命周期" aria-label="Permalink to &quot;1. HarmonyOS中的生命周期&quot;">​</a></h1><p><strong>页面生命周期</strong></p><ol><li><strong>onpageshow</strong>：页面每次显示时触发，包括路由过程、应用进入前台等场景。例如，用户从后台切换应用到前台，或者通过路由跳转到该页面时，此方法会被调用</li><li><strong>onpagehide</strong>：页面每次隐藏时触发，包括路由过程、应用进入后台等场景。比如用户按下主页键将应用切换到后台，或者通过路由跳转到其他页面时，该页面的 onpagehide 方法会被执行</li><li><strong>onbackpress</strong>：当用户点击返回按钮时触发。如果返回值为 true，表示页面自己处理返回逻辑，不进行页面路由；返回 false 则表示使用默认的路由返回逻辑，不设置返回值时按照 false 处理</li></ol><p><strong>组件生命周期</strong></p><ol><li><strong>abouttoappear</strong>：组件即将出现时回调该接口，具体时机为在创建自定义组件的新实例后，在执行其 build () 函数之前执行。在该函数中可以修改变量，更改将在后续执行 build () 函数中生效</li><li><strong>abouttodisappear</strong>：在自定义组件析构销毁之前执行。在此函数中不允许改变状态变量，特别是 @link 变量的修改可能会导致应用程序行为不稳定</li></ol><p><strong>UIAbility 生命周期</strong></p><ol><li><strong>create 状态</strong>：在应用加载过程中，UIAbility 实例创建完成时触发，系统会调用 oncreate () 回调。可以在该回调中进行页面初始化操作，例如变量定义、资源加载等，用于后续的 UI 展示</li><li><strong>windowstagecreate 状态</strong>：UIAbility 实例创建完成之后，在进入 foreground 之前，系统会创建一个 windowstage。windowstage 创建完成后会进入 onwindowstagecreate () 回调，可以在该回调中设置 UI 加载、设置 windowstage 的事件订阅，如获焦 / 失焦、可见 / 不可见等事件</li><li><strong>foreground 状态</strong>：当 UIAbility 实例切换至前台时触发，对应于 onforeground () 回调。在 onforeground () 中可以申请系统需要的资源，或者重新申请在 onbackground 中释放的资源.</li><li><strong>background 状态</strong>：当 UIAbility 实例切换至后台时触发，对应于 onbackground () 回调。在该回调中可以释放 UI 界面不可见时无用的资源，或者在此回调中执行较为耗时的操作，例如状态保存等.</li><li><strong>windowstagedestroy 状态</strong>：在 UIAbility 实例销毁之前，会先进入 onwindowstagedestroy 回调，可以在该回调中释放 UI 界面资源</li><li><strong>destroy 状态</strong>：在 UIAbility 实例销毁时触发，可以在 ondestroy () 回调中进行系统资源的释放、数据的保存等操作</li></ol><h1 id="_2-用entry和navigation装饰的页面有哪些区别" tabindex="-1">2. 用Entry和Navigation装饰的页面有哪些区别 <a class="header-anchor" href="#_2-用entry和navigation装饰的页面有哪些区别" aria-label="Permalink to &quot;2. 用Entry和Navigation装饰的页面有哪些区别&quot;">​</a></h1><ol><li>@Entry装饰的页面是应用的入口页面，通常用于展示应用的初始界面，而Navigation组件是一个导航容器，挂载在单个页面下，支持跨模块的动态路由。</li><li>@Entry页面具有通用的生命周期方法，而Navigation组件里的页面不执行onPageShow、onPageHide等生命周期回调。</li></ol><h1 id="_3-harmonyos中里面有几种包-分别有什么作用" tabindex="-1">3. HarmonyOS中里面有几种包，分别有什么作用 <a class="header-anchor" href="#_3-harmonyos中里面有几种包-分别有什么作用" aria-label="Permalink to &quot;3. HarmonyOS中里面有几种包，分别有什么作用&quot;">​</a></h1><p>HarmonyOS中有三种类型的包：HAP（HarmonyOS Ability Package）、HAR（Harmony Archive）、HSP（Harmony Shared Package）。</p><ol><li>HAP是应用安装和运行的基本单元，分为entry和feature两种类型。</li><li>HAR是静态共享包，用于代码和资源的共享。</li><li>HSP是动态共享包，用于应用内共享代码和资源。</li></ol><h1 id="_4-简单介绍一下stage模型" tabindex="-1">4. 简单介绍一下Stage模型 <a class="header-anchor" href="#_4-简单介绍一下stage模型" aria-label="Permalink to &quot;4. 简单介绍一下Stage模型&quot;">​</a></h1><ol><li>Stage模型是HarmonyOS应用开发的基础架构，它提供了面向对象的开发方式，规范化了进程创建的方式，并提供组件化开发机制。</li><li>Stage模型的组件天生具备分布式迁移和协同的能力，支持多设备形态和多窗口形态，重新定义了应用能力边界。</li></ol><h1 id="_5-harmonyos中的动画" tabindex="-1">5. HarmonyOS中的动画 <a class="header-anchor" href="#_5-harmonyos中的动画" aria-label="Permalink to &quot;5. HarmonyOS中的动画&quot;">​</a></h1><p>HarmonyOS提供了多种动画能力，包括属性动画、显式动画、转场动画、路径动画和粒子动画。</p><h1 id="_6-如何进行路由页面传参" tabindex="-1">6. 如何进行路由页面传参 <a class="header-anchor" href="#_6-如何进行路由页面传参" aria-label="Permalink to &quot;6. 如何进行路由页面传参&quot;">​</a></h1><p>在HarmonyOS中，可以通过router.pushUrl方法跳转到目标页面，并携带参数。在进入被分享页面时，通过router.getParams()来获取</p><p>传递的数据。此外，还可以使用LocalStorage等在页面间共享状态。</p><h1 id="_7-arkts和ts的区别有哪些区别" tabindex="-1">7. ArkTS和TS的区别有哪些区别 <a class="header-anchor" href="#_7-arkts和ts的区别有哪些区别" aria-label="Permalink to &quot;7. ArkTS和TS的区别有哪些区别&quot;">​</a></h1><p>ArkTS是HarmonyOS优选的主力应用开发语言，它保持了TypeScript的基本风格，同时通过规范定义强化开发期静态检查和分析，提升程序执行稳定性和性能。ArkTS与TS的主要区别在于ArkTS是静态类型的，而TS支持动态类型。ArkTS在编译时进行类型检查，有助于在代码运行前发现和修复错误。</p><h1 id="_8-了解过多线程吗" tabindex="-1">8. 了解过多线程吗 <a class="header-anchor" href="#_8-了解过多线程吗" aria-label="Permalink to &quot;8. 了解过多线程吗&quot;">​</a></h1><p><a href="https://juejin.cn/post/7435302345448259622" target="_blank" rel="noreferrer">详解链接</a></p><p><img src="'+i+'" alt="image-20241110140840938"></p>',28)]))}const y=o(n,[["render",l]]);export{m as __pageData,y as default};
