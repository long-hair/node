const {model} = require('mongoose');

module.exports = model('article',{
  // 轮播图标题
  articleName:{
    type:String,
    require:true,
  },
//缩略图
  articleImg:{
    type:String,
    require:true
  },
  //状态
  articlePicket:{
    type:String,
    require:true
  },
  //上传传人
  articleUser:{
    type:String,
    require:true
  },
  // 上传时间
  articleTime:{
    type:String,
    require:true 
  },
    // 地址
    articleSite:{
      type:String,
      require:true 
    },
    // 展示顺序
    articleSort:{
      type:String,
      require:true 
    },
})