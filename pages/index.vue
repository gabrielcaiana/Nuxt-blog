<template>
  <div>
    <div class="hero">
      <Hero />
    </div>
    <main>
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

<style lang="scss" scoped>
  .hero {
    width: 100vw;
    background: $primary;
    padding: 3rem 0;
  }
</style>
