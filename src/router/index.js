import Vue from 'vue'
import Router from 'vue-router'
import PostView from '@/components/PostView'
import PostDetailView from '@/components/PostDetailView'
import Writing from '@/components/Writing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostView',
      component: PostView
    },
    {
      path: '/posts/write',
      name: 'Writing',
      component: Writing
    },
    {
      path: '/posts/:postId',
      name: 'PostDetailView',
      component: PostDetailView
    }
  ]
})
