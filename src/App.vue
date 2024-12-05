<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "@/components/MainHeader";
import TabNavigation from "@/components/TabNavigation";
</script>

<template>
  <header class="header">
    <MainHeader />
    <TabNavigation class="tabs" />
  </header>

  <RouterView class="page-content"/>
</template>

<style scoped>
.header {
  background: var(--color-background);
  position: fixed;
  top: 0;
  max-width: 1440px;
  width: 100%;
  z-index: 100;
  margin: auto;
}

.page-content {
  margin-top: 240px;
  max-width: 1440px;
  overflow: hidden;

  @media screen and (max-width: 1100px) {
    margin-top: 144px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 100px;
  }
}

.tabs {
  @media screen and (max-width: 1100px) {
    display: none;
  }
}
</style>
