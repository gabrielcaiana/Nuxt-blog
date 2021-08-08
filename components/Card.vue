<template>
  <div class="card">
    <img :src="post.feature_image" :alt="post.title" />
    <div class="content">
      <span v-text="post.authors[0].name" />
      <p v-text="post.excerpt" />
      <NuxtLink :to="{ path: post.slug }" v-text="post.title" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
