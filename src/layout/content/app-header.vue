<template>
  <div id="header">
    <a-layout-header class="header">
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" v-if="login">
          <i></i>
          <span>{{data}}</span>
        </a-menu-item>

        <a-menu-item key="2" @click="gohome">
          <i></i>
          <span >首页</span>
        </a-menu-item>

        <a-menu-item key="3" @click="log">
          <i></i>
          <span>退出</span>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </div>
</template>

<script>
import http from "../../api/http"
import {CHECK_LOGIN,GET_INFO,LOGOUT} from "../../api/url"

import {Menu,Layout} from 'ant-design-vue';

export default {
  name: '',
  data () {
    return {
      login:"",
      data:'',
      
    };
  },
   created(){
      this.check();

  },
  components: {
    [Layout.Header.name]:Layout.Header,
    [Menu.name]:Menu,
    [Menu.Item.name]:Menu.Item
  },
  mounted () {},
  methods: {
    async check(){
        const result = await  http.get(CHECK_LOGIN)
        if(result.data.code==0){
          this.login = true;
          const {data} = await http.get(GET_INFO);
          this.data=data.nickname
        }else{
          this.login =false
        }   
    },
    gohome(){
      this.$router.push({name:'home'})
    },
    log(){
      if(this.login){
        http.get(LOGOUT);
         this.$router.push({name:'login'})

      }
    }
  }
}
</script>

<style lang='scss' scoped>
.header{
  display: flex;
  justify-content: flex-end;


}
#header{
  height: max-content;
}
</style>