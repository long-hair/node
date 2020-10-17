const {Router} = require('express');
const Ident = require('../module/Ident');
const router = new Router();
const url =require('url');




//保存
router.post('/add',async (req,res)=>{
  const {indentNumber} = req.body;
  const result = await Ident.findOne({indentNumber});
  console.log('add',result,indentNumber)
  if(result){
    res.status(200).json({code:-1,message:'该用编号已存在!'})
    return ;
  }
  //保存数据
 await new Ident(req.body).save();
 res.status(200).json({code:0,message:"保存成功"});
})

router.get('/gettable',async (req,res)=>{
 
  const {skip,limit,userphone} = url.parse(req.url,true).query 
    var n = parseInt(skip)
    var l = parseInt(limit)
  const count = await Ident.countDocuments() 
  const result = await Ident.find().skip(n).limit(l);
  result.push(count)
  res.status(200).json(result)

})
router.get('/getdetail',async (req,res)=>{
 
  const {id} = url.parse(req.url,true).query 
  const result = await Ident.findById(id);
  res.status(200).json(result)

})
router.get('/getindent',async (req,res)=>{
 
  const {userphone} = url.parse(req.url,true).query 
  const result = await Ident.find({userphone:userphone});
  res.status(200).json(result)

})



router.get('/delete',async (req,res)=>{
  const {identNumber} = url.parse(req.url,true).query
  const result = await Ident.deleteOne({identNumber:identNumber});
  if(result.n==1){
    res.status(200).json({
      code:0,
      message:'取消成功'
    })
  }else{
    res.status(200).json({
      code:-1,
      message:'取消出了问题，请重试'
    })
  }
  

})

module.exports = router;