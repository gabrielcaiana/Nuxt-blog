<template>
  <div class="container">
    <h1>Welcome to my blog</h1>
    <p>
      I am a 24-year-old software developer working primarily with JavaScript |
      TypeScript | Vue and Nuxt. Passionate about technology, innovation and UX
      | User interface design.
    </p>
    <nuxt-link class="hire" to="/contact">Hire me</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  @include container();
  @include flexbox-column();
  text-align: center;

  h1 {
    color: $white;
    @include screen('small') {
      font-size: 2rem;
    }
  }

  p {
    color: $white;
    max-width: 90%;
    margin-bottom: 1rem;

      @include screen('small') {
      max-width: 100%;
    }
  }

  .hire {
    color: $white;
    background-color: $primary-light;
    padding: 1rem;
    border-radius: 8px;
    max-width: 120px;
    font-weight: 600;
  }
}
</style>
