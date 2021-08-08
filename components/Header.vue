<template>
  <header>
    <div class="container">
      <div class="navbar">
        <nuxt-link class="navbar__logo" to="/">Gabriel Caiana</nuxt-link>
        <nav>
          <ul>
            <li><nuxt-link to="/who">Who?</nuxt-link></li>
            <li><nuxt-link to="/posts">Posts</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  @include container();

  .navbar {
    @include flexbox-space-between();

    &__logo {
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
    }

    ul {
      @include flexbox();
      justify-content: flex-end;

      li {
        width: auto;
        padding-left: 1.5rem;
        font-size: 1rem;
        transition: 0.5s ease;
        position: relative;
        display: inline-block;
        z-index: 1;
        padding-bottom: 0.5rem;

        @include screen ('small') {
          padding-left: 1rem;
        }

        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          width: 0;
          height: 2px;
          transform: translate(42%, -50%);
          background: #fff;
          transition: 0.5s ease;
        }

        &:hover {
          opacity: 0.6;

          &::after {
            width: 70%;
          }
        }
      }
    }
  }
}
</style>
