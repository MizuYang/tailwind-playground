<script setup>
definePageMeta({
  title: "Grid",
});

// grid-cols-*
const curColCount = ref(3);
const gridColsClass = ref({
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
});

// col-span-*
const gridSpanCount = ref(4);
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

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">grid-span-*</h3>

          <div class="mb-3 flex items-center">
            <p>佔用欄數：</p>
            <input
              type="number"
              class="me-5 w-12 text-center ring-1 ring-gray-500 focus:outline-none"
              v-model.number.trim="gridSpanCount"
              min="0"
              max="12"
            />
            {{ `!col-span-${gridSpanCount}` }}
          </div>

          <ul class="grid grid-cols-10 gap-3">
            <template v-for="col in 13" :key="`col-span-${col}`">
              <li
                class="box"
                :class="
                  col === 13 && `!col-span-${gridSpanCount} !bg-violet-400`
                "
              >
                {{ col }}
              </li>
            </template>
          </ul>
        </div>
      </template>
    </SectionContent>

    <!-- <div class="a">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
      <div class="box">8</div>
      <div class="box">9</div>
      <div class="box test">10</div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@tailwind components;

@layer components {
  .box {
    @apply inline-block bg-sky-300;
  }
}

// .a {
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   gap: 15px;
// }
// .test {
//   grid-column-start: 4;
//   grid-column-end: 7;
// }
</style>
