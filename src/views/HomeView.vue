<script setup>
import PageHeader from "@/components/PageHeader";
import ArticleGallery from "@/components/ArticleGallery";
import QuoteHero from "@/components/QuoteHero.vue";
import ContributeHero from "@/components/ContributeHero.vue";
import BlogHero from "@/components/BlogHero";
import Footer from "@/components/Footer.vue";

import Tag from "@/components/Tag.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const pageTitle = computed(() => {
  switch (route.query.category) {
    case "environment":
      return "Ambiente";
    case "economy":
      return "Economia";
    case "world":
      return "Mondo";
    case "no-profit":
      return "Non profit";
    case "politics":
      return "Politica";
    case "society":
      return "Società";
    case "welfare":
      return "Welfare";
    case "all":
    default:
      return "Tutti i temi";
  }
});

const blogs = [
  {
    id: 1,
    title: "Il Becco dell'oca",
    author: "Paolo Dell'Oca",
    imageUrl: "src/assets/images/blogs/blog1.jpeg",
  },
  {
    id: 2,
    title: "Disarmato",
    author: "Pasquale Pugliese",
    imageUrl: "src/assets/images/blogs/blog2.jpeg",
  },
  {
    id: 3,
    title: "Battitiperminuto",
    author: "Lorenzo Maria Alvaro",
    imageUrl: "src/assets/images/blogs/blog3.jpeg",
  },
  {
    id: 4,
    title: "La Zanzarella",
    author: "Elena Zanella",
    imageUrl: "src/assets/images/blogs/blog4.jpeg",
  },
  {
    id: 5,
    title: "Impact Q&A",
    author: "Lauro Orestano",
    imageUrl: "src/assets/images/blogs/blog5.jpeg",
  },
];
</script>

<template>
  <main>
    <PageHeader>
      <template #page-title>{{ pageTitle }}</template>
      <template #header-end>
        <nav class="tags">
          <Tag :type="'button'" :size="'medium'">
            <template #default>AMBIENTE</template>
          </Tag>

          <Tag :type="'button'" :size="'medium'">
            <template #default>ECONOMIA</template>
          </Tag>

          <Tag :type="'button'" :size="'medium'">
            <template #default>MONDO</template>
          </Tag>

          <Tag :type="'button'" :size="'medium'">
            <template #default>NON PROFIT</template>
          </Tag>

          <Tag :type="'button'" :size="'medium'">
            <template #default>POLITICA</template>
          </Tag>

          <Tag :type="'button'" :size="'medium'">
            <template #default>SOCIETÀ</template>
          </Tag>

          <Tag :type="'button'" :size="'medium'">
            <template #default>WELFARE</template>
          </Tag>
        </nav>
      </template>
    </PageHeader>

    <ArticleGallery />

    <ContributeHero :background-color="'var(--color-secondary-eggshell)'" :text-color="'black'" />

    <QuoteHero
      :imageUrl="'src/assets/images/quotes/quote1.png'"
      :text-color="'white'"
    >
      <template #quote>Essere troppo seri non è cosa molto seria</template>
      <template #author>[ Detto Africano ]</template>
    </QuoteHero>

    <BlogHero :blogs="blogs" />

    <Footer />
  </main>
</template>

<style lang="scss" scoped>
.tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
