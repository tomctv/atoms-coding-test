<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li class="menu-item large">
    <router-link to="">
      <h1><slot name="title">Menu item title</slot></h1>
      <p><slot name="description">Menu item description</slot></p>
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
.menu-item {
  background-color: var(--color-white);
  display: flex;
  grid-column: span 2 / span 2;
  padding: 40px;
  align-items: end;

  h1 {
    font-size: 48px;
    font-weight: 700;
  }

  @media screen and (max-width: 1040px) {
    h1 {
      font-size: 36px;
    }
  }

  @media screen and (max-width: 846px) {
    grid-column: unset;
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 28px;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 16px;
    h1 {
      font-size: 20px;
    }
    p {
      display: none;
    }
  }
}
</style>
