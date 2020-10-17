export default{
    path:'/',
    component:()=>import('../layout/Index'),
    children:[
      //系统首页
      {
        path:'',
        name:'home',
        meta:{
          title:"首页"
        },
        component:()=>import('../views/home/Home.vue')
      },
       //课程管理
       {
        path:'course',
        name:'course',
        meta:{
          title:"课程管理"
        },
        // component:()=>import('../views/course/Course.vue'),
        component:{
          render:(h)=><router-view/>
        },
        redirect:'/course/course-list',
        children:[
          // 课程管理
          {
          path:'course-list',
          name:'course-list',
          meta:{
            title:'课程管理'
          },
          component:()=>import('../views/course/Course-list.vue'),
          children:[
            {
              path:'course-add',
              name:'course-add',
              meta:{
                title:'新增课程'
              },
              component:()=>import('../views/course/Course-add'),

          }
        ]
           },
          //课程消耗
           {
            path:'course-expend',
            name:'course-expend',
            meta:{
              title:'课程消耗'
            },
            component:()=>import('../views/course/Course-expend.vue')
           }
          
        ]
      },
      //班级
      {
        path:'class',
        name:'class',
        meta:{
          title:'班级管理'
        },
        component:{
          render:(h)=><router-view/>
        },
        redirect:'/class/class-list',
        children:[
          // 班级管理
          {
          path:'class-list',
          name:'class-list',
          meta:{
            title:'班级管理'
          },
          component:()=>import('../views/class/Class-list.vue')
           },
          //  教室管理
           {
            path:'class-room',
            name:'class-room',
            meta:{
              title:'教室管理'
            },
            component:()=>import('../views/class/Class-room.vue')
           },
          //  课程表
           {
            path:'class-schedule',
           name:'class-schedule',
           meta:{
             title:'课程表'
           },
           component:()=>import('../views/class/Class-schedule.vue')
           },
          //  课时管理
           {
            path:'class-time',
           name:'class-time',
           meta:{
             title:'课时管理'
           },
           component:()=>import('../views/class/Class-time.vue')
           },
        ]
      },
       //订单
       {
        path:'indent',
        name:'indent',
        meta:{
          title:'订单管理'
        },
        component:{
          render:(h)=><router-view/>
        },
        // redirect:'/indent/indent-list',
        children:[
          // 订单列表
          {
          path:'indent-list',
          name:'indent-list',
          meta:{
            title:'订单列表'
          },
          component:()=>import('../views/indent/Indent-list.vue')
           },
          //  退款管理
           {
            path:'indent-refund',
            name:'indent-refund',
            meta:{
              title:'退款管理'
            },
            component:()=>import('../views/indent/Indent-refund.vue')
           },
        ]
      },
       //学员
       {
        path:'student',
        name:'student',
        meta:{
          title:'学员管理'
        },
        component:()=>import('../views/student/Student.vue'),
        children:[]
      },
       //教师
       {
        path:'teachers',
        name:'teachers',
        meta:{
          title:'教师管理'
        },
        component:{
          render:(h)=><router-view/>
        },
        redirect:'/teachers/teachers-list',
        children:[
           // 校区管理
           {
            path:'teachers-school',
           name:'teachers-school',
           meta:{
             title:'校区管理'
           },
       
           component:()=>import('../views/teachers/Teachers-school.vue')
             },
          // 教师管理
          {
          path:'teachers-list',
          name:'teachers-list',
          meta:{
            title:'教师管理'
          },
          component:()=>import('../views/teachers/Teachers-list.vue'),
          children:[            
            {
              path:'teachers-add',
              name:'teachers-add',
              meta:{
                title:'新增教师'
              },
              component:()=>import('../views/teachers/Teachers-add.vue'),
          }
            ]
           },
          ]
      },
       //文章
       {
        path:'article',
        name:'article',
        meta:{
          title:'文章管理'
        },
        component:{
          render:(h)=><router-view/>
        },
        redirect:'/article/banner-list',
        children:[
          {
            path:'banner-list',
            name:'banner-list',
            meta:{
              title:'轮播管理'
            },
            component:()=>import('../views/article/Article.vue'),
            
          children:[            
            {
              path:'article-add',
              name:'article-add',
              meta:{
                title:'新增课程'
              },
              component:()=>import('../views/article/Article-add.vue'),
          }
            ]
          }
      ]
      },
       //促销活动
       {
        path:'promotion',
        name:'promotion',
        meta:{
          title:'促销活动'
        },
        component:()=>import('../views/promotion/Promotion.vue')
      },
       //统计分析
       {
        path:'statistics',
        name:'statistics',
        meta:{
          title:'统计分析'
        },
        component:()=>import('../views/statistics/Statistics.vue')
      },
       //系统设置
       {
        path:'setting',
        name:'setting',
        meta:{
          title:'系统设置'
        },
        component:{
          render:(h)=><router-view/>
        },
        // component:()=>import('../views/setting/Setting.vue')，
        redirect:'/setting/setting-member',
        children:[
           // 权限管理
           {
            path:'setting-jurisdiction',
            name:'setting-jurisdiction',
            meta:{
              title:'权限管理'
            },
            component:()=>import('../views/setting/Setting-jurisdiction.vue')
             },
          // 成员管理
          {
          path:'setting-member',
          name:'setting-member',
          meta:{
            title:'成员管理'
          },
          component:()=>import('../views/setting/Setting-member.vue')
           },
          ]
      }
   
    ]

}