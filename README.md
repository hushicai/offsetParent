# offsetParent

w3c关于offsetParent的定义可以参见[此处](https://www.w3.org/TR/cssom-view/#dom-htmlelement-offsetparent)。

本仓库代码参考司徒正美[offsetParent算法分析](https://www.cnblogs.com/rubylouvre/archive/2012/10/30/2746751.html)，用于验证w3c offsetParent规范。

## 运行

[https://hushicai.github.io/offsetParent/](https://hushicai.github.io/offsetParent/)

## 结论

在不同浏览器上运行，可以观察总结出以下几条规律：

* position为fixed元素是没有offsetParent，但firefox统一返回body。
* position为absolute、relative的元素的offsetParent总是为其最近的已定位的元素，没有则找最近的td、th元素，再没有找body。
* position为static的元素的offsetParent则是先找最近的td、th元素，再没有找body。
* body为最顶层的offsetParent。

可以看到，主流浏览器基本都遵守了w3c规范，当然，还是有个别浏览器不按套路出牌。。。


