<script setup>
import TabItem from "./TabItem.vue";
</script>

<template>
  <div class="tabs">
    <ul class="tab-list" role="tablist">
      <TabItem :category="'all'">Tutti i temi</TabItem>
      <TabItem :category="'environment'">Ambiente</TabItem>
      <TabItem :category="'economy'">Economia</TabItem>
      <TabItem :category="'world'">Mondo</TabItem>
      <TabItem :category="'no-profit'">Non profit</TabItem>
      <TabItem :category="'politics'">Politica</TabItem>
      <TabItem :category="'society'">Società</TabItem>
      <TabItem :category="'welfare'">Welfare</TabItem>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.tab-list {
  display: flex;
  border-bottom: 1px solid var(--color-black);
  height: 96px;
}
</style>
