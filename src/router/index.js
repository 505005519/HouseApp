import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'; //  进入页面就会加载


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    { path: '/',  redirect:"/home" }, //重定向
    { path: '/home',  component: Home },
    { path: '/log', component: () => import('../views/Log.vue') }, //懒加载
    { path: '/reg', component: () => import('../views/Reg.vue') }
  ]
})


