<template>
  <div id="layout">
    <header>
      <h1>头部</h1>
    <button @click = "logoutAction">退出</button>
    </header>
    <nav>菜单
      
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import http from '../api/http'
import {LOGOUT} from "../api/url"
export default {
  name: '',
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {
   async logoutAction(){
      const data = await http.get(LOGOUT);
      this.$store.dispatch('user/changeLoginAction',false)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>