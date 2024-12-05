<script setup>
import Searchbar from "./Searchbar.vue";
import MenuToggle from "./MenuToggle.vue";
import Menu from "@/components/Menu";
import { ref } from "vue";

const showSearchbar = ref(false);
const showMenu = ref(false);

function toggleSearchbar() {
  showSearchbar.value = !showSearchbar.value;
}

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <nav class="main-navigation" aria-label="Main navigation">
    <MenuToggle
      :showMenu="showMenu"
      :showSearchbar="showSearchbar"
      @toggle-menu="toggleMenu"
    />
    <Searchbar
      :showMenu="showMenu"
      :showSearchbar="showSearchbar"
      @toggle-searchbar="toggleSearchbar"
    />

    <Menu v-if="showMenu" />
  </nav>
</template>

<style lang="scss" scoped>
.main-navigation {
  height: 96px;
  display: flex;
  place-items: center;
  gap: 0;
  border-bottom: 1px solid var(--color-black);
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 600px) {
    height: 52px;
  }
}
</style>
