<template>
  <div class="posts">
    <h1 class="header">All posts</h1>
    <div v-for="post in posts" class="post">
      <h2 class="title">{{ post.title }}</h2>
      <p v-html="post.body" class="body"></p>
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
  .posts {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .header {
    font-size: 1.5rem;
  }

  .title {
    font-size: 1.25rem;
  }
</style>
