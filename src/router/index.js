import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/Post'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:postId',
      name: 'Post',
      component: Post
    }
  ]
})
