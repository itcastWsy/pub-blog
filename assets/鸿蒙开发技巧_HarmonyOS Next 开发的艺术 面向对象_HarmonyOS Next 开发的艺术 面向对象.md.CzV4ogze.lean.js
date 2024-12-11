import{_ as a,c as o,a5 as r,o as s}from"./chunks/framework.DoP1wijR.js";const n="/pub-blog/assets/image-20240612204303880.FZv2vzXm.png",e="/pub-blog/assets/image-20240612211431996.C0tSsfLN.png",i="/pub-blog/assets/image-20240612211913731.Cchw8R-2.png",p="/pub-blog/assets/image-20240612213159301.BHmmX_ZV.png",l="/pub-blog/assets/image-20240613022719379.BV8EPGUh.png",g="/pub-blog/assets/multimodal_image_134153424U218606.BINjNnrg.jpg",x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"鸿蒙开发技巧/HarmonyOS Next 开发的艺术 面向对象/HarmonyOS Next 开发的艺术 面向对象.md","filePath":"鸿蒙开发技巧/HarmonyOS Next 开发的艺术 面向对象/HarmonyOS Next 开发的艺术 面向对象.md","lastUpdated":1733890373000}'),c={name:"鸿蒙开发技巧/HarmonyOS Next 开发的艺术 面向对象/HarmonyOS Next 开发的艺术 面向对象.md"};function m(h,t,d,u,_,b){return s(),o("div",null,t[0]||(t[0]=[r('<h2 id="harmonyos-next-开发的艺术-面向对象" tabindex="-1">HarmonyOS Next 开发的艺术 面向对象 <a class="header-anchor" href="#harmonyos-next-开发的艺术-面向对象" aria-label="Permalink to &quot;HarmonyOS Next 开发的艺术 面向对象&quot;">​</a></h2><h2 id="聊聊应用的开发范式" tabindex="-1">聊聊应用的开发范式 <a class="header-anchor" href="#聊聊应用的开发范式" aria-label="Permalink to &quot;聊聊应用的开发范式&quot;">​</a></h2><p><strong>Harmony</strong>应用的主要开发范式，是采用了类似面向对象的范式。</p><blockquote><p><strong>struct</strong> 在java语言中表示结构体。</p><p>前端工程师可以将其看成是<strong>class</strong>即可</p></blockquote><p><img src="'+n+'" alt="image-20240612204303880"></p><p>其实这个开发风格会给大部分的前端工程师不太适应的感觉。因为目前主流的前端开发框架，在开发组件*(一个应用由各种各样的组件组成)*的时候不管是React、还是Vue，都比较推崇函数式的写法。我们这里可以大概对比下<strong>类写法</strong>和<strong>函数式</strong>写法开发应用的优劣。</p><h3 id="函数式组件" tabindex="-1">函数式组件 <a class="header-anchor" href="#函数式组件" aria-label="Permalink to &quot;函数式组件&quot;">​</a></h3><p><strong>优点</strong>：</p><ol><li><strong>简洁性</strong>：函数式组件通常更简洁，因为它们只关注渲染逻辑，不处理状态或生命周期方法。</li><li><strong>性能</strong>：函数式组件在更新时，其性能与类组件相当或更好</li><li><strong>易于测试</strong>：由于没有类继承或复杂的生命周期方法，函数式组件通常更容易编写单元测试。</li><li><strong>可组合性</strong>：Hooks和其他函数式编程特性使得函数式组件更加可组合和重用。</li><li><strong>符合现代JavaScript趋势</strong>：随着JavaScript ES6+的普及，函数式编程和不可变数据等概念变得越来越流行。</li></ol><p><strong>劣势</strong>：</p><ol><li><strong>状态管理</strong>：在React中，函数式组件本身不支持状态（state）。但是，通过<code>useState</code> Hook，可以在函数式组件中添加状态。</li><li><strong>生命周期方法</strong>：在React中，函数式组件没有内置的生命周期方法。但是，可以使用<code>useEffect</code> Hook来模拟生命周期方法。</li><li><strong>复杂性限制</strong>：当组件变得非常复杂，涉及多个状态、生命周期方法和复杂的逻辑时，函数式组件可能会变得难以管理。</li></ol><h3 id="类组件" tabindex="-1">类组件 <a class="header-anchor" href="#类组件" aria-label="Permalink to &quot;类组件&quot;">​</a></h3><p><strong>优势</strong>：</p><ol><li><strong>状态管理</strong>：类组件内置了状态（state）的概念，使得状态管理更加直观。</li><li><strong>生命周期方法</strong>：类组件提供了丰富的生命周期方法，可以方便地处理组件的挂载、更新和卸载等过程。</li><li><strong>继承</strong>：类组件支持继承，这使得创建可重用的组件逻辑变得更加容易。</li></ol><p><strong>劣势</strong>：</p><ol><li><strong>复杂性</strong>：类组件通常需要处理更多的概念，如<code>this</code>关键字、构造函数、继承等，这可能会增加代码的复杂性。</li><li><strong>性能</strong>：在React中，类组件通常比函数式组件在更新时性能稍差，因为React需要遍历整个组件树来确定哪些部分需要重新渲染</li><li><strong>不符合现代JavaScript趋势</strong>：随着函数式编程的普及，类组件可能不再是现代前端开发的最佳实践。</li></ol><hr><p><em>以上对比来自AI工具。</em></p><p>但是对于普通的开发者来说，要考虑并不是用榔头搬砖还是用挖掘机搬砖，而是你目前的工作需要用到哪个，你都需要得心应手的上手开干。资本家可不会关心你搬砖的工具好用不好用。</p><h2 id="聊聊artts" tabindex="-1">聊聊ArtTs <a class="header-anchor" href="#聊聊artts" aria-label="Permalink to &quot;聊聊ArtTs&quot;">​</a></h2><p>早期纯前端开发者应该聊到面向对象、原型、this 那一堆关键字的时候应该都有个不好的会议。归根到底是早些时代，前端开发使用的是ES3 版本的 JavaScript，这个版本的JavaScript语言层面就没有支持面向对象的设计。并不像java这门语言天生就支持。</p><p>所以面向对象的三大特征（封装、继承、多态）在java语言中很容易实现的设计，搬到早期的JavaScript中，就变噩梦一样的存在。有不少还在入门阶段的小伙子在看到强行使用JavaScript的原型、this实现的面向对象设计，那是疯了的心都有了。</p><p>Harmony应用开发 采用的是ArtTs语言。 Typescript是JavaScript的超集、ArtTs是TypeScript的超集。也就是JavaScript爸爸的爸爸。所以在开发Harmony应用时，ArtTs是对前端工程师友好的，对后端工程师尤其是java工程师不友好。<strong>这个很有意思，因为安卓原生开发语言(java、Kotlin)是对java工程师友好的。</strong> -- 评论区内可以对号入座一下。</p><hr><p>虽然ArtTs是TypeScript的超集，但是也不是完全兼容。<a href="https://docs.openharmony.cn/pages/v4.0/zh-cn/application-dev/quick-start/typescript-to-arkts-migration-guide.md" target="_blank" rel="noreferrer">从TypeScript到ArkTS的适配规则</a></p><h2 id="面向对象-oop" tabindex="-1">面向对象 OOP <a class="header-anchor" href="#面向对象-oop" aria-label="Permalink to &quot;面向对象 OOP&quot;">​</a></h2><p>接下来我们还是新人角度讲解Harmony应用中的面向对象的体现。</p><p>面向对象程序设计（OOP）的三大特性，指的是封装（Encapsulation）、继承（Inheritance）和多态（Polymorphism）。</p><h3 id="封装-encapsulation" tabindex="-1">封装 Encapsulation <a class="header-anchor" href="#封装-encapsulation" aria-label="Permalink to &quot;封装 Encapsulation&quot;">​</a></h3><p>封装就像是一个“黑盒子”。在这个盒子里，你有一堆零件（变量和方法），但外界只能看到盒子上的几个小孔（公开的接口）。通过这些小孔，外界可以与盒子里的零件进行交互，但无法直接看到或修改盒子里的具体零件。</p><p>封装的主要目的是<strong>隐藏对象的内部细节</strong>，只暴露必要的接口给外界使用。这样可以保护数据不被随意修改，同时简化对象的使用。</p><p>举个例子：想象你有一个电视遥控器。你不需要知道遥控器内部是如何工作的，只需要知道如何按“开/关”、“音量+”和“音量-”等按钮即可。这些按钮就是遥控器的“接口”，而遥控器内部的电路和芯片则是被“封装”起来的。</p><p><img src="'+e+'" alt="image-20240612211431996"></p><p>上述左图，代码是散列分布的，而且也容易污染全局命名空间。因为可能存在多个<strong>eat</strong>功能</p><p>上述右图，代码是组合到了一个类中，是聚合在一起的。这样不同类中也可以有同样的eat方法，不冲突。这个就是简单的封装的理解了</p><h3 id="继承-inheritance" tabindex="-1">继承 Inheritance <a class="header-anchor" href="#继承-inheritance" aria-label="Permalink to &quot;继承 Inheritance&quot;">​</a></h3><p>继承就像是一个孩子继承了父母的某些特性。在面向对象编程中，一个类（子类）可以继承另一个类（父类）的属性和方法。这样，子类就可以拥有父类的所有功能，同时还可以添加或覆盖自己的功能。</p><p>实现继承的目的是<strong>实现代码重用</strong>。通过继承，我们可以避免重复编写相同的代码，只需要在父类中定义一次，然后在子类中继承即可。</p><p>举个例子：假设你有一个“动物”类，它有一些基本的属性和方法（如“吃”和“睡”）。然后你可以创建一个“狗”类，它继承自“动物”类，并添加或覆盖一些特定的属性和方法（如“叫”和“摇尾巴”）。这样，“狗”类就既具有“动物”类的通用功能，又具有自己的特殊功能。</p><p><img src="'+i+'" alt="image-20240612211913731"></p><p>继承通过关键字<strong>extends</strong>来实现。 <code>class 子类 extends 父类</code></p><p>如上图所述，现实中不管是 I人还是E人，都存在吃饭和跑路的功能。因此可以采用继承的方式来管理它们。如果后期要调整，也只需要调整父类内的一个部分即可，其他的子类自动跟着发生改变。</p><h3 id="多态-polymorphism" tabindex="-1">多态 Polymorphism <a class="header-anchor" href="#多态-polymorphism" aria-label="Permalink to &quot;多态 Polymorphism&quot;">​</a></h3><p>多态就是“多种形态”或“多种可能性”。在面向对象编程中，多态指的是不同的对象对同一消息做出不同的响应。具体来说，就是父类引用可以指向子类对象，并且当通过这个引用调用方法时，会调用实际对象（可能是子类对象）的方法。</p><p>实现多态的目的是<strong>提高代码的灵活性和可重用性</strong>。通过多态，我们可以使用父类引用来操作子类对象，而无需关心具体的子类类型。这使得代码更加灵活和易于扩展。</p><p>比如：想象你有一个“形状”类，它有一个“绘制”方法。然后你可以创建多个子类，如“圆形”、“矩形”和“三角形”，它们都继承自“形状”类并实现了自己的“绘制”方法。尽管每个对象的类型可能不同（圆形、矩形、三角形等），但由于它们都继承了“形状”类并实现了相同的“绘制”方法，因此你可以通过父类引用来统一调用它们的方法。这就是多态性的体现。</p><hr><p>多态在代码中的具体体现可以视为<strong>变量多态</strong> *(简称变态)*和 <strong>函数多态</strong></p><p><strong>变量多态</strong>：程序运行时需要的某种类型，你可以传递它的子类型来代替。</p><p><img src="'+p+'" alt="image-20240612213159301"></p><p><strong>函数多态</strong>：同一个函数，可以声明多次，只要它的参数个数、参数类型、返回值类型、随便一处不相同都可以同时存在。</p><p><img src="'+l+'" alt="image-20240613022719379"></p><h2 id="面向对象的难点" tabindex="-1">面向对象的难点 <a class="header-anchor" href="#面向对象的难点" aria-label="Permalink to &quot;面向对象的难点&quot;">​</a></h2><p>其实在实际编程中，面向对象技术的运用，很多小伙伴会感觉到陌生或者别扭。此时要给自己信心，确认下自己是哪个环节缺失，再去提高即可。</p><ul><li>基础语法不够熟悉，如<strong>class、extends、interface、function</strong>的基本用法等。</li><li>业务锻炼的比较少，比如在实际开发中缺少这部分的经验、或者看别人的封装太少了，导致碰到类似场景无法反应过来</li><li>缺少对业务的抽象能力，如没有看出某些业务和具体语法之间的联系，导致无法在实际应用中灵活使用。</li></ul><p>对此，我给出一点学习建议。</p><p>将上述的三个部分能力作为一个需要持续投入精力提高的部分。如</p><ol><li>看到好的资料， 花时间尽量去理解，实在不能看透了，先放着</li><li>当你感觉自己代码能力好像得到提高了，继续钻研这部分代码。</li><li><strong>反复重复上述两个步骤。</strong></li></ol><p><img src="'+g+'" alt="img"></p>',59)]))}const y=a(c,[["render",m]]);export{x as __pageData,y as default};
