<template>
  <div>
    <div v-if="err" class="alert alert-warning">
      <p>Sorry, something went wrong</p>
      <p>{{ err }}</p>
    </div>

    <div v-if="post" class="card">
      <div class="card-block">
        <h2 class="card-title">{{ post.title }}</h2>
        <div v-html="post.body" class="card-text"></div>
      </div>
      <div class="card-footer text-muted">
        <router-link to="/">Back to all posts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getPost } from '../api'
import { setProp } from '../shared'

const onSuccess = (next) => (post) => next(setProp('post')(post))

const onError = (next) => (err) => next(setProp('err')(err))

export default {
  data () {
    return {
      post: null,
      err: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getPost(to.params.postId)
      .then(onSuccess(next))
      .catch(onError(next))
  },
  watch: {
    $route () {
      this.post = null
      this.err = null
      getPost(this.$route.params.postId)
        .then(post => { this.post = post })
        .catch(err => { this.err = err })
    }
  }
}
</script>

<style scoped>
</style>
