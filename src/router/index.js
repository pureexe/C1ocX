import Vue from 'vue'
import Router from 'vue-router'
import CurrentTime from '@/components/CurrentTime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CurrentTime',
      component: CurrentTime
    }
  ]
})
