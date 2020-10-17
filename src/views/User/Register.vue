<template>
  <div id="register">
    <h1>注册</h1>
    <input type="text" placeholder="手机号" v-model="username">
    <input type="password" placeholder="密码" v-model="password">
    <span @click="registerAction">注册</span>

  </div>
</template>

<script>
import http from '../../api/http'
import {REGISTER} from '../../api/url'

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
    registerAction(){
      http.post(
        REGISTER,
        {
          username:this.username,
          password:this.password,
          nickname:this.username,
          job:this.password,
          auth:[],
          // isAdmin:this.password
        }
      ).then(data=>{
        if(data.data.code==0){
          //成功
          this.$router.push('/login')
        }else{
          //失败
          alert(data.data.message)
        }
      })
      .catch(error=>{
      })

    }
  }
}
</script>

<style lang='scss' scoped>

</style>