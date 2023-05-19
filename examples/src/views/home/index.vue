<template>
  <div>
    <div>欢迎来到 whoo !!</div>
    <ul>
      <li @click="handleMenuClick('DemoButton')">demo-button</li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function handleMenuClick(routerName) {
  router.push({ name: routerName });
}
</script>
