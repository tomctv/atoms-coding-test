<script setup>
import IconBurger from "@/components/icons/IconBurger.vue";
import IconClose from "@/components/icons/IconClose.vue";

const props = defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
  showSearchbar: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="burger-menu">
    <div
      class="menu-toggle"
      @click="$emit('toggle-menu')"
      v-if="!showSearchbar"
    >
      <IconBurger
        :fill="'var(--color-primary-red)'"
        class="icon"
        v-if="!showMenu"
      />
      <IconClose :fill="'var(--color-primary-red)'" class="icon" v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.burger-menu {
  .menu-toggle {
    height: 96px;
    width: 96px;
    max-width: 96px;
    display: flex;
    place-items: center;
    justify-content: center;
    cursor: pointer;
    border-right: 1px solid var(--color-black);

    @media screen and (max-width: 600px) {
      height: 52px;
      width: 52px;
      
      .icon {
        height: 20px;
        width: 20px;
      }
    }

    .icon {
      max-height: 24px;
      max-width: 24px;
    }
  }
}
</style>
