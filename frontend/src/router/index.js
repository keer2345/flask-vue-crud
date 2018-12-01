import Vue from 'vue'
import VueRouter from 'vue-router'
import Ping from '@/components/Ping'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{ path: '/', component: Ping }]
})

export default router
