<script setup>
definePageMeta({
  title: "Flex",
});
const flexBtn = ref([
  "flex-row",
  "flex-row-reverse",
  "flex-col",
  "flex-col-reverse",
]);
const flexDirectionClassName = ref(flexBtn.value[0]);

const flexWrapBtn = ref(["flex-wrap", "flex-wrap-reverse", "flex-nowrap"]);
const flexWraoClassName = ref(flexWrapBtn.value[0]);
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

        <!-- 彈性方向 -->
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">
            flex 彈性方向：{{ flexDirectionClassName }}
          </h3>

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

        <!-- 彈性換行 -->
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">
            flex 彈性換行：{{ flexWraoClassName }}
          </h3>

          <template
            v-for="btnDirectionName in flexWrapBtn"
            :key="btnDirectionName"
          >
            <button
              type="button"
              class="mb-5 me-2 inline-block bg-gray-300 p-1"
              @click="flexWraoClassName = btnDirectionName"
            >
              {{ btnDirectionName }}
            </button>
          </template>

          <ul class="flex gap-3" :class="flexWraoClassName">
            <template v-for="i in 8">
              <li class="box !w-[350px]">{{ i }}</li>
            </template>
          </ul>
        </div>

        <!-- flex: 1; flex: auto; flex: none; -->
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">
            flex: 1; flex: auto; flex: none;
          </h3>
          <ul class="flex gap-3" :class="flexWraoClassName">
            <li class="box flex-1">flex-1</li>
            <li class="box flex-[2]">flex-[2]</li>
            <li class="box flex-[3]">flex-[3]</li>
            <li class="box flex-auto">flex-auto</li>
            <li class="box flex-none">flex-none</li>
          </ul>
        </div>
      </template>
    </SectionContent>
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
