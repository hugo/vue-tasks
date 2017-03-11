<template>
  <div class="card">
    <div class="card-block">
      <h2 class="card-title">{{ post.title }}</h2>
      <div class="card-text">{{ post.body }}</div>
    </div>
    <div class="card-footer text-muted">
      <router-link to="/">Back to all posts</router-link>
    </div>
  </div>
</template>

<script>
const post = {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}

export default {
  data () {
    return { post }
  }
}
</script>

<style scoped>
</style>
