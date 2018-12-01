import Vue from 'vue'
import VueRouter from 'vue-router'
import Ping from '@/components/Ping'
import Books from '@/components/Books'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Books', component: Books },
    { path: '/ping', name: 'Ping', component: Ping }
  ],
  mode: 'history'
})

export default router
