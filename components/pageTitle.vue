<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
  link: {
    type: String,
    required: true,
    default: "",
  },
});

const { title, link } = props;
</script>

<template>
  <h1 class="mb-10">
    <a :href="link" class="text-2xl font-bold text-sky-600" target="_blank">
      <!-- 官方核心概念示範 -->
      {{ title }}
    </a>
  </h1>
</template>

<style lang="scss" scope></style>
