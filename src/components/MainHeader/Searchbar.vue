<script setup>
import IconSearch from "@/components/icons/IconSearch.vue";
import IconClose from "@/components/icons/IconClose.vue";
import { ref, watch, onMounted, nextTick } from "vue";

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

const searchInput = ref(null);

// Focus the input
watch(
  () => props.showSearchbar,
  (newVal) => {
    if (newVal) {
      nextTick(() => {
        searchInput.value?.focus();
      });
    }
  }
);
</script>

<template>
  <div class="searchbar">
    <form class="search-form" v-if="showSearchbar">
      <input
        ref="searchInput"
        id="search-input"
        type="text"
        placeholder="Cerca"
      />
    </form>

    <div
      class="searchbar-toggle"
      @click="$emit('toggle-searchbar')"
      v-if="!showMenu"
    >
      <IconSearch
        :fill="'var(--color-primary-red)'"
        class="icon"
        v-if="!showSearchbar"
      />
      <IconClose :fill="'var(--color-primary-red)'" class="icon" v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  display: flex;
  place-items: center;
  justify-content: end;
  width: 100%;

  .search-form {
    height: 96px;
    width: 100%;

    input {
      height: 100%;
      width: 100%;
      padding: 16px 24px;
      border: none;
      outline: none;
      background: transparent;
      font-size: 18px;

      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }

  .searchbar-toggle {
    height: 96px;
    width: 96px;
    max-width: 96px;
    display: flex;
    place-items: center;
    justify-content: center;
    cursor: pointer;
    border-left: 1px solid var(--color-black);

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
