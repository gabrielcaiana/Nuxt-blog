<template>
  <div class="container">
    <div class="post">
      <h1 class="post__title">{{ post.title }}</h1>
      <img class="post__cover" :src="post.feature_image" :alt="post.title"> 
      <div v-html="post.html" />
    </div>
  </div>
</template>

<script>
import { getSinglePost } from '@/api/posts'

export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug)
    return { post: post }
  },
}
</script>

<style lang="scss" scoped>
.container {
  @include container();

  .post {
    max-width: 700px;
    margin: 0 auto;

    &__title {
      padding: 3rem 0;
    }
  }
}
</style>
