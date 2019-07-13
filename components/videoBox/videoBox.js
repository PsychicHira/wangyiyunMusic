var api = require('../../utils/api.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    video:{
      type:Array,
      value:'default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mvInfo:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击播放，获取mv地址
    getMvUrl:function(e){
      //获取触发播放事件的视频是mvId里面的第几个，得到mv的ID
            // console.log(e.target.dataset.index)
      let id = this.data.mvId[e.target.dataset.index]
      //获取mv的地址
        api.getMvUrl({
          id:id
        }).then(res=>{
          //把整个视频数组取出来
          let obj = this.data.video
          //给当前这个mv对象增加url
          obj[e.target.dataset.index].url = res.data.url
          //把video对象重新覆盖，达到双向绑定的目的
          this.setData({
            video : obj
          })
        })
      
    }
  },
  ready:function(){
    //把video中的id提取出来存入变量mvId
    let arr=[]
    this.data.video.forEach(element => {
      arr.push(element.id)
    })
    this.setData({
      mvId:arr
    })
    // console.log(this.data.video)
  
    //使用mvId获取mv数据信息
    let mvInfo = []
    this.data.mvId.forEach(element=>{

      api.getMvInfo({
        mvid:element
      }).then(res=>{
        mvInfo.push(res.data)
        //res.data.commentCount
        //res.data.likeCount
        //res.data.artists.name
      })

    })
    
    
    // console.log(mvInfo)

    console.log(this.data.mvInfo)
    // let obj = this.data.video
    
    // for (let i = 0; i < obj.length; i++) {
    //   obj[i].commentCount = this.data.mvInfo[i].commentCount
    //   obj[i].likeCount = this.data.mvInfo[i].likeCount
    //   obj[i].artists.name = this.data.mvInfo[i].artists.name
    // }
    // this.setData({
    //   video:obj
    // })

  }

})
