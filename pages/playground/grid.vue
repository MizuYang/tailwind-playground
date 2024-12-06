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

// col-start-*, col-end-*
const colStartCount = ref(3);
const colEndCount = ref(6);
const colStartClass = ref({
  0: "!col-start-0",
  1: "!col-start-1",
  2: "!col-start-2",
  3: "!col-start-3",
  4: "!col-start-4",
  5: "!col-start-5",
  6: "!col-start-6",
  7: "!col-start-7",
  8: "!col-start-8",
  9: "!col-start-9",
  10: "!col-start-10",
  11: "!col-start-11",
  12: "!col-start-12",
});
// 正確 ✅  直接將 Tailwind class 定義在物件或陣列中，在用物件取值的方式去讀取它
const colEndClass = ref({
  0: "!col-end-0",
  1: "!col-end-1",
  2: "!col-end-2",
  3: "!col-end-3",
  4: "!col-end-4",
  5: "!col-end-5",
  6: "!col-end-6",
  7: "!col-end-7",
  8: "!col-end-8",
  9: "!col-end-9",
  10: "!col-end-10",
  11: "!col-end-11",
  12: "!col-end-12",
});
// 錯誤 ❌  不能用迴圈來寫入 Tailwind class
// for (let i = 0; i < 12; i++) {
//   colStartClass.value[i] = `col-start-${i}`;
//   colEndClass.value[i] = `col-end-${i}`;
// }
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

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">grid-start-* | grid-end-*</h3>

          <div class="mb-3 flex items-center">
            <p>grid-start：</p>
            <input
              type="number"
              class="me-10 w-12 text-center ring-1 ring-gray-500 focus:outline-none"
              v-model.number.trim="colStartCount"
              min="0"
              max="12"
            />
            <p>grid-end：</p>
            <input
              type="number"
              class="me-5 w-12 text-center ring-1 ring-gray-500 focus:outline-none"
              v-model.number.trim="colEndCount"
              min="0"
              max="12"
            />
            {{ `${colStartClass[colStartCount]} ${colEndClass[colEndCount]}` }}
          </div>

          <ul class="grid grid-cols-10 gap-3">
            <template v-for="col in 13" :key="`col-start-end-${col}`">
              <li
                class="box"
                :class="
                  col === 13 &&
                  `${colStartClass[colStartCount]} ${colEndClass[colEndCount]} !bg-violet-400`
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
