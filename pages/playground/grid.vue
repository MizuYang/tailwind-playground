<script setup>
definePageMeta({
  title: "Grid",
});

</script>

<template>
  <div>
    <SectionContent title="Grid">
      <template #content>
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">
            grid-cols-*
          </h3>
          <div class="grid grid-cols-4 gap-3">
            <template v-for="i in 8" :key="i">
              <div class="box">{{ i }}</div>
            </template>
          </div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped>
@tailwind components;

@layer components {
  .box {
    @apply inline-block bg-sky-300;
  }
}
</style>
