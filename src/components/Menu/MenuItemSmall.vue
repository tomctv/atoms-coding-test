<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li class="menu-item small">
    <router-link :to="to"><slot>Menu item</slot></router-link>
  </li>
</template>

<style lang="scss" scoped>
.menu-item {
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 846px) {
    padding: 18px;
  }

  @media screen and (max-width: 425px) {
    justify-content: start;
  }
}
</style>
