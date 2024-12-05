<script setup>
import BlogItem from "./BlogItem.vue";

const props = defineProps({
  blogs: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="blog-hero">
    <ul class="blog-list">
      <li class="blog-list-item blog-hero-title"><h2>Il Blog</h2></li>
      <li v-for="blog in blogs" :key="blog.id" class="blog-list-item">
        <BlogItem :blog="blog" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.blog-hero {
  .blog-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 1px;
    padding: 0;

    @media screen and (max-width: 1210px) {
      grid-template-columns: repeat(5, 1fr);

      li {
        border-bottom: 1px solid var(--color-black);

        &:not(:nth-last-child(2)) {
          border-right: 1px solid var(--color-black);
        }
      }
    }

    @media screen and (max-width: 1010px) {
      grid-template-columns: repeat(4, 1fr);

      li:not(:nth-last-child(3)) {
        border-right: 1px solid var(--color-black);
      }
    }

    @media screen and (max-width: 810px) {
      grid-template-columns: repeat(3, 1fr);

      li:not(:nth-last-child(4)) {
        border-right: 1px solid var(--color-black);
      }
    }

    @media screen and (max-width: 610px) {
      grid-template-columns: repeat(2, 1fr);

      li:nth-child(even) {
        border-right: 1px solid var(--color-black);
      }
    }
  }

  .blog-hero-title {
    display: flex;
    place-items: center;
    justify-content: center;
    padding: 40px;

    h2 {
      font-size: 40px;
      font-weight: 700;
      color: var(--color-primary-red);
    }

    @media screen and (max-width: 480px) {
      h2 {
      font-size: 24px;
    }
    }
  }
}
</style>
