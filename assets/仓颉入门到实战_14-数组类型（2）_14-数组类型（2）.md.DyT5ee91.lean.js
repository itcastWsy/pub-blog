import{_ as s,c as e,a5 as n,o as r}from"./chunks/framework.DoP1wijR.js";const h=JSON.parse('{"title":"14-数组类型（2）","description":"","frontmatter":{},"headers":[],"relativePath":"仓颉入门到实战/14-数组类型（2）/14-数组类型（2）.md","filePath":"仓颉入门到实战/14-数组类型（2）/14-数组类型（2）.md","lastUpdated":1734741109000}'),p={name:"仓颉入门到实战/14-数组类型（2）/14-数组类型（2）.md"};function t(i,a,l,d,o,c){return r(),e("div",null,a[0]||(a[0]=[n(`<h1 id="_14-数组类型-2" tabindex="-1">14-数组类型（2） <a class="header-anchor" href="#_14-数组类型-2" aria-label="Permalink to &quot;14-数组类型（2）&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>除了引用类型的数组 Array，仓颉还引入了值类型数组 VArray</p><p>Array是引用类型</p><p>Varray是值类型</p><p>由于值类型本身在传递和赋值时的拷贝，会产生额外的性能开销，因此建议不要在性能敏感场景使用较大长度的 <code>VArray</code></p><h2 id="值类型和引用类型" tabindex="-1">值类型和引用类型 <a class="header-anchor" href="#值类型和引用类型" aria-label="Permalink to &quot;值类型和引用类型&quot;">​</a></h2><p>不管是什么样的变量，它总归是和一个值联系在一起的。在实际使用这些变量的时候，对于一部分变量，我们会直接拿这个值本身来用，像这样的变量就叫做值类型变量。而对于另外一些变量，我们是把这个值当作一个 <strong>地址</strong>，然后去拿这个 <strong>地址</strong> 所指向的数据来用，这种变量就被叫做引用类型变量。值类型变量都有属于自己的一份数据副本，相互之间是独立的。</p><p>比如：</p><p>我们每一个同学都会被分配了一个一模一样的宿舍。大家的宿舍装扮虽然都一样，但是是互相独立的，各自占用各自的空间互不影响的。这样的房间其实就是值类型。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    var a = 100 // 内存空间1</span></span>
<span class="line"><span>    var b = 100 // 内存空间2</span></span>
<span class="line"><span>    a = 300 //  修改了a 但是b不受影响</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>再比如：</p><p>我们4个同学被分配到了同一个宿舍，大家每人都拿着一把钥匙，通过钥匙打开的宿舍，是同一个宿舍，如果同学A新搬进去了一台电视，那么其他同学通过钥匙打开宿舍了之后，也会看到这个电视。这样会出现修改了引用来类型的数据，其他还保持有这个地址的元素，在访问这个数据的时候，也会发生变化。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    let a = [1, 2, 3, 4]</span></span>
<span class="line"><span>    let b = a</span></span>
<span class="line"><span>    b[0] = 100 // a[0] 也成了100</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="varray-基本用法" tabindex="-1">VArray 基本用法 <a class="header-anchor" href="#varray-基本用法" aria-label="Permalink to &quot;VArray 基本用法&quot;">​</a></h2><p>VArray 在使用时，类型声明不能省略，否则就会变成普通的 Array了</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    let a: VArray&lt;Int64, $3&gt; = [1, 2, 3] // Int64 表示类型， $3表示长度， $不能省</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="varray-指定长度和内容" tabindex="-1">VArray 指定长度和内容 <a class="header-anchor" href="#varray-指定长度和内容" aria-label="Permalink to &quot;VArray 指定长度和内容&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let b = VArray&lt;Int64, $5&gt;({i =&gt; i}) // [0, 1, 2, 3, 4]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其他用法和Array类似</p>`,20)]))}const u=s(p,[["render",t]]);export{h as __pageData,u as default};
