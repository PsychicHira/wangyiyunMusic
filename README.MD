持续更新中...
#### 原版App截图如下
![image](https://github.com/PsychicHira/wangyiyunMusic/blob/master/img/jietu/index.jpg)

#### 小程序gif首页效果图如下（网速影响可能会加载过慢）
![image](https://github.com/PsychicHira/wangyiyunMusic/blob/master/img/jietu/index.GIF)

#### 接口文档：

https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi

# 创建项目

1. 新建项目

   ![image](https://github.com/PsychicHira/wangyiyunMusic/blob/master/img/jietu/1.png)

2. 在小程序根目录下新建img文件夹，暂时存放图片

3. 把引导页放进去

   ![image](https://github.com/PsychicHira/wangyiyunMusic/blob/master/img/jietu/2.png)

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

  ![image](https://github.com/PsychicHira/wangyiyunMusic/blob/master/img/jietu/3.png)

- 云村精选

  ![image](https://github.com/PsychicHira/wangyiyunMusic/blob/master/img/jietu/4.png)

# 搜索框组件

# 搜索框组件和云村精选组件

在根目录新建文件夹components存放组件用，新建search文件夹，按照原版写样式，没什么好说的。

云村精选同。

将组件引用至index中(这里要会小程序的组件使用)

```html
<import is="search" src="../../components/search/search.wxml" />
<import is="cloudCountry" src="../../components/cloudCountry/cloudCountry.wxml" />
```



到此首页静态页面完毕，下面开始动态获取数据

# 网易云音乐后台

1. 安装

   ```
   $ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
   
   $ npm install
   ```

2. 运行

   ```
   $ node app.js
   ```

# 封装API

思路

1. 在根目录utils中新建api.js

2. 声明一个常量存放基本路径

3. 声明一个常量函数，返回一个promise，内部执行wx.request代码

   ```js
   const BASE_URL = "http://localhost:3000/"
   const REQUEST = (requetUrl,data)=>{
       return new Promise((res,rej)=>{
           let url = BASE_URL + requetUrl
           wx.request({
               url:url,
               data:data,
               method:"GET",
               dataType:"json",   //返回的数据会有JSON.parse处理
               success:(data)=>{
                   res(data.data)
               },
               fail:(err)=>{
                   rej(err)
               }
           })
       })
   }
   ```


## 获取轮播

/banner

1. 导出一个对象

   - 首页要获取的就是首页的轮播，对应API是/banner

   ```js
   module.exports = {
       banner:(data)=>{
           return REQUEST('banner',data)
       }
   }
   ```

2. 踩了一个坑

   - BASE_URL + url打印出来是正常的

   ```js
   return new Promise((res,rej)=>{
           let url = BASE_URL + url
           console.log(url)    //此处的url是undefind，形参不能和let声明的变量相同，具体原因，有时间深入研究
           wx.request({
               url:url,
               data:data,
               method:"GET",
               dataType:"json",
               success:(data)=>{
                   res(data.data)
               },
               fail:(err)=>{
                   rej(err)
               }
           })
       })
   ```


1. 此时回到index.js，声明一个变量，banner，存放请求到的海报url

   ```
   data: {
       banner:[]
     }
   ```

2. 在顶部引入api.js文件

   ``` js
   var api = require('../../utils/api.js')
   ```

3. 在onload声明周期中调用获取banner的API

   ```js
   onLoad: function (options) {
       api.banner().then(res=>{
           this.setData({
               banner:res.banners
           })
       }).catch(err=>{
           console.log(err)
       })
   }
   ```

4. 在index.html中wx：for渲染

   ```html
   <swiper-item wx:for="{{banner}}" wx:key="{{index}}">
   	<image mode="aspectFill" src="{{item.imageUrl}}"></image>
   </swiper-item>
   ```



## 获取推荐歌单

/personalized

截取部分示例

```json
 "hasTaste": false,
    "code": 200,
    "category": 0,
    "result": [
        {
            "id": 2864076078,
            "type": 0,
            "name": "温柔的晚风和音乐，一定能吹散许多不愉快吧",
            "copywriter": "编辑推荐：愿一切为之努力的事情都会有一个比想象中还要再好些",
            "picUrl": "https://p2.music.126.net/IZLxSLFZNMWpe4qfQcT4wA==/109951164193824137.jpg",
            "canDislike": false,
            "playCount": 2583355.5,
            "trackCount": 49,
            "highQuality": false,
            "alg": "featured"
        },
```

接下来

声明一个数组personalized，用来存放推荐歌单

同样在onload中调用api，因为推荐歌单只有6个位置，返回的数据很多，这里我采用截取前面6个，也可以随机获取6个

```js
//获取推荐歌单
api.personalized().then(res=>{
    this.setData({
        personalized:res.result.splice(0,6)  //截取前面6个
    })
    console.log(this.data.personalized)
    }).catch(err=>{
        console.log(err)
    })
}
```













