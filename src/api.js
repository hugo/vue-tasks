const newLineToBr = (str) => str.replace(/\n/g, '<br />')

const changeNewlines = (post) => ({ ...post, body: newLineToBr(post.body) })

const formatPosts = posts => posts.map(changeNewlines)

const uri = (path = '') => `https://jsonplaceholder.typicode.com/${path}`

const checkOk = (res) => res.ok
  ? Promise.resolve(res)
  : Promise.reject(`Expected 200 got ${res.status}`)

const toJson = (res) => res.json()

export const getAllPosts = () =>
  fetch(uri('posts'))
  .then(checkOk)
  .then(toJson)
  .then(formatPosts)

export const getPost = (id) =>
  fetch(uri(`posts/${id}`))
  .then(checkOk)
  .then(toJson)
  .then(changeNewlines)
