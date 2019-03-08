import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FoodDetails from './views/FoodDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details/:id',
      name: 'details',
      component: FoodDetails
    }
  ]
})
