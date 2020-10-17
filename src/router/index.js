import VueRouter from 'vue-router'
import Vue from 'vue';
import store from '../store'
import auth from './auth'
import main from './main'
Vue.use(VueRouter);

const routes = [
  auth,
  main
]
const router = new VueRouter({
  mode: 'history',
  base: '/pc',
  routes,
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
//路由守卫
router.beforeEach((to,from,next)=>{
  if(to.name !='login' && to.name !='register'){
    if(store.state.user.isLogin){

      next();
    }else{

      next('/auth');

  }
  }
  next()

})
export default router
