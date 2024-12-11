import{_ as i,c as r,j as s,a,G as e,a2 as l,B as o,o as c}from"./chunks/framework.Y1dwPOgg.js";const t="/pub-blog/assets/image-20240723105343511.DFSUH-Oe.png",b="/pub-blog/assets/image-20240723110522686.CtBUhJty.png",L=JSON.parse('{"title":"HarmonyOS Next V2 @Event","description":"","frontmatter":{},"headers":[],"relativePath":"鸿蒙开发技巧/HarmonyOS Next V2 状态管理/HarmonyOS Next V2 @Event/@Event.md","filePath":"鸿蒙开发技巧/HarmonyOS Next V2 状态管理/HarmonyOS Next V2 @Event/@Event.md","lastUpdated":1733887047000}'),u={name:"鸿蒙开发技巧/HarmonyOS Next V2 状态管理/HarmonyOS Next V2 @Event/@Event.md"},m={id:"harmonyos-next-v2-event",tabindex:"-1"},d={class:"header-anchor",href:"#harmonyos-next-v2-event","aria-label":'Permalink to "HarmonyOS Next V2 @Event"'},h={id:"背景",tabindex:"-1"},v={class:"header-anchor",href:"#背景","aria-label":'Permalink to "背景"'},g={id:"介绍",tabindex:"-1"},f={class:"header-anchor",href:"#介绍","aria-label":'Permalink to "介绍"'},x={id:"父组件",tabindex:"-1"},y={class:"header-anchor",href:"#父组件","aria-label":'Permalink to "父组件"'},C={id:"子组件",tabindex:"-1"},k={class:"header-anchor",href:"#子组件","aria-label":'Permalink to "子组件"'},O={id:"流程",tabindex:"-1"},P={class:"header-anchor",href:"#流程","aria-label":'Permalink to "流程"'},E={id:"once",tabindex:"-1"},S={class:"header-anchor",href:"#once","aria-label":'Permalink to "@Once"'},V={id:"总结",tabindex:"-1"},N={class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'};function B(H,n,q,w,$,D){const p=o("CustomComponent");return c(),r("div",null,[s("h1",m,[n[1]||(n[1]=a("HarmonyOS Next V2 @Event ")),s("a",d,[n[0]||(n[0]=a("​ ")),e(p)])]),s("h2",h,[n[3]||(n[3]=a("背景 ")),s("a",v,[n[2]||(n[2]=a("​ ")),e(p)])]),n[16]||(n[16]=l("<p>在上一节中，我们针对父子组件，讲了关于传递数据的知识。我们了解到</p><ol><li><code>@Local</code> 是管理自己内部的数据的，</li><li><code>@Param</code> 是负责接收父组件的数据的，而且子自己内部不能直接修改</li></ol><p>按照一个组件最基本的功能，<strong>既能接收外部传入的数据</strong>，<strong>也要向外部传递数据</strong>。那么 <code>@Even</code>t 修饰符就是来解决这个问题的了。</p>",3)),s("h2",g,[n[5]||(n[5]=a("介绍 ")),s("a",f,[n[4]||(n[4]=a("​ ")),e(p)])]),n[17]||(n[17]=l("<p><code>@Event</code> 是 子组件向父组件传递数据的技术，它只能用在 <code>@ComponentV2</code> 修改的组件上，其中的思想是</p><ol><li>完成修改数据的操作，还是放在父组件内部，通过定义一个函数 <code>func</code> 来实现</li><li>在父组件调用子组件的时候，也顺带把这个函数 <code>func</code> 传递给子组件</li><li>子组件在内部 使用 <code>@Event</code> 来修饰 该函数，并且在需要的使用直接调用即可</li></ol>",2)),s("h2",x,[n[7]||(n[7]=a("父组件 ")),s("a",y,[n[6]||(n[6]=a("​ ")),e(p)])]),n[18]||(n[18]=l(`<ol><li>定义内部数据 <code>num</code></li><li>定义修改内部数据<code>num</code>的函数 <code>func</code></li><li>使用子组件时，把<code>num</code>和<code>func</code>都传递过去</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@ComponentV2</span></span>
<span class="line"><span>struct Index {</span></span>
<span class="line"><span>  @Local num: number = 100</span></span>
<span class="line"><span>  // 自己定义的函数 负责修改数据， 该函数也要传递给子组件 </span></span>
<span class="line"><span>  func = (unit: number) =&gt; {</span></span>
<span class="line"><span>    this.num -= unit</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(&quot;父组件 修改&quot; + this.num)</span></span>
<span class="line"><span>        .onClick(() =&gt; {</span></span>
<span class="line"><span>          this.num++</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      // 使用子组件，并且传递数据 和 传递函数 </span></span>
<span class="line"><span>      Son({ num: this.num, func: this.func })</span></span>
<span class="line"><span>        .padding(10)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .width(&quot;100%&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,2)),s("h2",C,[n[9]||(n[9]=a("子组件 ")),s("a",k,[n[8]||(n[8]=a("​ ")),e(p)])]),n[19]||(n[19]=l(`<ol><li>使用 <code>@Param</code> 接收父组件传递的 <code>num</code></li><li>使用<code>@Event</code> 接收父组件传递的函数 <code>func</code></li><li>定义点击事件的处理函数 <code>onfunc</code>，内部直接调用父组件传递过来的函数</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@ComponentV2</span></span>
<span class="line"><span>struct Son {</span></span>
<span class="line"><span>  @Param num: number = 0</span></span>
<span class="line"><span>  @Event func: (num: number) =&gt; void = () =&gt; {</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  onfunc = () =&gt; {</span></span>
<span class="line"><span>    this.func(5)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(\`子组件 \${this.num}\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Button(&quot;子组件修改父组件中的状态&quot;)</span></span>
<span class="line"><span>        .onClick(this.onfunc)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .border({</span></span>
<span class="line"><span>      width: 1,</span></span>
<span class="line"><span>      style: BorderStyle.Dashed</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,2)),s("h2",O,[n[11]||(n[11]=a("流程 ")),s("a",P,[n[10]||(n[10]=a("​ ")),e(p)])]),n[20]||(n[20]=s("p",null,[s("img",{src:t,alt:"image-20240723105343511"})],-1)),s("h2",E,[n[13]||(n[13]=a("@Once ")),s("a",S,[n[12]||(n[12]=a("​ ")),e(p)])]),n[21]||(n[21]=l(`<p><code>@Once</code> 和 <code>@Param</code>作用类似，都可以表示接收父组件传递过来的数据，但是也存在区别</p><ol><li><code>@Once</code> 只会接收第一次父组件传递过来的数据，后续父组件的数据修改，不会同步到 <code>@Once</code>修改的变量上</li><li><code>@Once</code> 需要和 <code>@Param</code> 一起搭配使用，因为 <code>@Param</code> 修饰的是父组件传递给子组件的变量，该变量不能直接被修改。所以<code>@Once</code>修饰的变量，也不能在子组件内部直接修改。</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@ComponentV2</span></span>
<span class="line"><span>struct Son {</span></span>
<span class="line"><span>  @Once @Param num: number = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Button(\`子组件 \${this.num}\`)</span></span>
<span class="line"><span>        .onClick(() =&gt; {</span></span>
<span class="line"><span>          this.num++ // 修改无效 </span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .border({</span></span>
<span class="line"><span>      width: 1,</span></span>
<span class="line"><span>      style: BorderStyle.Dashed</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Entry</span></span>
<span class="line"><span>@ComponentV2</span></span>
<span class="line"><span>struct Index {</span></span>
<span class="line"><span>  @Local num: number = 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Son({ num: this.num })</span></span>
<span class="line"><span>        .padding(10)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .width(&quot;100%&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><img src="`+b+'" alt="image-20240723110522686"></p>',4)),s("h2",V,[n[15]||(n[15]=a("总结 ")),s("a",N,[n[14]||(n[14]=a("​ ")),e(p)])]),n[22]||(n[22]=s("ol",null,[s("li",null,[s("code",null,"@Param"),a(" 表示父组件传递给子组件的数据，当父组件修改了，子组件会跟随响应，同时子组件内部不能直接修改 "),s("code",null,"@Param"),a("修饰的变量")]),s("li",null,[s("code",null,"@Event"),a(" 表示子组件想要修改父组件数据的一种技术，它用来修改函数，该函数是由父组件定义和传递给子组件的")]),s("li",null,[s("code",null,"@Once"),a(" 必须和 "),s("code",null,"@Param"),a(" 搭配使用，表示父组件传递过来的数据，只会第一次生效。")])],-1))])}const U=i(u,[["render",B]]);export{L as __pageData,U as default};
