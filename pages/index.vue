<template>
  <div>
    <main>
      <h2>Latest thoughts</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
            <Card :post="post" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { getPosts } from '@/api/posts'
export default {
  async asyncData() {
    const posts = await getPosts()
    return { posts: posts }
  },
}
</script>
