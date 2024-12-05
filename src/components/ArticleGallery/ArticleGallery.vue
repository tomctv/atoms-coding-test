<script setup>
import Article from "./Article.vue";

const articles = [
  {
    id: 1,
    title: "Roccella Jonica, la Lampedusa che l'Italia ignora",
    date: "29 Giugno 2022",
    imageUrl: "src/assets/images/articles/article1.jpeg",
    tags: ["Migranti","Naufragi"],
    author: {
      name: "Alessandro Puglia",
      imageUrl: "src/assets/images/authors/author1.jpeg",
    },
  },
];
</script>

<template>
  <div class="article-gallery">
    <Article :article="article" v-for="article in articles" :key="article.id" />
  </div>
</template>

<style lang="scss" scoped>

</style>
