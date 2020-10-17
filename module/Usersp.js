const {model} = require('mongoose');

module.exports = model('usersp',{
  username:{
    type:String,
    require:true,
  },
  phone:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
  }
})