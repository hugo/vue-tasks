<template>
  <div class="posts">
    <h1 class="h1">All posts</h1>
    <div v-for="post in posts" class="post card">
      <div class="card-block">
        <h2 class="card-title">{{ post.title }}</h2>
        <p v-html="post.body" class="card-text"></p>
      </div>
    </div>
  </div>
</template>

<script>
const posts = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
  }
]

const newLineToBr = (str) => str.replace(/\n/g, '<br />')

const changeNewlines = (post) => ({ ...post, body: newLineToBr(post.body) })

export default {
  name: 'posts',
  data () {
    return { posts: posts.map(changeNewlines) }
  }
}
</script>

<style scoped>
  .post {
    margin-top: 1rem;
  }
</style>
