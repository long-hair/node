const {model} = require('mongoose');

module.exports = model('course',{
  // 课程编号
  courseNumber:{
    type:String,
    require:true,
  },
  // 课程名称
  courseName:{
    type:String,
    require:true,
  },
//列表图
  courseImg:{
    type:String,
    require:true
  },
  //校区
  courseSchool:{
    type:Array,
    default:[]
  },
  //年级
  courseGrade:{
    type:String,
    require:true
  },
  // 学期
  courseTerm:{
    type:String,
    require:true 
  },
  // 价格
  coursePrice:{
    type:String,
    require:true
  },
  // 名额
  coursePlaces:{
    type:String,
    require:true
  },
  // 学科
  courseSubject:{
    type:String,
    require:true
  },
  // 课时
  courseTime:{
    type:String,
    require:true
  },
  //介绍
  courseIntroduce:{
    type:String,
    require:false
  },
  // 日期
  courseDate:{
    type:Array,
    require:false
  },
  // 报名人数
  coursePeople:{
    type:Number,
    default:0,
  }
})