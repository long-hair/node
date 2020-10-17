const express = require('express');
const path = require('path');
const session = require('express-session');
const config = require('./config')
const MongoDBStore = require('connect-mongodb-session')(session);
 
const app = express();
//准备session存放仓库





var store = new MongoDBStore({
  uri:` mongodb://${config.db_host}:${config.db_port}/${config.db_name}`,
  collection: 'sessions'
});
 
// Catch errors
store.on('error', function(error) {
  console.log(error);
});
 
app.use(require('express-session')({
  secret: 'This is a secret',
  name:'SESSIONID',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  // Boilerplate options, see:
  // * https://www.npmjs.com/package/express-session#resave
  // * https://www.npmjs.com/package/express-session#saveuninitialized
  resave: true,
  saveUninitialized: true
}));
 
// app.get('/', function(req, res) {
//   res.send('Hello ' + JSON.stringify(req.session));
// });
 
server = app.listen(3000);





app.use(express.urlencoded());
app.use(express.json());








app.use('/pc/static',express.static(path.join(__dirname,'./www')));
// app.use('/js',express.static(path.join(__dirname,'./www/js')));



app.use('/pc/api/user',require('./routers/userRouter'));

app.use('/pc/ajax/usersp',require('./routers/userRoutersp'));
app.use('/pc/ajax/course',require('./routers/courseRouter'));
app.use('/pc/ajax/article',require('./routers/articleRouter'));
app.use('/pc/ajax/teachers',require('./routers/teachersRouter'));
// 订单
app.use('/pc/ajax/indent',require('./routers/identRouter'));



app.use('/img',require('./routers/imgRouter'));

app.use('/pc',(req,res)=>{
  res.sendFile(path.join(__dirname,'./www/index.html'));
})


// 手机端
app.use('/sp/static',express.static(path.join(__dirname,'./sp')));
// app.use('/js',express.static(path.join(__dirname,'./www/js')));



app.use('/sp/api/user',require('./routers/userRouter'));

app.use('/sp/ajax/usersp',require('./routers/userRoutersp'));
app.use('/sp/ajax/course',require('./routers/courseRouter'));
app.use('/sp/ajax/article',require('./routers/articleRouter'));
app.use('/sp/ajax/teachers',require('./routers/teachersRouter'));
// 订单
app.use('/sp/ajax/indent',require('./routers/identRouter'));



// app.use('/img',require('./routers/imgRouter'));

app.use('/sp',(req,res)=>{
  res.sendFile(path.join(__dirname,'./sp/index.html'));
})


module.exports=app;