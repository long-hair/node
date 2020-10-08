export default {
  path:'/auth',
  name:'auth',
  redirect:'/auth/login',
  component:()=>import('../views/User/Auth'),
  children:[
    {
      path:"login",
       name:'login',
      component:()=>import('../views/User/Login')
    },
    {
      path:"register", 
      name:'register',
      component:()=>import('../views/User/Register')
    }
  ]
  }