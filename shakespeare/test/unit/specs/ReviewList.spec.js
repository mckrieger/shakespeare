import Vue from 'vue'
import ReviewList from '@/components/ReviewList'

describe('ReviewList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ReviewList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title h1').textContent)
      .toEqual('Reviews')
  })
})
