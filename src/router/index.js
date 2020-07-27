import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '移动积分兑换'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/detail/:id',
    name: 'Home',
    meta: {
      title: '积分兑换详情'
    },
    component: () => import('../views/Detail.vue')
  },
]


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
  document.title = to.meta.title
  }
  next()
 })
 
export default router
