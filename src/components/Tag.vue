<script setup>
import { computed, useSlots } from "vue";

const slots = useSlots();

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  size: {
    type: String,
    default: "medium",
    validator(value, props) {
      return ["extra-small", "small", "medium", "large"].includes(value);
    },
  },
});

const computedClasses = computed(() => {
  return [props.size];
});
</script>

<template>
  <button :type="type" class="tag" :class="computedClasses">
    <span class="icon" v-if="slots.icon"><slot name="icon"></slot></span>
    <span class="text"><slot>Click Me</slot></span>
  </button>
</template>

<style lang="scss" scoped>
.tag {
  border: 1px solid var(--color-black);
  border-radius: 4px;
  display: flex;
  place-items: center;
  gap: 4px;
  box-shadow: -3px 3px 0px 0px var(--color-black);
  cursor: pointer;

  .text {
    font-weight: bold;
  }

  &.extra-small {
    font-size: 10px;
    padding: 4px 12px;

    .icon {
      height: 12px;
      width: 12px;
    }
  }

  &.small {
    font-size: 10px;
    padding: 8px 12px;

    .icon {
      height: 14px;
      width: 14px;
    }
  }

  &.medium {
    font-size: 10px;
    padding: 12px 16px;

    .icon {
      height: 14px;
      width: 14px;
    }
  }

  &.large {
    font-size: 18px;
    padding: 12px 24px;

    .icon {
      height: 20px;
      width: 20px;
    }
  }
}
</style>
