const {Router} = require('express');
const Course = require('../module/Course');
const router = new Router();
const url =require('url');




//保存
router.post('/add',async (req,res)=>{
  const {courseNumber} = req.body;
  const result = await Course.findOne({courseNumber});
  if(result){
    res.status(200).json({code:-1,message:'该用编号已存在!'})
    return ;
  }
  //保存数据
 await new Course(req.body).save();
 res.status(200).json({code:0,message:"保存成功"});
  console.log('保存')
})

router.get('/gettable',async (req,res)=>{
 
  const {skip,limit} = url.parse(req.url,true).query 
    var n = parseInt(skip)
    var l = parseInt(limit)
  const count = await Course.countDocuments() 
  const result = await Course.find().skip(n).limit(l);
  result.push(count)
  res.status(200).json(result)

})
router.get('/getdetail',async (req,res)=>{
 
  const {id} = url.parse(req.url,true).query 
  const result = await Course.findById(id);
  res.status(200).json(result)

})



router.get('/delete',async (req,res)=>{
  const {courseNumber} = url.parse(req.url,true).query
 
  const result = await Course.deleteOne({courseNumber:courseNumber});
  if(result.n==1){
    res.status(200).json({
      code:0,
      message:'删除成功'
    })
  }else{
    res.status(200).json({
      code:-1,
      message:'删除出了问题，请重试'
    })
  }
  

})

module.exports = router;