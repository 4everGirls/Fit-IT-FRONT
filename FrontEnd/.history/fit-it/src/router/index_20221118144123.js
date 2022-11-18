import Vue from 'vue'
import VueRouter from 'vue-router'
import { component } from 'vue/types/umd'


Vue.use(VueRouter)

const routes = [
  path: "/",
  name: "home",
  component: HomeView,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
