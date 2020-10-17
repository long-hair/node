const {Router} = require('express');
const Article = require('../module/Article');
const router = new Router();
const url =require('url');




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
  const {articleName} = req.body;
  const result = await Article.findOne({articleName});
  if(result){
    res.status(200).json({code:-1,message:'该用标题已存在，请修改后重试!'})
    return ;
  }
 
  //保存数据
 await new Article(req.body).save();
 res.status(200).json({code:0,message:"保存成功"});
  console.log('保存')
})

//获取表
router.get('/gettable',async (req,res)=>{
 
  const {skip,limit} = url.parse(req.url,true).query 
    var n = parseInt(skip)
    var l = parseInt(limit)
  const count = await Article.countDocuments() 
  const result = await Article.find().skip(n).limit(l);
  result.push(count)
  res.status(200).json(result)

})

//获取图片 
router.get('/getbanner',async (req,res)=>{
  const {articleSite} = url.parse(req.url,true).query 
  const result = await Article.find({articleSite:articleSite},{articleImg:true});
  res.status(200).json(result)

})


router.get('/delete',async (req,res)=>{
  const {articleName} = url.parse(req.url,true).query
  const result = await Article.deleteOne({articleName:articleName});
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