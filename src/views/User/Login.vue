<template>
  <div id="login">
    <div class="content">
      <div class="left">
      <img src="../../../public/img/login.png" alt="">
    </div>
    <div class="right">
        <h1>后台管理系统</h1>
        <div><i class="iconfont"></i><input type="text" placeholder="手机号" v-model="username"></div>
        <div><i class="iconfont"></i><input type="password" placeholder="登录密码" v-model="password"></div>
        <span class="btn" @click="loginAction">登录</span>

    </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: '',
  data () {
    return {
      username:'',
      password:'',
      
    };
  },
  components: {},
  mounted () {},
  methods: {
    loginAction(){
      axios.post(
        '/api/user/login',
        {
          username:this.username,
          password:this.password
        }
      )
      .then(data=>{
        if(data.data.code===0){
          // this.$store.commit('user/setIsLogin',true),
          this.$store.dispatch('user/changeLoginAction',true),

          this.$router.push({name:'home'})
        }else{
          alert(data.data.message)
        }
      })
      .catch(error=>{
        console.log(error);
      })

    }
  }
}
</script>

<style lang='scss' >
#login{
  width: 100%;
  height: 100%;
  background-color: rgb(16,142,233);
  position: relative;
  .content{
      width: 582px;
      height: 366px;
      position: absolute;
      left: 50%;
      right: 50%;
      top: 50%;
      transform: translate3d(-50%,-50%,0);
      display: flex;
      box-sizing: border-box;
      border: 1px solid rgb(209,192,142);
      background-color: white;
      .left{
        width: 217px;
        height: 228px;

        margin-left:18px ;
        margin-top: 50px;
          img{
          width: 217px;
          height: 228px;
          }
      }
      .right{
        flex: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
          font-size: 28px;
          font-weight: 700;
          margin-bottom:42px ;
          margin-top: 55px;
        }
        div{
          width: 304px;
          height: 55px;
          display: flex;
          align-items: center;
          // justify-content: center;
          border: 1px solid rgb(228, 228, 228);
          input{
            flex: auto;
            display: block;
            height: 38px;
            outline: none;
          background-color:white !important;
          border:0px;
          font-size: 14px;
          color: #333;


          }
          i{
            width: 30px;
            height: 30px;
            font-size: 30px;
            margin-left: 13px;
          }
        }
         div:nth-child(2){
           border-bottom: 0px;
          }
          .btn{
            width: 262px;
            height: 44px;
            background-color: rgb(16,142,233);
            font-size:16px ;
            font-weight: 400;
            color: white;
            border-radius: 15px;
            text-align: center;
            line-height: 44px;
            margin-top: 24px;
          }
      }

  }
}
</style>