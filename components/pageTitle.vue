<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});

const { title, link } = props;
</script>

<template>
  <h1 class="mb-10 text-2xl font-bold"
      :class="link ? 'text-sky-600' : 'text-gray-600'">
    <template v-if="link">
      <a :href="link" target="_blank">
        <!-- 官方核心概念示範 -->
        {{ title }}
      </a>
    </template>
    <template v-else>
      {{ title }}
    </template>
  </h1>
</template>

<style lang="scss" scope></style>
