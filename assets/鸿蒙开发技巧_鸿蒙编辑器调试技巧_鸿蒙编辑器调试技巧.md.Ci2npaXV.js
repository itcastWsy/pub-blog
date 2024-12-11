import{_ as i,c as a,a5 as t,o as n}from"./chunks/framework.DoP1wijR.js";const e="/pub-blog/assets/image-20240531235823670.ByOADPO8.png",l="/pub-blog/assets/image-20240531230947783.OsZsv1zP.png",p="/pub-blog/assets/image-20240531231710994.CCdtYwrZ.png",r="/pub-blog/assets/image-20240531231342832.Dzod0uwR.png",h="/pub-blog/assets/image-20240531232324089.KVAr_qXu.png",o="/pub-blog/assets/image-20240531232826263.N86_Wsoq.png",k="/pub-blog/assets/image-20240531233143803.UW6gCpf4.png",g="/pub-blog/assets/image-20240531233422423.CjYMyzUy.png",d="/pub-blog/assets/image-20240531233719248.CtFMixfR.png",c="/pub-blog/assets/image-20240531234536893.BkMh6b4s.png",C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"鸿蒙开发技巧/鸿蒙编辑器调试技巧/鸿蒙编辑器调试技巧.md","filePath":"鸿蒙开发技巧/鸿蒙编辑器调试技巧/鸿蒙编辑器调试技巧.md","lastUpdated":1733890373000}'),E={name:"鸿蒙开发技巧/鸿蒙编辑器调试技巧/鸿蒙编辑器调试技巧.md"};function m(u,s,b,y,_,F){return n(),a("div",null,s[0]||(s[0]=[t('<h2 id="最新-huawei-deveco-studio-调试技巧" tabindex="-1">最新 HUAWEI DevEco Studio 调试技巧 <a class="header-anchor" href="#最新-huawei-deveco-studio-调试技巧" aria-label="Permalink to &quot;最新 HUAWEI DevEco Studio 调试技巧&quot;">​</a></h2><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><img src="'+e+'" alt="image-20240531235823670"></p><p>在我们使用 <strong>HUAWEI DevEco Studio</strong> 编辑器开发鸿蒙应用时，免不了要对我们的应用程序进行代码调试。我们根据实际情况，一般会用到以下几种方式进行代码调试。</p><ol><li>肉眼调试法</li><li>注释排错调试法</li><li>try-catch</li><li>控制台输出法</li><li>弹出提示法</li><li><strong>断点调试法</strong></li></ol><h2 id="肉眼调试法" tabindex="-1">肉眼调试法 <a class="header-anchor" href="#肉眼调试法" aria-label="Permalink to &quot;肉眼调试法&quot;">​</a></h2><p><strong>肉眼调试法</strong>也称为<strong>随缘调试法</strong>，一般适用于编辑器有明显错误、或者是刚写完的小段代码中，明显依赖自己的<strong>钛合金狗眼</strong>。当你刚刚写好的一两行代码，运行发现出错时，就可以直接肉眼排错。如</p><p><img src="'+l+'" alt="image-20240531230947783"></p><p><strong>肉眼调试法</strong> 也有很明显的弊端，如果是调试大段程序、或者调试别人的程序。那么此法就不可行了。如：</p><p><img src="'+p+'" alt="image-20240531231710994"></p><h2 id="注释排错调试法" tabindex="-1">注释排错调试法 <a class="header-anchor" href="#注释排错调试法" aria-label="Permalink to &quot;注释排错调试法&quot;">​</a></h2><p><strong>注释排错调试法</strong>一般适用于没有明显的错误，自我感觉莫名其妙导致就出错的情况。如<strong>代码昨天运行的时候还是好好，今天过来突然就不行了</strong>。这个时候，可以大胆的根据代码流程来锁定可能出错的范围，将它注视掉。如果此时程序没有出错，那么就表示锁定出错的范围了。然后继续不断注释其他的，继续缩小范围，继续找到出错的可疑的代码，再进行调错。</p><p><img src="'+r+'" alt="image-20240531231342832"></p><h2 id="控制台输出法" tabindex="-1">控制台输出法 <a class="header-anchor" href="#控制台输出法" aria-label="Permalink to &quot;控制台输出法&quot;">​</a></h2><p><strong>控制台输出法</strong>，是程序员最拿手的调试法。直接在控制台中输出自己想要查看的数据，便捷快速。</p><p><img src="'+h+'" alt="image-20240531232324089"></p><p>但是在 <strong>HUAWEI DevEco Studio</strong>中。控制台的输入也有弊端：</p><ol><li><code>console.log</code>的第一个参数必须时字符串</li><li>无法有效的输出对象类型的数据。</li></ol><p><img src="'+o+'" alt="image-20240531232826263"></p><p>因此对于对象类型的数据，一般可以通过序列化后再输出</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;二师兄&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pug))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>**Tips：**如果是对象数组，可以使用 <code>console.table</code> 来友好的进行输出</p><p><img src="'+k+`" alt="image-20240531233143803"></p><h2 id="try-catch" tabindex="-1">try-catch <a class="header-anchor" href="#try-catch" aria-label="Permalink to &quot;try-catch&quot;">​</a></h2><p>另外有一些程序可能在运行的时候会导致程序成直接崩溃，也没有太多错误提示，这个时候我们可以使用 try-catch 来捕获和输出错误</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onPageShow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;成功输出&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;错误信息&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, e.message, e.code)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="弹出提示法" tabindex="-1">弹出提示法 <a class="header-anchor" href="#弹出提示法" aria-label="Permalink to &quot;弹出提示法&quot;">​</a></h2><p>进行真机调试时，可以直接利用 <code>harmonyos</code>中提供的弹出窗口的方式 进行输出想要查看的数据</p><ol><li><code>promptAction.showToast({ message: &quot;黎猴呀&quot; })</code></li><li><code>AlertDialog.show({ message: &quot;执返剂&quot; })</code></li></ol><p><img src="`+g+'" alt="image-20240531233422423"></p><hr><p><img src="'+d+'" alt="image-20240531233719248"></p><h2 id="断点调试法" tabindex="-1">断点调试法 <a class="header-anchor" href="#断点调试法" aria-label="Permalink to &quot;断点调试法&quot;">​</a></h2><p>如果上述的方案都解决不了你调试bug的需求，那么最后一种你就一定要拿捏住。 该方式主要是利用了 <strong>HUAWEI DevEco Studio</strong>种提供的断点调试方式来进行。</p><p><img src="'+c+'" alt="image-20240531234536893"></p><h2 id="结束" tabindex="-1">结束 <a class="header-anchor" href="#结束" aria-label="Permalink to &quot;结束&quot;">​</a></h2><p>如果可以帮助到你，欢迎来撩</p><ol><li>邮箱 <code>yeah126139163@163.com</code></li><li>微信 <code>w846903522</code></li><li><a href="https://juejin.cn/user/4441682708283191" target="_blank" rel="noreferrer">掘金</a></li><li><a href="https://space.bilibili.com/414874315?spm_id_from=333.1007.0.0" target="_blank" rel="noreferrer">b站</a></li><li>公众号 <code>程序员漫谈</code></li></ol>',38)]))}const f=i(E,[["render",m]]);export{C as __pageData,f as default};
