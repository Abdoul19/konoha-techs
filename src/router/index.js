// @ts-nocheck
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Service',
    component: () => import(/* webpackChunkName: "service" */ '../views/Service.vue')
  },
  {
    path: '/services/app-modernization',
    name: 'ServiceAppModerniz',
    component: () => import(/* webpackChunkName: "ServiceAppModerniz" */ '../components/Services/AppModerniz.vue')
  },
  {
    path: '/services/cloud',
    name: 'ServiceCloud',
    component: () => import(/* webpackChunkName: "ServiceCloud" */ '../components/Services/Cloud.vue')
  },
  {
    path: '/services/cto',
    name: 'ServiceCto',
    component: () => import(/* webpackChunkName: "ServiceCto" */ '../components/Services/Cto.vue')
  },
  {
    path: '/services/dev-process',
    name: 'ServiceDevProcess',
    component: () => import(/* webpackChunkName: "ServiceDevProcess" */ '../components/Services/Cto.vue')
  },
  {
    path: '/services/web-dev',
    name: 'ServiceWebDev',
    component: () => import(/* webpackChunkName: "ServiceWebDev" */ '../components/Services/WebDev.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
