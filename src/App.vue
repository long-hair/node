<template>
  <div id="app">
   <router-view ></router-view>
    <!-- <Login v-if="'login' == show"></Login>
    <Register v-if="'register' == show" @finish ="showAction('login')" ></Register> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
// import Login from './views/User/Login'
// import Register from './views/User/Register'
export default {
  name: '',
  data () {
    return {
      // show :"login"
      
    };
  },
  computed:{
    ...mapState({
      isLogin:state=>state.user.isLogin
    })
  },
  watch:{
    isLogin:{
      handler(n){
          if(!n){
            this.$router.replace('/auth')
          }
      },
      immediate:true
    }
  },
  components: {
    // Login,
    // Register
  },
  created(){
    if(this.isLogin){
    this.$store.dispatch('user/checkLogin');
    }
    
  },
  mounted () {},
  methods: {
    showAction(item){
      console.log(item)
      this.show = item;

    }
  }
}
</script>

<style lang='scss' scoped>

</style>