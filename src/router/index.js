import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/test',
      name:'test',
      component:resolve => require(['../page/test/index.vue'], resolve)   
    },
    {
      path:'/',
      name:'index',
      component:resolve => require(['../page/index/index.vue'], resolve)   
    },
    {
      path:'/home',
      name:'home',
      component:resolve => require(['../page/home/index.vue'], resolve)   
    },
    ,
    {
      path:'/build/:id',
      name:'build',
      component:resolve => require(['../page/build/index.vue'], resolve)   
    }
  ]
})



