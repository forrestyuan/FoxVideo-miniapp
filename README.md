# FoxVideo-miniapp 小花电影 - 小程序

## 1、简述  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本人不是资深电影迷，但是喜欢看电影，敲代码。有好的电影就会购票去电影院仔(hu)细(hu)观(da)赏(shui)。 嗯....，前几天刚刚看了一部电影《追龙2》，之前一直都没看过追龙系列，当天看了《追龙2》之后，迫于好奇心，便在自家电脑上看了《追龙1》，讲真，不看不知道，一看就知道这两部电影根本就不应该冠以1&2这样的系列号。两部差别太大了。个人感觉古天乐出演的《追龙2》总是有浓厚的反贪风暴的味道，剧情太过简单，相反《追龙1》堪称王晶导演的巅峰之作。  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;呃....好像扯远了....来说说为什么想写这样一个小程序吧，主要就是因为看了《追龙2》之后个人槽点太多，自己吐槽完不过隐，想看豆比们的评论，于是chuangchuangchuang的找到豆瓣API，数据准备好了，就开搞吧，哈哈。

> tips1: 数据全部来自于豆瓣API  (注意现在的api请求需要携带apikey)  
> tips2: 小程序的名字纯属胡编  
> tips3: 因为搜索API总是报1001错误码，所以搜索时没有数据返回；  
> tips4: 因为没有部署，想看小程序运行效果需要clone源码到本地开发模式浏览。  
> tips5: [小程序源码传送门](https://github.com/forrestyuan/FoxVideo-miniapp)  or  <https://github.com/forrestyuan/FoxVideo-miniapp>  
> tips6: 你的 **star** & **fork** 会让世界更和谐^_^!

## 2、开发历程
> 注：小程序运行效果图在文末，熟悉开发流程的，直接冲文末—_—
### 2.1、注册小程序账号，获取AppID,下载开发者工具

前往微信公众平台注册小程序个人开发者类型的账号，申请AppID，下载开发者工具，由于官方自带的开发者工具写代码并没有那么友好，个人建议，使用VSCode，并下载minapp这个插件，可以让写代码更高效。开发者工具则用于预览运行效果，当然，也可以真机运行。
|官网注册流程|
|----|
|![注册小程序](https://raw.githubusercontent.com/forrestyuan/FoxVideo-miniapp/master/regMINIAPP.PNG)|

### 2.2、创建小程序项目，
在如下图所示中的AppID框中填入你申请的AppID, 然后就可以开始肝你的代码了。
|小程序项目创建配置|
|----|
|![创建小程序项目](https://raw.githubusercontent.com/forrestyuan/FoxVideo-miniapp/master/createproj.PNG)|

### 2.3、小程序代码

总体代码编写的都是很简单的，本文的小程序例子也是针对入门开发者，代码过于占文章篇幅，不在这里展开。可以点击传送门clone源码（[小程序源码传送门](https://github.com/forrestyuan/FoxVideo-miniapp)  or  <https://github.com/forrestyuan/FoxVideo-miniapp>)。

|小程序代码目录|
|----|
|![小程序代码目录](https://raw.githubusercontent.com/forrestyuan/FoxVideo-miniapp/master/dir.PNG)|

### 2.4、运行效果

运行的效果是在开发者工具中的模拟器模拟的，我也在自己的手机真机运行过，还是觉得在手机上运行起来比较真实点，所以推荐开发的时候尽量真机调试开发。

|效果1|效果2|  
|----|----|
|![小程序运行效果1](https://github.com/forrestyuan/FoxVideo-miniapp/blob/master/preview1.gif?raw=true)|![小程序运行效果2](https://github.com/forrestyuan/FoxVideo-miniapp/blob/master/preview2.gif?raw=true)|  

## 3、后话（不足）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个小程序的代码真的很简单，但是作为入门应该够吃一壶了，这里没有采用任何的小程序二次开发的组件库，都是微信官方原生的组件。本文中的不足之处就是没有独立封装出可以独立的组件，比如**星星评分组件**等。  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;希望对此感兴趣或感觉有那么一点帮助的**star**一下，嘻嘻 ^_^ ! 为了看自己看过电影的神吐槽也是拼了！！！
