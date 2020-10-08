const express = require('express');
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

app.use('/api/user',require('./routers/userRouter'));
app.use('/ajax/course',require('./routers/courseRouter'));
app.use('/img',require('./routers/imgRouter'));


module.exports=app;