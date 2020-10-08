<template>
  <div id="auth">
    <router-link to='/auth/login'>登录</router-link>
    <router-link to='/auth/register'>注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {CHECK_LOGIN} from '../../api/url'
import http from '../../api/http'
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      
    };
  },
  async created(){

    

  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
#auth{
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
}

</style>