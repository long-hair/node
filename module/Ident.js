const {model} = require('mongoose');

module.exports = model('indent',{
  // 订单编号
  indentNumber:{
    type:String,
    require:true,
  },
  //校区
  indentSchool:{
    type:Array,
    default:[]
  },
  //年级
  indentGrade:{
    type:String,
    require:true
  },
  // 价格
  indentPrice:{
    type:String,
    require:true
  },
  // 学科
  indentSubject:{
    type:String,
    require:true
  },
  // 课时
  indentTime:{
    type:String,
    require:true
  },
  // 日期
  indentDate:{
    type:Array,
    require:false
  },
  userphone:{
    type:String,
    require:false
  },
})