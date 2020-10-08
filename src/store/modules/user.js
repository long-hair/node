import {CHECK_LOGIN} from '../../api/url'
import http from '../../api/http'
export default {
  namespaced:true,
  state:{
    isLogin:Boolean(Number(localStorage.getItem('isLogin')))
  },
  mutations:{
    setIsLogin(state,payload){
      state.isLogin = payload;
    }
  },
  actions:{
    async checkLogin(context,payload){
          const data = await http.get(CHECK_LOGIN)
          if(data.data.code==0){
            localStorage.setItem('isLogin',1);
            context.commit('setIsLogin',true)
            // this.$router.push('/home');
          }else{
            localStorage.setItem('isLogin',0);
            context.commit('setIsLogin',false)


          }
        },
        changeLoginAction(context,payload){
          if(payload){
            localStorage.setItem('isLogin',1);

          }else{
            localStorage.setItem('isLogin',0);


          }
          context.commit('setIsLogin',payload)

        }
    }
   
}
