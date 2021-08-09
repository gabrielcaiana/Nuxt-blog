<template>
  <div>
    <div class="hero">
      <Hero />
    </div>
    <main>
      <div class="container">
        <h2>Last posts</h2>
        <ul class="cards">
          <li v-for="post in posts" :key="post.id">
            <Card :post="post" />
          </li>
        </ul>
      </div>
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

.container {
  @include container();
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    padding: 2rem 0;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    @include screen('medium') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include screen('small') {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
