const {model} = require('mongoose');

module.exports = model('user',{
  username:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
  },
//姓名
  nickname:{
    type:String,
    require:true
  },
  //职位
  job:{
    type:String,
    require:true
  },
  //权限
  auth:{
    type:Array,
    default:[]
  },
  isAdmin:{
    type:Boolean,
    default:false 
  }
})