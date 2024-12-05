<script setup>
const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <router-link to="" class="blog-item">
    <div class="blog-image">
      <img :src="blog.imageUrl" alt="Blog author picture" />
    </div>
    <div class="blog-info">
      <h3 class="blog-title">{{ blog.title }}</h3>
      <p class="blog-author">Di {{ blog.author }}</p>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.blog-item {
  padding: 0 200px;

  @media screen and (max-width: 410px) {
    padding: 0 100px;
  }

  .blog-image {
    width: 100%;
    padding: 0;
    overflow: hidden;
    text-align: center;

    img {
      width: 84px;
      height: 84px;
      max-width: 84px;
      max-height: 84px;
      border-radius: 50%;
      object-fit: cover;
      background: #f9f9f9;

      @media screen and (max-width: 500px) {
        width: 64px;
        height: 64px;
      }
    }
  }

  .blog-info {
    padding: 16px;
    text-align: center;

    .blog-title {
      font-size: 18px;
      font-weight: 700;
    }

    @media screen and (max-width: 500px) {
      .blog-title {
        font-size: 16px;
      }
    }
  }
}
</style>
