import Vue from 'vue'
import Router from 'vue-router'
import PostView from '@/components/PostView'
import PostDetailView from '@/components/PostDetailView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostView',
      component: PostView
    },
    {
      path: '/post/:postId',
      name: 'PostDetailView',
      component: PostDetailView
    }
  ]
})
