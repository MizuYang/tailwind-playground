<script setup>
const flexBtn = ref([
  "flex-row",
  "flex-row-reverse",
  "flex-col",
  "flex-col-reverse",
]);
const flexDirectionClassName = ref(flexBtn.value[0]);
</script>

<template>
  <div>
    <SectionContent title="Flex">
      <template #content>
        <!-- flex-basis -->
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">flex-basis</h3>
          <ul class="flex gap-3">
            <li class="box basis-auto">basis-auto</li>
            <li class="box basis-[17.1234%]">basis-[17.1234%]</li>
            <li class="box shrink-0 basis-32">shrink-0 basis-20 (128px)</li>
            <li class="box basis-1/2">basis-1/2</li>
          </ul>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">flex 彈性方向：{{ flexDirectionClassName }}</h3>

          <!-- flex 方向按鈕 -->
          <template v-for="btnDirectionName in flexBtn" :key="btnDirectionName">
            <button
              type="button"
              class="mb-5 me-2 inline-block bg-gray-300 p-1"
              @click="flexDirectionClassName = btnDirectionName"
            >
              {{ btnDirectionName }}
            </button>
          </template>

          <ul class="flex gap-3" :class="flexDirectionClassName">
            <template v-for="i in 5">
              <li class="box">{{ i }}</li>
            </template>
          </ul>
        </div>
      </template>
    </SectionContent>

    <!-- <SectionContent title="Grid">
      <template #content>
        <h3 class="text-red-700 mb-3">
          *:w-30 grid grid-cols-3 gap-6 *:h-10 *:bg-sky-300
        </h3>
        <ul class="*:w-30 grid grid-cols-3 gap-6 *:h-10 *:bg-sky-300">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </template>
    </SectionContent> -->
  </div>
</template>

<style lang="scss" scoped>
@tailwind components;

@layer components {
  .box {
    @apply inline-block h-10 w-10 bg-sky-300;
  }
}
</style>
