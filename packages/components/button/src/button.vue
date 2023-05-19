<template>
  <button class="whoo-button" :class="buttonClass">
    <slot />
  </button>
</template>

<script setup>
import "../style/index.scss";
import { computed } from "vue";

defineOptions({
  name: "DemoButton",
});

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});

const buttonClass = computed(() => {
  return {
    [`whoo-button--${props.type}`]: props.type,
  };
});
</script>
