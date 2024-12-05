<script setup>
import { computed } from "vue";
import Tag from "@/components/Tag.vue";

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${props.article.imageUrl})`,
    color: props.textColor,
  };
});
</script>

<template>
  <article class="article" :style="backgroundStyle">
    <div>
      <ul class="tags">
        <li v-for="tag in article.tags">
          <Tag :size="'extra-small'">MIGRANTI</Tag>
        </li>
      </ul>
      <h2 class="article-title">{{ article.title }}</h2>

      <div class="author">
        <div class="author-image">
          <img :src="article.author.imageUrl" alt="Article author picture" />
        </div>
        <div class="author-info">
          <p class="author-name">Di {{ article.author.name }}</p>
          <p class="article-date">{{ article.date }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.article {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px;
  height: 506px;
  display: flex;
  width: 100%;
  align-items: end;

  .tags {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 4px 8px;
    margin-bottom: 16px;
  }

  .article-title {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    color: var(--color-white);
    width: 80%;
    margin-bottom: 36px;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 16px;

    .author-image {
      padding: 0;
      overflow: hidden;
      text-align: center;

      img {
        width: 48px;
        height: 48px;
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

    .author-info {
      color: var(--color-white);

      .author-name {
        font-size: 14px;
        margin-bottom: 4px;
      }

      .article-date {
        font-size: 10px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 24px;
    height: 320px;

    .article-title {
      font-size: 24px;
      line-height: 30px;
      width: 100%;
    }
  }
}
</style>
