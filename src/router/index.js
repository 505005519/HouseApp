import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue'; //  进入页面就会加载


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    { path: '/',  redirect:"/main" }, //重定向
    { path: '/main', redirect:"/main/home"  ,component: Main ,children:[
        { path:"/main/home", component:()=>import("../views/MainTab/Home.vue")},
        { path:"/main/wechat", component:()=>import("../views/MainTab/WeChat.vue")},
        { path:"/main/history", component:()=>import("../views/MainTab/History.vue")},
        { path:"/main/my", component:()=>import("../views/MainTab/My.vue")}
    ]},
    { path: '/log', component: () => import('../views/Log.vue') }, //懒加载
    { path: '/reg', component: () => import('../views/Reg.vue') },
    { path: '/city', component: () => import('../views/City.vue') },
    { path: '/search', component: () => import('../views/Search.vue') },
    { path: '/map', component: () => import('../views/Map.vue') }
  ]
})


