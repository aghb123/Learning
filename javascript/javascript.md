## 初识JavaScript

### JavaScript是什么

+ javascript是一种运行在客户端的脚本语言
+ 脚本语言：不需要编译，运行过程中由js解释器(js引擎)逐行进行解释并执行
+ 现在也可以基于Node.js技术进行服务器端编程

### JavaScript的作用

+ 表单动态校验(密码强度检测)(js产生最初的目的)
+ 网页特效
+ 服务端开发(Node.js)
+ 桌面程序(Electron)
+ App(Cordova)
+ 控制硬件-物联网(Ruff)
+ 游戏开发(cocos2d-js)

### HTML/CSS/JS的关系

HTML/CSS标记语言--描述类语言

+ HTML决定网页结构和内容(决定看到什么)，相当于人的身体
+ CSS决定网页呈现给用户的模样(决定好不好看)，相当于给人穿衣服、化妆

JS脚本语言--编程类语言

实现业务逻辑和页面控制(决定功能)，相当于人的各种动作

### 浏览器执行JS简介

浏览器分成两部分：渲染引擎和JS引擎

+ 渲染引擎：用来解析HTML与CSS，俗称内核，比如chrome浏览器的blink，老版本的webkit
+ JS引擎：也称为JS解释器。用来读取网页中的javascript代码，对其处理后运行，比如chrome浏览器的V8

浏览器本身并不会执行JS代码，而是通过内置JavaScript引擎(解释器)来执行JS代码。JS引擎执行代码时逐行解释每一句源码(转换为机器语言)，然后由计算机去执行，所以JavaScript语言归为脚本语言，会逐行解释执行

### JS的组成

<img src="javascript.assets/image-20210125211534700.png" alt="image-20210125211534700" style="zoom:80%;" />

1. ECMAScript是由ECMA国际(原欧洲计算机制造商协会)进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMAScript语言的实现和扩展

<img src="javascript.assets/image-20210125211919218.png" alt="image-20210125211919218" style="zoom:80%;" />

ECMAScript:规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。

2. DOM——文档对象模型

文档对象模型(Document Object Model，简称DOM)，是W3C组织推荐的处理可扩展标记语言的标准编程接口。通过DOM提供的接口可以对页面上的各种元素进行操作(大小、位置、颜色等)

3. BOM——浏览器对象模型

BOM(Browser Object Model，简称BOM)是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等

### JS初体验

JS有三种书写位置，分别为行内、内嵌和外部

1. 行内式JS

```javascript
<input type="button" value="点我试试" onclick="alert('Hello World')" />
```

​	(1)可以将单行或少量JS代码写在HTML标签的事件属性中(以on开头的属性)，如:onclick

​	(2)注意单双引号的使用：在HTML中推荐使用双引号，JS中推荐使用单引号

​	(3)可读性差，在html中编写JS大量代码时，不方便阅读

​	(4)引号易错，引号多层嵌套匹配时，非常容易弄混

​	(5)特殊情况下使用

2.  内嵌JS

```javascript
<script>
	alert('Hello World!');    
</script>
```

​	(1)可以将多行JS代码写到<script>标签中

​	(2)内嵌JS是学习时常用的方式

3. 外部JS文件

```javascript
<script src="my.js"></script> 
```

​	(1)利用HTML页面代码结构化，把大段JS代码独立到HTML页面之外，既美观，也方便文件级别的复用

​	(2)引用外部JS文件的script标签中间不可以写代码

​	(3)适合于JS代码量比较大的情况

### 注释快捷键

单行注释 ctrl + /

多行注释 shift + alt + a(默认) vscode中修改多行注释的快捷键 ctrl + shift + /

### JavaScript输入输出语句

为了方便信息的输入输出，JS中提供了一些输入输出语句，其常用的语句如下：

