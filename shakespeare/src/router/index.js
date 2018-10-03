import Vue from 'vue'
import Router from 'vue-router'
import ReviewList from '@/components/ReviewList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ReviewList',
      component: ReviewList
    }
  ]
})
