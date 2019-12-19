import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movieList',
    name: 'movieList',
    component:()=>import('../views/MovieList.vue')
  },{
        path: '/movieTop',
        name: 'movieTop',
        component:()=>import('../views/Top.vue')
    },{
        path:'/movie',
        name:'movie',
        component:()=>import('../views/detail.vue')

    },{
        path:'/movie1',
        name:'movie1',
        component:()=>import('../views/detail1.vue')
    },{
        path:'/movie2',
        name:'movie2',
        component:()=>import('../views/detail2.vue')
    },{
        path:'/movie3',
        name:'movie3',
        component:()=>import('../views/detail3.vue')
    }
  /*{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  },{
path:'/demo',
    name:'demo',
        component:()=>import('../views/demo.vue')
}*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
