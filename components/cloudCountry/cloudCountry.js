// components/cloudCountry/cloudCountry.js
var api = require('../../utils/api.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    personalizedMv:{
      type:Array,
      value:'default value'
    },
    mvUrl:{
      type:Array,
      value:'default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // mvId:[1],
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getMvUrl:function(e){
      let arr=[]
      arr = this.data.personalizedMv
      let index = e.currentTarget.dataset.index
      arr[index].url = this.data.mvUrl[index]
      this.setData({
        personalizedMv:arr
      })
    }
  },
  //组件生命周期函数-在组件实例进入页面节点树时执行)
  attached:function(){
    console.log('zizujian',this.data.personalizedMv);
    // console.log(typeof this.data.personalizedMv);
    
    
    //获取mvUrl
    // api.getMvUrl({
    //   id:10875452
    // }).then(res=>{
    //   this.setData({
    //     mvUrl:res.data.url
    //   })

      // console.log(this.data.mvId);
      
    // })
  },
  //数据监听
  observers:{
    //personalizedMv方法用于获取父组件传来的mv数组，现在需要把里面的id提取出来，获取mv地址使用，不可以在attached声明周期中创建，那个时候personalizedMv数组是空
    // personalizedMv:function(){
    //   this.data.personalizedMv.forEach(element => {
    //     this.data.mvId.push(element.id)
    //   })
    //   console.log(this.data.mvId);
    // }
  },
  // created:function(){
  //   console.log(this.data.personalizedMv)
  // }
  // detached:function(){
  //   console.log(this.data.personalizedMv)
  // }
})
