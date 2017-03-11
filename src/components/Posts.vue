<template>
  <div class="posts">
    <h1 class="h1">All posts</h1>

    <div v-if="err" class="alert alert-warning">
      <p>Sorry, something went wrong</p>
      <p>{{ err }}</p>
    </div>

    <div v-for="post in posts" class="post card">
      <div class="card-block">
        <h2 class="card-title">{{ post.title }}</h2>
        <p v-html="post.body" class="card-text"></p>
      </div>
      <div class="card-footer text-muted">
        <router-link v-bind:to="'/posts/' + post.id" class="card-link">
          View post
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllPosts } from '../api'
import { setProp } from '../shared'

const onSuccess = (next) => (posts) => next(setProp('posts')(posts))

const onError = (next) => (err) => next(setProp('err')(err))

export default {
  name: 'posts',
  data () {
    return {
      posts: [],
      err: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getAllPosts()
      .then(onSuccess(next))
      .catch(onError(next))
  },
  watch: {
    $route () {
      this.posts = []
      this.err = null

      getAllPosts()
        .then(posts => { this.posts = posts })
        .catch(err => { this.err = err })
    }
  }
}
</script>

<style scoped>
  .post {
    margin-top: 1rem;
  }
</style>
