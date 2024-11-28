<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
});

const { title } = props;
</script>

<template>
  <section>
    <h2 class="text-xl mb-3">{{ title }}</h2>
    <div class="ps-5">
      <slot name="content" />
    </div>
  </section>
</template>

<style lang="scss" scope></style>
