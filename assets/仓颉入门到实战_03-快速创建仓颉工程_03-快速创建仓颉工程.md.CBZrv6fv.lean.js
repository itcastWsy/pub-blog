import{_ as e,c as t,a5 as o,o as i}from"./chunks/framework.DoP1wijR.js";const s="/pub-blog/assets/image-20241213060105633.6L1wDh_m.png",l="/pub-blog/assets/image-20241213060409063.CBF6HS2g.png",p="/pub-blog/assets/image-20241213060451980.FINdR1L3.png",r="/pub-blog/assets/image-20241213060631546.CB9d1znm.png",n="/pub-blog/assets/image-20241213061100309.7z5OwvnX.png",g="/pub-blog/assets/image-20241213061106489.DuoAsolU.png",m="/pub-blog/assets/image-20241213061112564.Hq28Ogwk.png",c="/pub-blog/assets/image-20241213061118990.BbZZZpde.png",d="/pub-blog/assets/image-20241213061139871.DSTCE66b.png",h="/pub-blog/assets/image-20241213061504092.DOCfbtPT.png",b="/pub-blog/assets/image-20241213061711657.D2i97Tof.png",_="/pub-blog/assets/image-20241213062004350.BpnUf1Iq.png",v=JSON.parse('{"title":"03-快速创建仓颉工程","description":"","frontmatter":{},"headers":[],"relativePath":"仓颉入门到实战/03-快速创建仓颉工程/03-快速创建仓颉工程.md","filePath":"仓颉入门到实战/03-快速创建仓颉工程/03-快速创建仓颉工程.md","lastUpdated":1734063565000}'),u={name:"仓颉入门到实战/03-快速创建仓颉工程/03-快速创建仓颉工程.md"};function f(q,a,P,k,C,x){return i(),t("div",null,a[0]||(a[0]=[o('<h1 id="_03-快速创建仓颉工程" tabindex="-1">03-快速创建仓颉工程 <a class="header-anchor" href="#_03-快速创建仓颉工程" aria-label="Permalink to &quot;03-快速创建仓颉工程&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>仓颉工程有自身的一些目录结构和文件命名等限制，如果不安装规范来，那么在开发时，语法提示等插件将无效。编译打包时，也将可能</p><p>出错。</p><h2 id="创建仓颉工程" tabindex="-1">创建仓颉工程 <a class="header-anchor" href="#创建仓颉工程" aria-label="Permalink to &quot;创建仓颉工程&quot;">​</a></h2><p>之前在vscode上安装好的仓颉插件，它内置了快速创建仓颉工程的功能。有两种方式可以创建</p><h3 id="可视化" tabindex="-1">可视化 <a class="header-anchor" href="#可视化" aria-label="Permalink to &quot;可视化&quot;">​</a></h3><blockquote><p>在 VSCode 中按 F1 或者 Ctrl + Shift + P（mac 上快捷键为 Command + Shift + P） 打开命令面板，然后按照以下步骤创建仓颉工程</p></blockquote><ol><li><p>输入关键字 <strong>Create Cangjie ..</strong> 找到创建新项目的菜单</p><p><img src="'+s+'" alt="image-20241213060105633"></p></li><li><p>输入工程信息</p><p><img src="'+l+'" alt="image-20241213060409063"></p></li><li><p>成功创建</p><p><img src="'+p+'" alt="image-20241213060451980"></p></li></ol><h3 id="vscode终端命令" tabindex="-1">vscode终端命令 <a class="header-anchor" href="#vscode终端命令" aria-label="Permalink to &quot;vscode终端命令&quot;">​</a></h3><blockquote><p>在 VSCode 中按 F1 或者 Ctrl + Shift + P（mac 上快捷键为 Command + Shift + P） 打开命令面板，然后按照以下步骤创建仓颉工程</p></blockquote><ol><li><p>选择创建工程命令 <strong>cangjie:Create Cangjie Project</strong> <em>不要带 Project View 的</em></p><p><img src="'+r+'" alt="image-20241213060631546"></p></li><li><p>选择编译引擎</p><p><img src="'+n+'" alt="image-20241213061100309"></p></li><li><p>选择输出类型</p><p><img src="'+g+'" alt="image-20241213061106489"></p></li><li><p>选择存放工程的目录</p><p><img src="'+m+'" alt="image-20241213061112564"></p></li><li><p>输入项目的名称</p><p><img src="'+c+'" alt="image-20241213061118990"></p></li><li><p>成功创建</p><p><img src="'+d+'" alt="image-20241213061139871"></p></li></ol><h2 id="工程目录介绍" tabindex="-1">工程目录介绍 <a class="header-anchor" href="#工程目录介绍" aria-label="Permalink to &quot;工程目录介绍&quot;">​</a></h2><p><img src="'+h+'" alt="image-20241213061504092"></p><ol><li><strong>.cache</strong> 自动生成的缓存文件</li><li><strong>.vscode</strong> 自动生成的编辑器的设置文件 只在工作区有效</li><li><strong>src</strong> 业务代码区域，我们在里面写代码，才能引入引入仓颉的一些内置类库、和代码提示</li><li><strong>cjpm.toml</strong> 工程配置文件，记录和设置工程的相关信息</li></ol><h2 id="代码提示" tabindex="-1">代码提示 <a class="header-anchor" href="#代码提示" aria-label="Permalink to &quot;代码提示&quot;">​</a></h2><p>在合法的工程中编写代码，便能享受到对应的代码提示</p><p><img src="'+b+'" alt="image-20241213061711657"></p><h2 id="编译工程" tabindex="-1">编译工程 <a class="header-anchor" href="#编译工程" aria-label="Permalink to &quot;编译工程&quot;">​</a></h2><p>快速编译工程</p><p><img src="'+_+'" alt="image-20241213062004350"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>仓颉开发配件中较好的集成了创建工程、和运行工程相关的功能。我们只要按照标准规范操作，便可顺利开展我们变成的第一步！</p>',23)]))}const j=e(u,[["render",f]]);export{v as __pageData,j as default};
