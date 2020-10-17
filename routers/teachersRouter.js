const {Router} = require('express');
const Teachers = require('../module/Teachers');
const router = new Router();
const url =require('url');


//获取授课老师
router.get('/getoneTeacher',async (req,res)=>{
  
  const {teachersSubject} = url.parse(req.url,true).query 
  const result = await Teachers.findOne({teachersSubject:teachersSubject});
  res.status(200).json(result)

})

//保存
router.post('/add',async (req,res)=>{
  const arr =  Object.values(req.body)
  let bl = true
  arr.forEach(item=>{
    if(item==''){

     bl = false
     return
  
    }
  })
 if(!bl){
  res.status(200).json({code:-1,message:'您有关键内容未填写，请修改后重试!'})
  return ;
 }
  //保存数据
 await new Teachers(req.body).save();
 res.status(200).json({code:0,message:"保存成功"});
  console.log('保存')
})

//获取表
router.get('/gettable',async (req,res)=>{
 
  const {skip,limit} = url.parse(req.url,true).query 
    var n = parseInt(skip)
    var l = parseInt(limit)
  const count = await Teachers.countDocuments() 
  const result = await Teachers.find().skip(n).limit(l);
  result.push(count)
  res.status(200).json(result)

})

//获取教师 
router.get('/getteachers',async (req,res)=>{
  const {TeachersHome} = url.parse(req.url,true).query 
  const result = await Teachers.find({TeachersHome:TeachersHome});
  res.status(200).json(result)

})


router.get('/delete',async (req,res)=>{
  const {teachersPhone} = url.parse(req.url,true).query
  const result = await Teachers.deleteOne({teachersPhone:teachersPhone});
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