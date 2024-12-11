import{_ as r,c as a,a5 as t,o as l}from"./chunks/framework.DoP1wijR.js";const o="/pub-blog/assets/image-20241124081207334.Cj6rihi7.png",i="/pub-blog/assets/image-20241124085051765.C7aM7jfD.png",n="/pub-blog/assets/image-20241124085159121.CcLmnnVk.png",f=JSON.parse('{"title":"某迈-2024年11月22日","description":"","frontmatter":{},"headers":[],"relativePath":"实时面试真题/某迈-2024年11月22日/某迈-2024年11月22日.md","filePath":"实时面试真题/某迈-2024年11月22日/某迈-2024年11月22日.md","lastUpdated":1733890373000}'),s={name:"实时面试真题/某迈-2024年11月22日/某迈-2024年11月22日.md"};function c(h,e,p,d,m,u){return l(),a("div",null,e[0]||(e[0]=[t('<h1 id="某迈-2024年11月22日" tabindex="-1">某迈-2024年11月22日 <a class="header-anchor" href="#某迈-2024年11月22日" aria-label="Permalink to &quot;某迈-2024年11月22日&quot;">​</a></h1><h1 id="_1-自我介绍" tabindex="-1">1. 自我介绍 <a class="header-anchor" href="#_1-自我介绍" aria-label="Permalink to &quot;1. 自我介绍&quot;">​</a></h1><h1 id="_2-鸿蒙中地图功能如何实现-申请流程是什么样的" tabindex="-1">2. 鸿蒙中地图功能如何实现，申请流程是什么样的 <a class="header-anchor" href="#_2-鸿蒙中地图功能如何实现-申请流程是什么样的" aria-label="Permalink to &quot;2. 鸿蒙中地图功能如何实现，申请流程是什么样的&quot;">​</a></h1><ol><li>主要通过 集成 Map Kit 的功能来实现</li><li>Map Kit 功能很强大，比如有 <ol><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-creation-V5" target="_blank" rel="noreferrer">创建地图</a>：呈现内容包括建筑、道路、水系等。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-interaction-V5" target="_blank" rel="noreferrer">地图交互</a>：控制地图的交互手势和交互按钮。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-drawing-V5" target="_blank" rel="noreferrer">在地图上绘制</a>：添加<strong>位置标记、覆盖物以及各种形状</strong>等。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-location-services-V5" target="_blank" rel="noreferrer"><strong>位置搜索</strong></a>：多种查询Poi信息的能力。</li><li><strong><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-navi-V5" target="_blank" rel="noreferrer">路径规划</a></strong>：提供驾车、步行、骑行路径规划能力。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-static-diagram-V5" target="_blank" rel="noreferrer">静态图</a>：获取一张地图图片。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-advanced-controls-V5" target="_blank" rel="noreferrer">地图Picker</a>：<strong>提供地点详情展示控件、地点选取控件、区划选择控件</strong>。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-petalmaps-V5" target="_blank" rel="noreferrer">通过Petal 地图应用实现导航等能力</a>：查看位置详情、查看路径规划、发起<strong>导航</strong>、发起内容搜索。</li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-calculation-tool-V5" target="_blank" rel="noreferrer">地图计算工具</a>：华为地图涉及的2<strong>种坐标系及其使用区域和转换</strong></li></ol></li><li>在编码之前需要 <ol><li>完成证书的申请和公钥指纹的一些配置</li><li>还要在AGC平台上开通地图服务应用</li><li>代码中使用 项目的 <strong>client_id</strong></li><li>最后开始编码</li></ol></li></ol><h1 id="_3-一多开发是如何实现的" tabindex="-1">3. 一多开发是如何实现的 <a class="header-anchor" href="#_3-一多开发是如何实现的" aria-label="Permalink to &quot;3. 一多开发是如何实现的&quot;">​</a></h1><ol><li>一多开发是一次开发多端部署</li><li>主要分成三个核心部分 <ol><li>工程级一多</li><li>界面级一多</li><li>能力级一多</li></ol></li><li>工程级一多主要指的是使用华为鸿蒙推荐的三层架构来搭建项目，比如 <ol><li>第一层，最底层是 common-公共能力层，用于存放公共基础能力集合（如工具库、公共配置等），一般是使用HSP包(动态共享包)，这样它被项目中多个模块引入的话，也只会保留一个备份。</li><li>第二层，是features-基础特性层，用于存放基础特性集合（如应用中相对独立的各个功能的UI及业务逻辑实现等）</li><li>顶层是，products-产品定制层，用于针对不同设备形态进行功能和特性集成</li></ol></li><li>界面级一多指的是一套代码可以适配不同尺寸、形态的设备，主要通过以下这些技术来实现 <ol><li>自适应布局 等比拉伸缩放等等相关技术</li><li>响应式布局 通过断点、媒体查询、栅格布局来实现</li></ol></li><li>能力级一多主要指的是不同硬件设备支持能力不一样，如蓝牙、摄像头、传感器等等。这些主要通过判断当前设置是否支持该能力来决定是否调用相关的api功能。如利用编辑器工具的智能提示、和代码中使用的caniuse或者try-catch进行判断使用。</li></ol><h1 id="_4-录音有做过吗-avrecoder有几种状态" tabindex="-1">4. 录音有做过吗？avrecoder有几种状态？ <a class="header-anchor" href="#_4-录音有做过吗-avrecoder有几种状态" aria-label="Permalink to &quot;4. 录音有做过吗？avrecoder有几种状态？&quot;">​</a></h1><p>录音可以通过AVRecorder和AudioCapturer来实现。两者区别主要在支持录制声音的格式不同和控制录音文件的细小粒度不同上。AVRecorder会简单一些，AudioCapturer会复杂一些-还可以搭配ai语音功能使用</p><p>AVRecorder主要有以下这些状态：</p><p><img src="'+o+'" alt="image-20241124081207334"></p><table tabindex="0"><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">&#39;idle&#39;</td><td style="text-align:left;">闲置状态。</td></tr><tr><td style="text-align:left;">&#39;prepared&#39;</td><td style="text-align:left;">参数设置完成</td></tr><tr><td style="text-align:left;">&#39;started&#39;</td><td style="text-align:left;">正在录制。</td></tr><tr><td style="text-align:left;">&#39;paused&#39;</td><td style="text-align:left;">录制暂停。</td></tr><tr><td style="text-align:left;">&#39;stopped&#39;</td><td style="text-align:left;">录制停止。</td></tr><tr><td style="text-align:left;">&#39;released&#39;</td><td style="text-align:left;">录制资源释放。</td></tr><tr><td style="text-align:left;">&#39;error&#39;</td><td style="text-align:left;">错误状态。</td></tr></tbody></table><h1 id="_5-图片上传有做过吗-图片处理-旋转、缩放、图片保存有做过吗" tabindex="-1">5. 图片上传有做过吗？图片处理，旋转、缩放、图片保存有做过吗？ <a class="header-anchor" href="#_5-图片上传有做过吗-图片处理-旋转、缩放、图片保存有做过吗" aria-label="Permalink to &quot;5. 图片上传有做过吗？图片处理，旋转、缩放、图片保存有做过吗？&quot;">​</a></h1><p>做过相册图片的上传（如果是沙箱内的图片只需要1个步骤即可，直接上传），流程主要有3个步骤，基于photoAccessHelper 、CoreFileKit、NetworkKit来实现的</p><ol><li>photoAccessHelper 用来实现选择要上传的相册的图片</li><li>CoreFileKit 将相册图片拷贝到沙箱目录</li><li>NetworkKit 负责将沙箱目录内的图片上传到服务器上</li></ol><p>图片处理，旋转、缩放、图片保存主要基于Image Kit来实现。它提供有</p><ul><li><p>图片解码</p><p>指将所支持格式的存档图片解码成统一的PixelMap，以便在应用或系统中进行图片显示或图片处理。</p></li><li><p>PixelMap</p><p>指图片解码后无压缩的位图，用于图片显示或图片处理。</p></li><li><p><strong>图片处理</strong></p><p>指对PixelMap进行相关的操作，如旋转、缩放、设置透明度、获取图片信息、读写像素数据等。</p></li><li><p><strong>图片编码</strong></p><p>指将PixelMap编码成不同格式的存档图片，用于后续处理，如保存、传输等。</p></li></ul><p>其中压缩图片是通过 一个ImageKit的packing函数，传入压缩比例(0-100)来是实现的。值越小体积越小</p><h1 id="_6-视频有做过吗" tabindex="-1">6. 视频有做过吗？ <a class="header-anchor" href="#_6-视频有做过吗" aria-label="Permalink to &quot;6. 视频有做过吗？&quot;">​</a></h1><ol><li>如果是普通的视频播放直接使用 Video组件来播放即可。功能相对弱一些</li><li>如果是对视频播放进行神帝的一些处理，如流媒体、本地资源解析、媒体资源解封装、视频解码和自定义渲染的这些功能，可以使用AVPlayer来实现。</li><li>如果类似做一个编辑视频的软件，那么就需要使用到对应的CAPI接口来实现了(调用底层c++的能力)</li></ol><h1 id="_7-同事发给你代码-你怎么知道它的bundlename" tabindex="-1">7. 同事发给你代码，你怎么知道它的bundlename <a class="header-anchor" href="#_7-同事发给你代码-你怎么知道它的bundlename" aria-label="Permalink to &quot;7. 同事发给你代码，你怎么知道它的bundlename&quot;">​</a></h1><p>一般直接看AppScope中的字段就行</p><h1 id="_8-鸿蒙如何和网页端通信" tabindex="-1">8. 鸿蒙如何和网页端通信？ <a class="header-anchor" href="#_8-鸿蒙如何和网页端通信" aria-label="Permalink to &quot;8. 鸿蒙如何和网页端通信？&quot;">​</a></h1><ol><li>如果是应用的话，使用web组件和对应的controller的一些接口，如 <a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-webview-V5#runjavascript" target="_blank" rel="noreferrer">runJavaScript()</a>和<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-webview-V5#runjavascriptext10" target="_blank" rel="noreferrer">runJavaScriptExt()</a></li><li>如果是元服务的话，使用AtomicServiceWeb来实现，因为2025年1月22日后不支持使用web。还有AtomicServiceWeb没有了web中的如 <a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-webview-V5#runjavascript" target="_blank" rel="noreferrer">runJavaScript()</a>和<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-webview-V5#runjavascriptext10" target="_blank" rel="noreferrer">runJavaScriptExt()</a>接口，但是它一样可以通过页面的url进行参数的传递和鸿蒙端提供了js sdk，也可以很方便的让h5端调用鸿蒙端的功能</li></ol><h1 id="_9-跨域是怎么处理的" tabindex="-1">9. 跨域是怎么处理的？ <a class="header-anchor" href="#_9-跨域是怎么处理的" aria-label="Permalink to &quot;9. 跨域是怎么处理的？&quot;">​</a></h1><blockquote><p>跨域存在于不同源的浏览器和服务器的网络通信中，因为鸿蒙端嵌套了web组件，理解成就是一个浏览器，因此也会存在跨域</p></blockquote><p>为了提高安全性，ArkWeb内核不允许file协议或者resource协议访问URL上下文中来自跨域的请求。因此，在使用Web组件加载本地离线</p><p>资源的时候，Web组件会拦截file协议和resource协议的跨域访问。</p><p>主要有两种解决方案</p><ol><li>将本地资源替换成网络资源，也就是file协议访问的是本地的资源，我们将本地资源放在网络上，通过http请求的方式来加载，然后在后端设置cors跨域即可。同时，开发者需利用Web组件的<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-basic-components-web-V5#oninterceptrequest9" target="_blank" rel="noreferrer">onInterceptRequest</a>方法，对本地资源进行拦截和相应的替换</li><li>通过<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-webview-V5#setpathallowinguniversalaccess12" target="_blank" rel="noreferrer">setPathAllowingUniversalAccess 白名单</a>设置一个路径列表。当使用file协议访问该列表中的资源时，允许进行跨域访问本地文件</li></ol><h1 id="_10-录音过程中息屏怎么处理" tabindex="-1">10. 录音过程中息屏怎么处理？ <a class="header-anchor" href="#_10-录音过程中息屏怎么处理" aria-label="Permalink to &quot;10. 录音过程中息屏怎么处理？&quot;">​</a></h1><p>可以通过申请<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/continuous-task-V5" target="_blank" rel="noreferrer">长时任务</a>，实现在后台长时间运行。长时任务支持的类型，包含数据传输、音视频播放、录制、定位导航、蓝牙相关、多设备互联、WLAN相关、音视频通话和计算任务</p><p>开发步骤如下：</p><ol><li>需要申请<strong>ohos.permission.KEEP_BACKGROUND_RUNNING</strong>权限</li><li>声明后台模式类型（录音等）</li><li>通过 @ohos.resourceschedule.backgroundTaskManager和@ohos.app.ability.wantAgent 进行编码处理</li></ol><h1 id="_11-有做过华为支付吗" tabindex="-1">11. 有做过华为支付吗？ <a class="header-anchor" href="#_11-有做过华为支付吗" aria-label="Permalink to &quot;11. 有做过华为支付吗？&quot;">​</a></h1><p>需要企业资质、需要在AGC平台上开通服务。</p><p><img src="'+i+'" alt="image-20241124085051765"></p><ol><li><strong>商户客户端请求商户服务器创建商品订单。</strong></li><li>商户服务器按照商户模型调用Payment Kit服务端<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/payment-prepay-V5" target="_blank" rel="noreferrer">直连商户预下单</a>或<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/payment-agent-prepay-V5" target="_blank" rel="noreferrer">平台类商户/服务商预下单</a>接口。</li><li>华为支付服务端返回预支付ID（prepayId）。</li><li>商户服务端组建订单信息参数<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/payment-model-V5#section159202591414" target="_blank" rel="noreferrer">orderStr</a>返回给商户客户端。</li><li><strong>商户客户端调用<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/payment-paymentservice-V5#section192192415554" target="_blank" rel="noreferrer">requestPayment</a>接口调起Payment Kit支付收银台。</strong></li><li>Payment Kit客户端展示收银台。</li><li>用户通过收银台完成支付，Payment Kit客户端会收到支付结果信息并请求Payment Kit服务端处理支付。</li><li>Payment Kit服务端成功受理支付订单并异步处理支付。</li><li>Payment Kit服务端将支付结果返回给Payment Kit客户端。</li><li><strong>Payment Kit客户端展示支付结果页。</strong></li><li><strong>用户关闭支付结果页后Payment Kit客户端会返回支付状态给商户客户端。</strong></li><li>支付处理完成后，Payment Kit服务端会调用回调接口返回支付结果信息给商户服务端。</li><li>商户服务端收到支付结果回调响应后，使用<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/payment-rest-overview-V5#section17670192215175" target="_blank" rel="noreferrer">SM2验签方式</a>对支付结果进行验签。</li></ol><h1 id="_12-说一下多线程" tabindex="-1">12. 说一下多线程 <a class="header-anchor" href="#_12-说一下多线程" aria-label="Permalink to &quot;12. 说一下多线程&quot;">​</a></h1><p><a href="https://juejin.cn/post/7435302345448259622" target="_blank" rel="noreferrer">参考</a></p><p><img src="'+n+'" alt="image-20241124085159121"></p><h1 id="_13-你最擅长的是哪个功能哪个模块" tabindex="-1">13. 你最擅长的是哪个功能哪个模块？ <a class="header-anchor" href="#_13-你最擅长的是哪个功能哪个模块" aria-label="Permalink to &quot;13. 你最擅长的是哪个功能哪个模块？&quot;">​</a></h1><h1 id="_14-有些功能鸿蒙尚未适配-华为那边回复慢-你会怎么处理" tabindex="-1">14. 有些功能鸿蒙尚未适配，华为那边回复慢，你会怎么处理？ <a class="header-anchor" href="#_14-有些功能鸿蒙尚未适配-华为那边回复慢-你会怎么处理" aria-label="Permalink to &quot;14. 有些功能鸿蒙尚未适配，华为那边回复慢，你会怎么处理？&quot;">​</a></h1><ol><li>商量是否替换解决方案或者砍功能、延期实现功能</li></ol><h1 id="_15-在客户那边遇到一些困难-只有你一个人在驻场-如何解决" tabindex="-1">15. 在客户那边遇到一些困难，只有你一个人在驻场，如何解决？ <a class="header-anchor" href="#_15-在客户那边遇到一些困难-只有你一个人在驻场-如何解决" aria-label="Permalink to &quot;15. 在客户那边遇到一些困难，只有你一个人在驻场，如何解决？&quot;">​</a></h1><ol><li>先分析问题的边界，判断是否在自己的能力范围之内，或者开发团队能力范围之内。比如是华为鸿蒙那边的问题还是我们开发团队的问题</li><li>如果不能及时判断出来，随机先安抚客户、然后自己项目团队汇报，随即给出客户对应的解决方案。</li><li>执行解决方案</li></ol>',45)]))}const b=r(s,[["render",c]]);export{f as __pageData,b as default};
