<script setup>
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import { computed } from "vue";

const props = defineProps({
  backgroundColor: {
    type: String,
    default: "lightgrey",
  },
  textColor: {
    type: String,
    default: "black",
  },
});

const backgroundStyle = computed(() => {
  return {
    backgroundColor: props.backgroundColor,
    color: props.textColor,
  };
});
</script>

<template>
  <div class="quote-hero" :style="backgroundStyle">
    <h1 class="slogan">
      <slot name="slogan">Il tuo supporto è fondamentale</slot>
    </h1>
    <router-link to="" class="action-button">
      <span class="action-text">
        <slot name="action-text">Dai il tuo contributo</slot>
      </span>
      <span class="icon">
        <IconArrowRight />
      </span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.quote-hero {
  display: flex;
  place-items: center;
  padding: 60px 40px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 24px;

  @media screen and (max-width: 700px) {
    padding: 40px;
  }

  .slogan {
    font-size: 40px;
    font-weight: 700;
    line-height: 46px;
    margin-bottom: 8px;

    @media screen and (max-width: 700px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .action-button {
    display: flex;
    place-items: center;
    gap: 8px;

    &:hover {
      .icon {
        transform: translateX(4px);
      }
    }

    .action-text {
      font-size: 14px;
      font-weight: 700;
    }

    .icon {
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }
  }
}
</style>
