const {model} = require('mongoose');

module.exports = model('teachers',{
  
  // 教师名称
  teachersName:{
    type:String,
    require:true,
  },
   // 手机号
   teachersPhone:{
    type:Number,
    require:true,
  },
//头像
  teachersImg:{
    type:String,
    require:true
  },
  //校区
  teachersSchool:{
    type:String,
    require:true
  },
  //年级
  teachersGrade:{
    type:String,
    require:true
  },
  // 类型
  teachersType:{
    type:String,
    require:true 
  },
  // 联系地址
  teachersSite:{
    type:String,
    require:true
  },
  // 学科
  teachersSubject:{
    type:String,
    require:true
  },
  // 推荐到首页
  teachersHome:{
    type:String,
    require:true
  },
  //介绍
  teachersIntroduce:{
    type:String,
    require:false
  },
})