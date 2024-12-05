<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li class="tab-item" role="presentation">
    <router-link
      class="tab"
      :class="{ active: route.query.category === category }"
      :to="{ query: { category: category } }"
    >
      <slot>Tab</slot>
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
.tab-item {
  margin: 0;
  display: flex;
  place-items: center;
}

.tab {
  height: 100%;
  background: none;
  border: none;
  border-bottom: 6px solid transparent;
  padding: 10px 15px;
  display: flex;
  place-items: center;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  transition: border-color 0.3s;

  &:hover {
    border-bottom-color: var(--color-grey-light);
  }
  &.active {
    border-bottom-color: var(--color-primary-red);
    font-weight: bold;
  }
}
</style>
