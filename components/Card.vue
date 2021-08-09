<template>
  <div class="card">
    <img :src="post.feature_image" :alt="post.title" />
    <div class="content">
      <span v-text="post.authors[0].name" />
      <NuxtLink :to="{ path: post.slug }" v-text="post.title" />
      <p v-text="post.excerpt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 440px;
  box-shadow: 0px 10px 20px rgba(43, 37, 63, 0.1);

  img {
    border-radius: 12px 12px 0 0;
  }

  .content {
    padding: 1rem;
    min-height: 220px;
    position: relative;

    span {
      font-size: 0.875rem;
      color: $primary;
      display: inline-block;
      text-transform: uppercase;
      padding: 0.5rem 0;
    }

    p {
      padding: 1rem 0;
      color: $gray-1;
    }
  }
}
</style>
