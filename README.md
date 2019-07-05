持续更新中...
#### 原版App截图如下
![image](https://github.com/PsychicHira/wangyiyunMusic/blob/master/img/jietu/index.jpg)

#### 小程序gif首页效果图如下（网速影响可能会加载过慢）
![image](https://github.com/PsychicHira/wangyiyunMusic/blob/master/img/jietu/index.GIF)

接口文档：
https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi

# 创建项目

1. 新建项目

   ![1](C:\Users\老刘\AppData\Roaming\Typora\typora-user-images\1562149171154.png)

2. 在小程序根目录下新建img文件夹，暂时存放图片

3. 把引导页放进去

   ![2](C:\Users\老刘\AppData\Roaming\Typora\typora-user-images\1562149350874.png)

4. 删除app.wxss中的默认样式

5. 删除index.wxml和index.wxss的所有内容

# 引导页

1. 由于引导页的字体和logo很难找资源还原写原样式，直接用图片

2. 在page中新建目录guide

   guide.wxml

   ```html
   <image class="guide" src="/img/guide-page.png"></image>
   ```

   > 深刻理解image组件的mode
   >
   > 为什么image外面不用view，因为小程序页面默认有一个外层<page>标签，我们要让image的长宽100%，那么需要给父page标签加一个height="100%"。加一个view没有任何意义

3. guide.wxss

   ```
   page{
     height: 100%;
     width:100%;
   }
   .guide{
     width: 100%;
     height: 100%;
   }
   ```

4. 让引导页消失，然后跳转到tabBar

5. 直接让引导页消失，那么在引导页的js文件中写跳转代码，用到了路由相关API

   guide.js

   ```js
   onReady:function(){
       //创建定时器tm
       let tm = setInterval(()=>{
           //路由跳转到tabbar
         wx.switchTab({
           url: '/pages/index/index'
         })
         clearInterval(tm)   //清除定时器tm
       },2000)
     }
   ```

# tabBar配置

根据原版app，有5个tabBar，由于网易logo没找到，找了个圆来代替，颜色用ps吸管工具（因为要抠icon，习惯用ps，不抠icon有一款FSCapture桌面吸管工具）

在app.json中设置

```json
  "tabBar": {
      //tabBar上方的border-top颜色
    "borderStyle":"white",
      //tabBar背景色
    "backgroundColor":"f2f4f0",
      //未点击状态文字颜色
    "color":"#838a87",
      //击状态文字颜色
    "selectedColor":"#ff5043",
      //栏目配置
    "list": [
      {
        "pagePath": "pages/index/index",
          //栏目文字
        "text": "发现",
          //未点击状态logo
        "iconPath":"img/yuan.png",
          //点击状态logo
        "selectedIconPath":"img/yuan-active.png"
      },
      {
        "pagePath": "pages/video/video",
        "text": "视频",
        "iconPath":"img/shipin.png",
        "selectedIconPath":"img/shipin-active.png"
      },
      {
        "pagePath": "pages/mine/mine",
        "text": "我的",
        "iconPath":"img/mine.png",
        "selectedIconPath":"img/mine-active.png"
      },
      {
        "pagePath": "pages/friend/friend",
        "text": "朋友",
        "iconPath":"img/friend.png",
        "selectedIconPath":"img/friend-active.png"
      },
      {
        "pagePath": "pages/account/account",
        "text": "账号",
        "iconPath":"img/account.png",
        "selectedIconPath":"img/account-active.png"
      }
    ]
  }
```

# index首页

写页面没什么好说的，小程序推荐使用flex布局，灵活运用不是很难。

由于上方的搜索栏与下方的云村推荐有重复使用的地方，把它们做成组件来调用

- 搜索框

  ![3](C:\Users\老刘\AppData\Roaming\Typora\typora-user-images\1562297573999.png)

- 云村精选

  ![4](C:\Users\老刘\AppData\Roaming\Typora\typora-user-images\1562297614674.png)

# 搜索框组件































