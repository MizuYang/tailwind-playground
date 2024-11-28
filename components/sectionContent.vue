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
    <h2 class="mb-3 text-xl text-slate-700">{{ title }}</h2>
    <div class="ps-5">
      <slot name="content" />
    </div>
  </section>
</template>

<style lang="scss" scope></style>
