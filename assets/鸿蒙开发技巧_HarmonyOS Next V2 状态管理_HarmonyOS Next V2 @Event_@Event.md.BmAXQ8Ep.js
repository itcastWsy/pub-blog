import{_ as s,o as a,c as e,aj as p}from"./chunks/framework.BdtAaXf2.js";const l="/assets/image-20240723105343511.DFSUH-Oe.png",i="/assets/image-20240723110522686.CtBUhJty.png",h=JSON.parse('{"title":"HarmonyOS Next V2 @Event","description":"","frontmatter":{},"headers":[],"relativePath":"鸿蒙开发技巧/HarmonyOS Next V2 状态管理/HarmonyOS Next V2 @Event/@Event.md","filePath":"鸿蒙开发技巧/HarmonyOS Next V2 状态管理/HarmonyOS Next V2 @Event/@Event.md","lastUpdated":1730788610000,"__rawMarkdown":"# HarmonyOS Next V2 @Event\\n\\n## 背景\\n\\n在上一节中，我们针对父子组件，讲了关于传递数据的知识。我们了解到\\n\\n1. `@Local` 是管理自己内部的数据的，\\n2. `@Param` 是负责接收父组件的数据的，而且子自己内部不能直接修改\\n\\n按照一个组件最基本的功能，**既能接收外部传入的数据**，**也要向外部传递数据**。那么 `@Even`t 修饰符就是来解决这个问题的了。\\n\\n\\n\\n## 介绍 \\n\\n`@Event` 是 子组件向父组件传递数据的技术，它只能用在 `@ComponentV2`  修改的组件上，其中的思想是\\n\\n1. 完成修改数据的操作，还是放在父组件内部，通过定义一个函数 `func`  来实现\\n2. 在父组件调用子组件的时候，也顺带把这个函数 `func`  传递给子组件\\n3. 子组件在内部 使用 `@Event` 来修饰 该函数，并且在需要的使用直接调用即可\\n\\n\\n\\n## 父组件 \\n\\n1. 定义内部数据 `num` \\n2. 定义修改内部数据`num`的函数 `func`\\n3. 使用子组件时，把`num`和`func`都传递过去\\n\\n```\\n@Entry\\n@ComponentV2\\nstruct Index {\\n  @Local num: number = 100\\n  // 自己定义的函数 负责修改数据， 该函数也要传递给子组件 \\n  func = (unit: number) => {\\n    this.num -= unit\\n  }\\n\\n  build() {\\n    Column() {\\n      Button(\\"父组件 修改\\" + this.num)\\n        .onClick(() => {\\n          this.num++\\n        })\\n      // 使用子组件，并且传递数据 和 传递函数 \\n      Son({ num: this.num, func: this.func })\\n        .padding(10)\\n    }\\n    .width(\\"100%\\")\\n\\n  }\\n}\\n```\\n\\n## 子组件\\n\\n1. 使用 `@Param` 接收父组件传递的 `num`\\n2. 使用`@Event`  接收父组件传递的函数 `func`\\n3. 定义点击事件的处理函数 `onfunc`，内部直接调用父组件传递过来的函数\\n\\n```\\n@ComponentV2\\nstruct Son {\\n  @Param num: number = 0\\n  @Event func: (num: number) => void = () => {\\n  }\\n  onfunc = () => {\\n    this.func(5)\\n  }\\n\\n  build() {\\n\\n    Column() {\\n      Button(`子组件 ${this.num}`)\\n\\n      Button(\\"子组件修改父组件中的状态\\")\\n        .onClick(this.onfunc)\\n    }\\n    .border({\\n      width: 1,\\n      style: BorderStyle.Dashed\\n    })\\n  }\\n}\\n```\\n\\n## 流程\\n\\n![image-20240723105343511](readme.assets/image-20240723105343511.png)\\n\\n## @Once\\n\\n`@Once` 和 `@Param`作用类似，都可以表示接收父组件传递过来的数据，但是也存在区别\\n\\n1. `@Once` 只会接收第一次父组件传递过来的数据，后续父组件的数据修改，不会同步到 `@Once`修改的变量上\\n2. `@Once` 需要和 `@Param` 一起搭配使用，因为 `@Param` 修饰的是父组件传递给子组件的变量，该变量不能直接被修改。所以`@Once`修饰的变量，也不能在子组件内部直接修改。\\n\\n\\n\\n```\\n@ComponentV2\\nstruct Son {\\n  @Once @Param num: number = 0\\n\\n  build() {\\n    Column() {\\n      Button(`子组件 ${this.num}`)\\n        .onClick(() => {\\n          this.num++ // 修改无效 \\n        })\\n    }\\n    .border({\\n      width: 1,\\n      style: BorderStyle.Dashed\\n    })\\n  }\\n}\\n\\n@Entry\\n@ComponentV2\\nstruct Index {\\n  @Local num: number = 100\\n\\n  build() {\\n    Column() {\\n\\n      Son({ num: this.num })\\n        .padding(10)\\n    }\\n    .width(\\"100%\\")\\n\\n  }\\n}\\n```\\n\\n![image-20240723110522686](readme.assets/image-20240723110522686.png)\\n\\n\\n\\n## 总结\\n\\n1. `@Param` 表示父组件传递给子组件的数据，当父组件修改了，子组件会跟随响应，同时子组件内部不能直接修改 `@Param`修饰的变量\\n2. `@Event`  表示子组件想要修改父组件数据的一种技术，它用来修改函数，该函数是由父组件定义和传递给子组件的\\n3. `@Once` 必须和 `@Param` 搭配使用，表示父组件传递过来的数据，只会第一次生效。\\n\\n\\n\\n"}'),c={name:"鸿蒙开发技巧/HarmonyOS Next V2 状态管理/HarmonyOS Next V2 @Event/@Event.md"};function r(t,n,o,u,m,b){return a(),e("div",null,[...n[0]||(n[0]=[p(`<h1 id="harmonyos-next-v2-event" tabindex="-1">HarmonyOS Next V2 @Event <a class="header-anchor" href="#harmonyos-next-v2-event" aria-label="Permalink to &quot;HarmonyOS Next V2 @Event&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>在上一节中，我们针对父子组件，讲了关于传递数据的知识。我们了解到</p><ol><li><code>@Local</code> 是管理自己内部的数据的，</li><li><code>@Param</code> 是负责接收父组件的数据的，而且子自己内部不能直接修改</li></ol><p>按照一个组件最基本的功能，<strong>既能接收外部传入的数据</strong>，<strong>也要向外部传递数据</strong>。那么 <code>@Even</code>t 修饰符就是来解决这个问题的了。</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><code>@Event</code> 是 子组件向父组件传递数据的技术，它只能用在 <code>@ComponentV2</code> 修改的组件上，其中的思想是</p><ol><li>完成修改数据的操作，还是放在父组件内部，通过定义一个函数 <code>func</code> 来实现</li><li>在父组件调用子组件的时候，也顺带把这个函数 <code>func</code> 传递给子组件</li><li>子组件在内部 使用 <code>@Event</code> 来修饰 该函数，并且在需要的使用直接调用即可</li></ol><h2 id="父组件" tabindex="-1">父组件 <a class="header-anchor" href="#父组件" aria-label="Permalink to &quot;父组件&quot;">​</a></h2><ol><li>定义内部数据 <code>num</code></li><li>定义修改内部数据<code>num</code>的函数 <code>func</code></li><li>使用子组件时，把<code>num</code>和<code>func</code>都传递过去</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Entry</span></span>
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
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="子组件" tabindex="-1">子组件 <a class="header-anchor" href="#子组件" aria-label="Permalink to &quot;子组件&quot;">​</a></h2><ol><li>使用 <code>@Param</code> 接收父组件传递的 <code>num</code></li><li>使用<code>@Event</code> 接收父组件传递的函数 <code>func</code></li><li>定义点击事件的处理函数 <code>onfunc</code>，内部直接调用父组件传递过来的函数</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@ComponentV2</span></span>
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
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h2><p><img src="`+l+`" alt="image-20240723105343511"></p><h2 id="once" tabindex="-1">@Once <a class="header-anchor" href="#once" aria-label="Permalink to &quot;@Once&quot;">​</a></h2><p><code>@Once</code> 和 <code>@Param</code>作用类似，都可以表示接收父组件传递过来的数据，但是也存在区别</p><ol><li><code>@Once</code> 只会接收第一次父组件传递过来的数据，后续父组件的数据修改，不会同步到 <code>@Once</code>修改的变量上</li><li><code>@Once</code> 需要和 <code>@Param</code> 一起搭配使用，因为 <code>@Param</code> 修饰的是父组件传递给子组件的变量，该变量不能直接被修改。所以<code>@Once</code>修饰的变量，也不能在子组件内部直接修改。</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@ComponentV2</span></span>
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
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><img src="`+i+'" alt="image-20240723110522686"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ol><li><code>@Param</code> 表示父组件传递给子组件的数据，当父组件修改了，子组件会跟随响应，同时子组件内部不能直接修改 <code>@Param</code>修饰的变量</li><li><code>@Event</code> 表示子组件想要修改父组件数据的一种技术，它用来修改函数，该函数是由父组件定义和传递给子组件的</li><li><code>@Once</code> 必须和 <code>@Param</code> 搭配使用，表示父组件传递过来的数据，只会第一次生效。</li></ol>',23)])])}const v=s(c,[["render",r]]);export{h as __pageData,v as default};
