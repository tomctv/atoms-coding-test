<script setup>
import { computed } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    default: "black",
  },
});

const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${props.imageUrl})`,
    color: props.textColor,
  };
});
</script>

<template>
  <article class="quote-hero" :style="backgroundStyle">
    <div>
      <h1 class="quote"><slot name="quote">The quote...</slot></h1>
      <p class="author"><slot name="author">Author</slot></p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.quote-hero {
  display: flex;
  place-items: center;
  padding: 60px 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 700px) {
      padding: 40px;
    }

  .quote {
    font-size: 40px;
    font-weight: 700;
    line-height: 46px;
    margin-bottom: 8px;

    @media screen and (max-width: 700px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
  .author {
    font-size: 16px;
    font-style: italic;

    @media screen and (max-width: 700px) {
      font-size: 14px;
    }
  }
}
</style>
