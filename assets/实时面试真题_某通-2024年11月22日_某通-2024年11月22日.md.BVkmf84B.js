import{_ as e,c as r,a2 as t,o}from"./chunks/framework.Y1dwPOgg.js";const u=JSON.parse('{"title":"1. 自我介绍","description":"","frontmatter":{},"headers":[],"relativePath":"实时面试真题/某通-2024年11月22日/某通-2024年11月22日.md","filePath":"实时面试真题/某通-2024年11月22日/某通-2024年11月22日.md","lastUpdated":1732449046000}'),h={name:"实时面试真题/某通-2024年11月22日/某通-2024年11月22日.md"};function i(l,a,n,s,c,d){return o(),r("div",null,a[0]||(a[0]=[t('<h1 id="_1-自我介绍" tabindex="-1">1. 自我介绍 <a class="header-anchor" href="#_1-自我介绍" aria-label="Permalink to &quot;1. 自我介绍&quot;">​</a></h1><h1 id="_2-项目中用的路由跳转" tabindex="-1">2. 项目中用的路由跳转 <a class="header-anchor" href="#_2-项目中用的路由跳转" aria-label="Permalink to &quot;2. 项目中用的路由跳转&quot;">​</a></h1><p>路由跳转有两种方案 router 和 Navigation ，目前推荐使用 Navigation 。因为</p><ol><li>router最多页面栈为32个，Navigation 无限制</li><li>Navigation 支持一多开发，Auto模式自适应单栏跟双栏显示</li><li>Navigation 支持获取指定页面参数</li><li>Navigation 清理指定路由</li><li>Navigation 支持路由拦截</li></ol><h1 id="_3-navpathstack对象是怎么传递的" tabindex="-1">3. NavPathStack对象是怎么传递的？ <a class="header-anchor" href="#_3-navpathstack对象是怎么传递的" aria-label="Permalink to &quot;3. NavPathStack对象是怎么传递的？&quot;">​</a></h1><p>主要有两种方式</p><ol><li>通过 @provide和@consume进行传递</li><li>如果不是组件使用 NavPathStack，那么就不能使用以上的装饰器了。这个时候我们可以将 NavPathStack 封装在一个单独的文件中，通过导入导出来共享使用</li></ol><h1 id="_4-讲一下hap、hsp、har三个包的区别" tabindex="-1">4. 讲一下hap、hsp、har三个包的区别 <a class="header-anchor" href="#_4-讲一下hap、hsp、har三个包的区别" aria-label="Permalink to &quot;4. 讲一下hap、hsp、har三个包的区别&quot;">​</a></h1><p>HarmonyOS中有三种类型的包：HAP（HarmonyOS Ability Package）、HAR（Harmony Archive）、HSP（Harmony Shared Package）。</p><ol><li>HAP是应用安装和运行的基本单元，分为entry和feature两种类型。</li><li>HAR是静态共享包，用于代码和资源的共享。</li><li>HSP是动态共享包，用于应用内共享代码和资源。</li></ol><h1 id="_5-hsp里面可以写页面吗" tabindex="-1">5. hsp里面可以写页面吗？ <a class="header-anchor" href="#_5-hsp里面可以写页面吗" aria-label="Permalink to &quot;5. hsp里面可以写页面吗？&quot;">​</a></h1><p>可以</p><h1 id="_6-features层也不一定要用hsp-也可以用har去设计-为什么要用hsp-har设计" tabindex="-1">6. features层也不一定要用Hsp，也可以用har去设计(为什么要用Hsp+Har设计) <a class="header-anchor" href="#_6-features层也不一定要用hsp-也可以用har去设计-为什么要用hsp-har设计" aria-label="Permalink to &quot;6. features层也不一定要用Hsp，也可以用har去设计(为什么要用Hsp+Har设计)&quot;">​</a></h1><p>HAR是静态共享包，用于代码和资源的共享。一般使用HAR的前提是，这个模块的功能不仅仅是提供给当前项目使用，可能还会提供给另一个项目使用。比如京东登录，京东金融可以使用、京东读书也可以使用。那么就可以考虑使用har了。</p><h1 id="_7-讲一下项目中的数据存储" tabindex="-1">7. 讲一下项目中的数据存储 <a class="header-anchor" href="#_7-讲一下项目中的数据存储" aria-label="Permalink to &quot;7. 讲一下项目中的数据存储&quot;">​</a></h1><h1 id="_8-persistentstorage能存对象吗" tabindex="-1">8. PersistentStorage能存对象吗？ <a class="header-anchor" href="#_8-persistentstorage能存对象吗" aria-label="Permalink to &quot;8. PersistentStorage能存对象吗？&quot;">​</a></h1><h1 id="_9-preference在存储在本地的文件是以什么为单位" tabindex="-1">9. preference在存储在本地的文件是以什么为单位 <a class="header-anchor" href="#_9-preference在存储在本地的文件是以什么为单位" aria-label="Permalink to &quot;9. preference在存储在本地的文件是以什么为单位&quot;">​</a></h1><h1 id="_10-讲一下lazyforeach" tabindex="-1">10. 讲一下LazyForeach <a class="header-anchor" href="#_10-讲一下lazyforeach" aria-label="Permalink to &quot;10. 讲一下LazyForeach&quot;">​</a></h1><h1 id="_11-lazyforeach的第三个参数是什么" tabindex="-1">11. lazyforeach的第三个参数是什么 <a class="header-anchor" href="#_11-lazyforeach的第三个参数是什么" aria-label="Permalink to &quot;11. lazyforeach的第三个参数是什么&quot;">​</a></h1><h1 id="_12-lazyforeach的key是怎么生成的" tabindex="-1">12. lazyforeach的key是怎么生成的 <a class="header-anchor" href="#_12-lazyforeach的key是怎么生成的" aria-label="Permalink to &quot;12. lazyforeach的key是怎么生成的&quot;">​</a></h1><h1 id="_13-深层次数据怎么刷新" tabindex="-1">13. 深层次数据怎么刷新 <a class="header-anchor" href="#_13-深层次数据怎么刷新" aria-label="Permalink to &quot;13. 深层次数据怎么刷新&quot;">​</a></h1><h1 id="_14-讲一下页面的生命周期" tabindex="-1">14. 讲一下页面的生命周期 <a class="header-anchor" href="#_14-讲一下页面的生命周期" aria-label="Permalink to &quot;14. 讲一下页面的生命周期&quot;">​</a></h1><h1 id="_15-abouttoappear在什么时候执行" tabindex="-1">15. aboutToAppear在什么时候执行？ <a class="header-anchor" href="#_15-abouttoappear在什么时候执行" aria-label="Permalink to &quot;15. aboutToAppear在什么时候执行？&quot;">​</a></h1><h1 id="_16-加入了-reusable之后会多出哪两个生命周期" tabindex="-1">16. 加入了@Reusable之后会多出哪两个生命周期 <a class="header-anchor" href="#_16-加入了-reusable之后会多出哪两个生命周期" aria-label="Permalink to &quot;16. 加入了@Reusable之后会多出哪两个生命周期&quot;">​</a></h1><h1 id="_17-navigation的生命周期是" tabindex="-1">17. Navigation的生命周期是？ <a class="header-anchor" href="#_17-navigation的生命周期是" aria-label="Permalink to &quot;17. Navigation的生命周期是？&quot;">​</a></h1>',25)]))}const _=e(h,[["render",i]]);export{u as __pageData,_ as default};
