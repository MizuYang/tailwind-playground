<script setup>
definePageMeta({
  title: "Grid",
});

const colsCount = ref(5);
const curColCount = ref(3);
const gridColsClass = ref({
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
});
</script>

<template>
  <div>
    <SectionContent title="Grid">
      <template #content>
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">grid-cols-*</h3>

          <template v-for="idx in 5" :key="`btn-grid-cols-count-${idx}`">
            <button
              type="button"
              class="mb-4 me-2 bg-gray-700/60 p-2 text-white"
              :class="idx === curColCount && '!bg-black'"
              @click="curColCount = idx"
            >
              {{ idx }}
            </button>
          </template>

          {{ gridColsClass[curColCount] }}

          <div class="grid gap-3" :class="gridColsClass[curColCount]">
            <template v-for="idx in 8" :key="`grid-cols-${idx}`">
              <div class="box">{{ idx }}</div>
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
