<script setup>
const props = defineProps({
  fill: {
    type: String,
    default: "black",
  },
});
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="transform: rotate(180deg)"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.26627 7.26627C2.62129 6.91124 3.19689 6.91124 3.55192 7.26627L12 15.7144L20.4481 7.26627C20.8031 6.91124 21.3787 6.91124 21.7337 7.26627C22.0888 7.62129 22.0888 8.19689 21.7337 8.55192L12.6428 17.6428C12.2878 17.9978 11.7122 17.9978 11.3572 17.6428L2.26627 8.55192C1.91124 8.19689 1.91124 7.62129 2.26627 7.26627Z"
      :fill="fill"
    />
  </svg>
</template>
