import{_ as a,c as i,a5 as t,o as n}from"./chunks/framework.DoP1wijR.js";const e="/pub-blog/assets/image-20240929004710826.DxJTEN2v.png",p="/pub-blog/assets/image-20240929010044597.CK82EWrP.png",r="/pub-blog/assets/image-20240929011503966.BAVR9uj6.png",l="/pub-blog/assets/image-20240929011553049.DslWGw4i.png",d="/pub-blog/assets/image-20240929011750736.BmEKU_y0.png",h="/pub-blog/assets/image-20240929012128049.BQqFQb6S.png",k="/pub-blog/assets/image-20240929012352082.BENiwJuk.png",c="/pub-blog/assets/PixPin_2024-09-29_01-31-34.CqzLduWC.gif",o="/pub-blog/assets/PixPin_2024-09-29_01-33-28.DqlaKwff.gif",g="/pub-blog/assets/image-20240929013703645.YemOisCO.png",b="/pub-blog/assets/image-20240929013924434.w32Fkxdd.png",m="/pub-blog/assets/image-20240929014127121.CI6s_-UU.png",u="/pub-blog/assets/image-20240929014309520.BJoUqVfx.png",y="/pub-blog/assets/image-20240929010933164.B8PYFOXF.png",E="/pub-blog/assets/image-20240929014948209.BnnOTW6Y.png",F="/pub-blog/assets/image-20240929015033130.C4I3xR9g.png",f=JSON.parse('{"title":"HarmonyOS Next 如何优雅的编写注释","description":"","frontmatter":{},"headers":[],"relativePath":"鸿蒙开发技巧/HarmonyOS Next 如何优雅的编写注释/HarmonyNext如何优雅的编写注释.md","filePath":"鸿蒙开发技巧/HarmonyOS Next 如何优雅的编写注释/HarmonyNext如何优雅的编写注释.md","lastUpdated":1733890373000}'),D={name:"鸿蒙开发技巧/HarmonyOS Next 如何优雅的编写注释/HarmonyNext如何优雅的编写注释.md"};function A(_,s,v,x,C,B){return n(),i("div",null,s[0]||(s[0]=[t('<h1 id="harmonyos-next-如何优雅的编写注释" tabindex="-1">HarmonyOS Next 如何优雅的编写注释 <a class="header-anchor" href="#harmonyos-next-如何优雅的编写注释" aria-label="Permalink to &quot;HarmonyOS Next 如何优雅的编写注释&quot;">​</a></h1><h1 id="程序员箴言" tabindex="-1">程序员箴言 <a class="header-anchor" href="#程序员箴言" aria-label="Permalink to &quot;程序员箴言&quot;">​</a></h1><p><strong>我最讨厌世界上的两种人：</strong></p><ol><li><strong>第一种是不写注释的人</strong></li><li><strong>第二种是让我写注释的人</strong></li></ol><h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><p>随着HarmonyOS NEXT的发展加快，不少的公司已经陆续加大了资源来开发软件项目。那么伴随项目的发展，项目团队也需要按照一定</p><p>的规范来编写项目注释或者代码的说明文档。</p><p>我认为编写项目注释或者代码的说明文档最小的代价就是 直接通过<strong>编写注释的方式</strong>来实现代码的使用文档。</p><p>目前主流的IDE都会支持 <strong>jsDoc</strong> 或者 <strong>TypeDoc</strong>。 我们按照规定的格式编写代码注释，便能获得以下好处：</p><p><img src="'+e+`" alt="image-20240929004710826"></p><p>当我们想要调用 全局函数 <strong>px2vp</strong>时，提示工具会很清晰的给我展现出相关的使用说明。另外，如果是编写一个工具类库，还能基于相关工具生成好看的说明文档。</p><blockquote><p>Person.ets</p></blockquote><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 一个工具人类</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@since</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 11</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 年龄</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 计算两个年龄相加的和</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 年龄1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 年龄2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 总年龄</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  calcAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><img src="`+p+'" alt="image-20240929010044597"></p><h1 id="deveco-studio-自带的语法提示" tabindex="-1">DevEco Studio 自带的语法提示 <a class="header-anchor" href="#deveco-studio-自带的语法提示" aria-label="Permalink to &quot;DevEco Studio 自带的语法提示&quot;">​</a></h1><p>jsDoc提供了对 常量、类、函数、接口、枚举等的修饰符，一般情况下不需要主动添加，因为 <strong>DevEco Studio</strong> 可以自动识别</p><blockquote><p>@constant @class @function @interface @enmu 等</p></blockquote><p><strong>类</strong></p><p><img src="'+r+'" alt="image-20240929011503966"></p><p><strong>枚举</strong></p><p><img src="'+l+'" alt="image-20240929011553049"></p><p>并且，在你引入代码提示的时候，也可以直观的观察这里来判断它是什么类型</p><p><img src="'+d+'" alt="image-20240929011750736"></p><hr><p><img src="'+h+'" alt="image-20240929012128049"></p><h1 id="常见代码提示修饰符" tabindex="-1">常见代码提示修饰符 <a class="header-anchor" href="#常见代码提示修饰符" aria-label="Permalink to &quot;常见代码提示修饰符&quot;">​</a></h1><p><img src="'+k+`" alt="image-20240929012352082"></p><p>如图，如果我们想要实现<strong>上图右侧</strong>的一些语法提示功能，那么就需要自己编写合适的代码提示修饰符了</p><p>通过编写一个类来演示，首先我们提供以下基本结构</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calcAge4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  calcAge1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calcAge2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calcAge3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="快速生成特定的注释" tabindex="-1">快速生成特定的注释 <a class="header-anchor" href="#快速生成特定的注释" aria-label="Permalink to &quot;快速生成特定的注释&quot;">​</a></h2><p>如我们想要给 Person添加一些备注说明，那么我们不能使用以下这种注释</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这个单行注释不行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 这个普通的多行注释也不行 */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们只能使用这种</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span>*  这个是OK的</span></span>
<span class="line"><span>*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>你可以在想要修饰的代码上方 输入 <code>/** + tab</code> 开快速生成</p><p><img src="`+c+'" alt="PixPin_2024-09-29_01-31-34"></p><p>在带有参数的函数上方，它会自动添加参数的修饰符，包括返回值</p><p><img src="'+o+'" alt="PixPin_2024-09-29_01-33-28"></p><h2 id="param-和-returns" tabindex="-1">@param 和 @returns <a class="header-anchor" href="#param-和-returns" aria-label="Permalink to &quot;@param 和 @returns&quot;">​</a></h2><blockquote><p>@param 修饰函数的形参</p><p>@returns 修饰返回值</p></blockquote><p><img src="'+g+'" alt="image-20240929013703645"></p><h2 id="async" tabindex="-1">@async <a class="header-anchor" href="#async" aria-label="Permalink to &quot;@async&quot;">​</a></h2><blockquote><p>@async 修饰 异步函数</p></blockquote><p><img src="'+b+'" alt="image-20240929013924434"></p><h2 id="public" tabindex="-1">@public <a class="header-anchor" href="#public" aria-label="Permalink to &quot;@public&quot;">​</a></h2><blockquote><p>@public 公开</p><p>@protected 受保护</p><p>@private 私有</p></blockquote><p><img src="'+m+'" alt="image-20240929014127121"></p><h2 id="static" tabindex="-1">@static <a class="header-anchor" href="#static" aria-label="Permalink to &quot;@static&quot;">​</a></h2><p><img src="'+u+'" alt="image-20240929014309520"></p><h1 id="其他的jsdoc规范的修饰符总览" tabindex="-1">其他的jsDoc规范的修饰符总览 <a class="header-anchor" href="#其他的jsdoc规范的修饰符总览" aria-label="Permalink to &quot;其他的jsDoc规范的修饰符总览&quot;">​</a></h1><table tabindex="0"><thead><tr><th>修饰符</th><th>含义</th></tr></thead><tbody><tr><td>@abstract</td><td>表示一个抽象的成员，不能被直接实例化。</td></tr><tr><td>@access</td><td>用于指定成员的访问级别。</td></tr><tr><td>@alias</td><td>定义一个别名。</td></tr><tr><td>@async</td><td>表示一个异步函数。</td></tr><tr><td>@augments</td><td>指示一个类继承自另一个类。</td></tr><tr><td>@author</td><td>作者信息。</td></tr><tr><td>@borrows</td><td>表示从另一个模块借用的函数或属性。</td></tr><tr><td>@callback</td><td>表示一个回调函数。</td></tr><tr><td>@class</td><td>用于定义一个类。</td></tr><tr><td>@classdesc</td><td>类的描述。</td></tr><tr><td>@constant</td><td>表示一个常量。</td></tr><tr><td>@constructs</td><td>指示一个函数是构造函数。</td></tr><tr><td>@copyright</td><td>版权信息。</td></tr><tr><td>@default</td><td>默认值。</td></tr><tr><td>@deprecated</td><td>表示已弃用的成员。</td></tr><tr><td>@description</td><td>描述信息。</td></tr><tr><td>@enum</td><td>定义一个枚举。</td></tr><tr><td>@event</td><td>表示一个事件。</td></tr><tr><td>@example</td><td>示例代码。</td></tr><tr><td>@exports</td><td>用于指定要导出的成员。</td></tr><tr><td>@external</td><td>表示外部模块的成员。</td></tr><tr><td>@file</td><td>文件信息。</td></tr><tr><td>@fires</td><td>表示触发的事件。</td></tr><tr><td>@function</td><td>定义一个函数。</td></tr><tr><td>@generator</td><td>表示一个生成器函数。</td></tr><tr><td>@global</td><td>表示全局成员。</td></tr><tr><td>@hideconstructor</td><td>隐藏构造函数。</td></tr><tr><td>@ignore</td><td>表示忽略的部分。</td></tr><tr><td>@implements</td><td>表示实现的接口。</td></tr><tr><td>@inheritdoc</td><td>继承文档说明。</td></tr><tr><td>@inner</td><td>内部成员。</td></tr><tr><td>@instance</td><td>实例成员。</td></tr><tr><td>@interface</td><td>定义一个接口。</td></tr><tr><td>@kind</td><td>类型种类。</td></tr><tr><td>@lends</td><td>将属性借给另一个对象。</td></tr><tr><td>@license</td><td>许可证信息。</td></tr><tr><td>@listens</td><td>表示监听的事件。</td></tr><tr><td>@member</td><td>成员。</td></tr><tr><td>@memberof</td><td>属于某个对象的成员。</td></tr><tr><td>@mixes</td><td>混合多个类的特性。</td></tr><tr><td>@mixin</td><td>定义一个混入。</td></tr><tr><td>@module</td><td>定义一个模块。</td></tr><tr><td>@name</td><td>名称。</td></tr><tr><td>@namespace</td><td>命名空间。</td></tr><tr><td>@override</td><td>表示重写的成员。</td></tr><tr><td>@package</td><td>包信息。</td></tr><tr><td>@param</td><td>函数参数说明。</td></tr><tr><td>@private</td><td>私有成员。</td></tr><tr><td>@property</td><td>属性。</td></tr><tr><td>@protected</td><td>受保护的成员。</td></tr><tr><td>@public</td><td>公共成员。</td></tr><tr><td>@readonly</td><td>只读属性。</td></tr><tr><td>@requires</td><td>表示依赖的模块。</td></tr><tr><td>@returns</td><td>函数返回值说明。</td></tr><tr><td>@see</td><td>参考信息。</td></tr><tr><td>@since</td><td>从某个版本开始。</td></tr><tr><td>@static</td><td>静态成员。</td></tr><tr><td>@summary</td><td>摘要信息。</td></tr><tr><td>@this</td><td>当前对象。</td></tr><tr><td>@throws</td><td>抛出的异常说明。</td></tr><tr><td>@todo</td><td>待办事项。</td></tr><tr><td>@tutorial</td><td>教程信息。</td></tr><tr><td>@type</td><td>类型说明。</td></tr><tr><td>@typedef</td><td>类型定义。</td></tr><tr><td>@variation</td><td>变化情况。</td></tr><tr><td>@version</td><td>版本信息。</td></tr><tr><td>@yields</td><td>生成的值说明。</td></tr></tbody></table><h1 id="deveco-studio-支持自定义修饰符" tabindex="-1">DevEco Studio 支持自定义修饰符 <a class="header-anchor" href="#deveco-studio-支持自定义修饰符" aria-label="Permalink to &quot;DevEco Studio 支持自定义修饰符&quot;">​</a></h1><p><strong>DevEco Studio</strong> 是支持自定义修饰符的，比如</p><p><img src="'+y+'" alt="image-20240929010933164"></p><p>虽然是可以随便自己设定，但是为了团队开发保持一直，还是建议按照一定的规范来编写。如 遵循 上述jsDoc的一些规范</p><h1 id="deveco-studio-快速生成说明文档" tabindex="-1">DevEco Studio 快速生成说明文档 <a class="header-anchor" href="#deveco-studio-快速生成说明文档" aria-label="Permalink to &quot;DevEco Studio 快速生成说明文档&quot;">​</a></h1><p><strong>DevEco Studio NEXT Beta1(5.0.3.814)</strong></p><ul><li>当前支持对工程或目录下.ets/.ts/.js/.md格式文件生成ArkTSDoc文档。</li><li>文件中export的变量、方法、接口、类等将生成相应的ArkTSDoc文档，未export的对象不支持生成。</li><li>若选择对工程/目录整体导出ArkTSDoc文档，生成后的ArkTSDoc文档目录和原目录结构一致。</li></ul><p><img src="'+E+'" alt="image-20240929014948209"></p><hr><p><img src="'+F+'" alt="image-20240929015033130"></p><h1 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h1><ol><li><a href="https://jsdoc.app/" target="_blank" rel="noreferrer">@use JSDoc</a></li><li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-arktsdoc-V5" target="_blank" rel="noreferrer">生成ArkTSDoc文档</a></li></ol>',64)]))}const P=a(D,[["render",A]]);export{f as __pageData,P as default};
