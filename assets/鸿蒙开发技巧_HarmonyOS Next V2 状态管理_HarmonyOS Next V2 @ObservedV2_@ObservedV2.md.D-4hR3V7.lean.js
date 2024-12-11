import{_ as g,c as i,j as s,a as t,G as e,a2 as n,B as a,o as l}from"./chunks/framework.Y1dwPOgg.js";const d="/pub-blog/assets/image-20240715181749705.D7DA4CEo.png",p="/pub-blog/assets/image-20240715181959993.b_mFvt8i.png",b="/pub-blog/assets/image-20240715182044449.DHysV8LV.png",m="/pub-blog/assets/image-20240715182615579.Db8qdTxN.png",v="/pub-blog/assets/image-20240715182856552.cK2lTaaJ.png",O="/pub-blog/assets/image-20240715183454378.B2l7FxTI.png",D=JSON.parse('{"title":"HarmonyOS Next V2 状态管理@ObservedV2基本使用","description":"","frontmatter":{},"headers":[],"relativePath":"鸿蒙开发技巧/HarmonyOS Next V2 状态管理/HarmonyOS Next V2 @ObservedV2/@ObservedV2.md","filePath":"鸿蒙开发技巧/HarmonyOS Next V2 状态管理/HarmonyOS Next V2 @ObservedV2/@ObservedV2.md","lastUpdated":1733887539000}'),V={name:"鸿蒙开发技巧/HarmonyOS Next V2 状态管理/HarmonyOS Next V2 @ObservedV2/@ObservedV2.md"},x={id:"harmonyos-next-v2-状态管理-observedv2基本使用",tabindex:"-1"},u={class:"header-anchor",href:"#harmonyos-next-v2-状态管理-observedv2基本使用","aria-label":'Permalink to "HarmonyOS Next V2 状态管理@ObservedV2基本使用"'},y={id:"背景",tabindex:"-1"},k={class:"header-anchor",href:"#背景","aria-label":'Permalink to "背景"'},T={id:"observed装饰器和-objectlink-装饰器",tabindex:"-1"},N={class:"header-anchor",href:"#observed装饰器和-objectlink-装饰器","aria-label":'Permalink to "**@Observed**装饰器和**@ObjectLink**装饰器"'},f={id:"observedv2装饰器和-trace装饰器",tabindex:"-1"},_={class:"header-anchor",href:"#observedv2装饰器和-trace装饰器","aria-label":'Permalink to "@ObservedV2装饰器和@Trace装饰器"'},H={id:"介绍",tabindex:"-1"},S={class:"header-anchor",href:"#介绍","aria-label":'Permalink to "介绍"'},j={id:"总结",tabindex:"-1"},h={class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'};function P(c,r,I,L,U,C){const o=a("CustomComponent");return l(),i("div",null,[s("h1",x,[r[1]||(r[1]=t("HarmonyOS Next V2 状态管理@ObservedV2基本使用 ")),s("a",u,[r[0]||(r[0]=t("​ ")),e(o)])]),s("h2",y,[r[3]||(r[3]=t("背景 ")),s("a",k,[r[2]||(r[2]=t("​ ")),e(o)])]),r[13]||(r[13]=n('<p>最近<strong>Harmony</strong> 应用开发技术中推出了新版的状态管理技术，试用过后，直呼很香。我们来看为什么？</p><p>因为在 <strong>Harmony</strong> 应用开发过程中，我们一定会碰到监听<strong>嵌套类/深层次属性</strong>的需求，如希望 <strong>son</strong>的<strong>weight</strong>属性变化后，可以引起UI刷新。</p><p><img src="'+d+'" alt="image-20240715181749705"></p>',3)),s("h2",T,[r[5]||(r[5]=s("strong",null,"@Observed",-1)),r[6]||(r[6]=t("装饰器和**@ObjectLink**装饰器 ")),s("a",N,[r[4]||(r[4]=t("​ ")),e(o)])]),r[14]||(r[14]=n('<p>针对以上需求，那之前，也就是所谓的 <strong>v1</strong> 版本是怎么做的呢？ 是通过 <strong>@Observed</strong>装饰器和**@ObjectLink**装饰器实现的。</p><p>其中，这一套解决方案有一个很严重的、破坏性的问题- 必须搭配自定义组件一起使用。</p><p><img src="'+p+'" alt="image-20240715181959993"></p><p>所以，你代码本来是这样子的🤓：</p><p><img src="'+b+'" alt="image-20240715182044449"></p><p>为了实现深层次数据的监听，必须改造-破坏你的UI结构，要引入自定义组件，那么就变成了这样子😭：</p><p><img src="'+m+'" alt="image-20240715182615579"></p><hr><p><strong>大家看看，这个代码的风格，是人干的事情吗</strong></p><p>接下来，我们看看更新后的技术解决方案是怎么样的 👇👇👇👇</p>',10)),s("h2",f,[r[8]||(r[8]=t("@ObservedV2装饰器和@Trace装饰器 ")),s("a",_,[r[7]||(r[7]=t("​ ")),e(o)])]),r[15]||(r[15]=s("blockquote",null,[s("p",null,"截至 2024年7月15日 v2都是试用版")],-1)),r[16]||(r[16]=s("p",null,[s("img",{src:v,alt:"image-20240715182856552"})],-1)),s("h3",H,[r[10]||(r[10]=t("介绍 ")),s("a",S,[r[9]||(r[9]=t("​ ")),e(o)])]),r[17]||(r[17]=n('<p>为了增强状态管理框架对类对象中属性的观测能力，开发者可以使用**@ObservedV2**装饰器和@Trace装饰器装饰类以及类中的属性。</p><p>其中，官网上的表达如下：</p><ul><li><strong>@ObservedV2</strong>装饰器与 <strong>@Trace</strong> 装饰器需要配合使用，单独使用 <strong>@ObservedV2</strong>装饰器 <strong>@Trace</strong> 装饰器没有任何作用。</li><li>被 <strong>@Trace</strong>装饰器装饰的属性<strong>property</strong>变化时，仅会通知<strong>property</strong>关联的组件进行刷新。</li><li>在嵌套类中，嵌套类中的属性<strong>property</strong>被 <strong>@Trace</strong>装饰且嵌套类被 <strong>@ObservedV2</strong> 装饰时，才具有触发UI刷新的能力。</li><li>在继承类中，父类或子类中的属性<strong>property</strong>被 <strong>@Trace</strong> 装饰且该<strong>property</strong>所在类被 <strong>@ObservedV2</strong> 装饰时，才具有触发UI刷新的能力。</li><li>未被 <strong>@Trace</strong> 装饰的属性用在UI中无法感知到变化，也无法触发UI刷新。</li><li><strong>@ObservedV2</strong> 的类实例目前不支持使用<strong>JSON.stringify</strong>进行序列化。</li></ul><hr><p>我们针对以上总结一下。使用的技巧也很简单</p><ol><li><strong>要监听的属性要添加 @Trace 装饰器</strong></li><li><strong>被监听的属性 所在的类要添加 @ObservedV2</strong></li><li><strong>继承类 ，继承其中的被监听的属性时，可以等价视为是给出自己的类添加了 @Trace 装饰器监听。</strong></li></ol><p><img src="'+O+'" alt="image-20240715183454378"></p><hr><p>是不要对比 <strong>@Observed</strong>装饰器和**@ObjectLink** 要简单轻松多了？</p>',9)),s("h2",j,[r[12]||(r[12]=t("总结 ")),s("a",h,[r[11]||(r[11]=t("​ ")),e(o)])]),r[18]||(r[18]=n("<ol><li>当我们在开发中，如果碰到了监听深层次属性的需求，可以使用 <strong>@Observed</strong>装饰器和 <strong>@ObjectLink</strong>装饰器 和 <strong>@ObservedV2</strong>装饰器和 <strong>@Trace</strong>装饰器</li><li><strong>@Observed</strong>装饰器和 <strong>@ObjectLink</strong>装饰器 是比较稳定的技术，但是开发效率低，体验不好，对代码具有入侵型</li><li><strong>@ObservedV2</strong>装饰器和 <strong>@Trace</strong> 装饰器是新推出的v2的版本，目前还在试用期，大概率会成为稳定版。对代码比较友好，如果是新的业务，可以优先考虑使用它。</li></ol>",1))])}const $=g(V,[["render",P]]);export{D as __pageData,$ as default};
