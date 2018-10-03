import Vue from 'vue'
import Router from 'vue-router'
import ReviewList from '@/components/ReviewList'
import Detail from '@/components/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ReviewList',
      component: ReviewList
    },
    {
      path:'/:reviewId/details',
      name:'Detail',
      component: Detail,
      props: true,
    }
  ]
})
