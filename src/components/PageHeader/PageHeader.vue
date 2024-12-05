<script setup>
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconArrowUp from "@/components/icons/IconArrowUp.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isWideViewport = ref(false);
const showHeaderEnd = ref(true);

// Se viewport è minore di 700px nascondo header end
const checkViewportWidth = () => {
  isWideViewport.value = window.innerWidth > 700;
  showHeaderEnd.value = isWideViewport.value;
};

onMounted(() => {
  checkViewportWidth();
  window.addEventListener("resize", checkViewportWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkViewportWidth);
});

function toggleHeaderEnd() {
  showHeaderEnd.value = !showHeaderEnd.value;
}
</script>

<template>
  <div class="page-header">
    <div class="title-wrapper">
      <h1 class="page-title"><slot name="page-title">Page title</slot></h1>
      <IconArrowDown
        class="icon-toggle"
        @click="toggleHeaderEnd"
        v-if="!showHeaderEnd"
      />
      <IconArrowUp class="icon-toggle" @click="toggleHeaderEnd" v-else />
    </div>
    <div class="header-end" v-if="showHeaderEnd">
      <slot name="header-end"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  padding: 48px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    padding: 24px 20px;
    gap: 8px;
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon-toggle {
    max-width: 20px;
    max-height: 20px;
    display: none;
    cursor: pointer;

    @media screen and (max-width: 700px) {
      display: block;
    }
  }

  .page-title {
    font-size: 51px;
    font-weight: 700;
    color: var(--color-text-dark);

    @media screen and (max-width: 700px) {
      font-size: 36px;
    }

    @media screen and (max-width: 500px) {
      font-size: 28px;
    }
  }
}
</style>
