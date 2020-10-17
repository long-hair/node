const {Router} = require('express');
const router = new Router();
// const User = require('../module/User')
//注册
//凡是执行其他用户相关操作，都需要登录

router.use((req,res,next)=>{
 
    res.status(200).json({code:-1,message:'请先登录！'});
})

module.exports = router;