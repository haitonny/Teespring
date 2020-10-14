import Vue from 'vue'
import VueRouter from 'vue-router'
import TeespringHome from '@/components/Homepage/TeespringHome.vue'
import TeespringShop from "@/components/Shop/TeespringShop";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TeespringHome',
    component: TeespringHome,
  },
  {
    path: '/teespring-shop',
    name: 'shop',
    component:TeespringShop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
