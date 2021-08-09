import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://myblog-4.ghost.io',
  key: process.env.NODE_ENV === 'production' ? API_KEY : null,
  version: "v3"
});
debugger

export async function getPosts() {
  return await api.posts

  .browse({
    limit: "all",
    include: "tags,authors"
  }).catch(err => {
    console.log(err)
  })
}

export async function getSinglePost(postSlug) {
  return await api.posts

  .read({
    slug: postSlug
  }).catch(err => {
    console.log(err)
  })
}