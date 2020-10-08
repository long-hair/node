const {Router} = require('express');
const router = new Router();
const User = require('../module/User')
//注册
router.post('/register',async (req,res)=>{
  console.log(req.body)
  const {username} = req.body;
  console.log(req.body)
  // if()
  const result = await User.findOne({username});
  if(result){
    res.status(200).json({code:-1,message:'该用户已存在!'})
    return ;
  }
  //执行注册
  // console.log(username,password)
 await new User(req.body).save();
 res.status(200).json({code:0,message:"注册成功"});
 

  console.log('注册')
})
//登录
router.post('/login',async(req,res)=>{
  const{username,password}=req.body;
 const result = await  User.findOne({username,password},{password:false})
 if(!result){
   res.status(200).json({code:-1,message:"用户名或密码错误！"})
   return
 }else{
   req.session.user = result;
  res.status(200).json({code:0,message:"登陆成功！"})

 }
  console.log('登录')

})




//凡是执行其他用户相关操作，都需要登录

router.use((req,res,next)=>{
  if(req.session.user){
    next();
  }else{
    res.status(200).json({code:-1,message:'请先登录！'});
  }
})
//检查登录是否过期
router.use('/check_login',(req,res)=>{
  res.status(200).json({code:0,message:'登陆成功'})
})


//退出登录
router.get('/logout',(req,res)=>{
  console.log(req.session)
  console.log(req.session.user)
  delete req.session.user
  res.status(200).json({code:0,message:"退出成功"});
})
//获取用户信息
router.get('/user_info',async(req,res)=>{
  const userID = req.session.user._id;
  const result = await User.findById(userID,{password:false});
  res.status(200).json(result)
})
module.exports = router;