<script setup>
definePageMeta({
  title: "客製化自訂樣式",
});

const curStyleType = ref("a");
const dynamicStyle = ref({
  a: "bg-orange-300 rounded-sm p-5",
  b: "bg-lime-300 rounded-lg rotated-sm p-5",
});
</script>

<template>
  <div>
    <PageTitle
      title="客製化自訂樣式"
      link="https://tailwind.nodejs.cn/docs/adding-custom-styles"
    />

    <SectionContent title="自訂顏色">
      <template #content>
        <div class="flex">
          <p class="text-happy">我很高興</p>
          <p class="text-unhappy">我不高興</p>
        </div>
      </template>
    </SectionContent>

    <SectionContent title="自訂間距">
      <template #content>
        <div class="flex">
          <p class="mr-mizu-spacing bg-sky-300 p-5"></p>
          <p class="bg-red-300 p-5"></p>
        </div>
      </template>
    </SectionContent>

    <SectionContent title="! 加上 !important 權重">
      <template #content>
        <div class="flex">
          <div class="p-2 !text-sky-400 hover:!bg-violet-100">
            Lorem ipsum, dolor sit
          </div>
        </div>
      </template>
    </SectionContent>

    <SectionContent title="動態改變類名">
      <template #content>
        <div class="mb-5">
          <button
            type="button"
            class="me-3 p-3 ring-2 ring-orange-300 transition-all hover:rounded-full hover:bg-orange-300 hover:text-orange-900"
            @click="curStyleType = 'a'"
          >
            樣式A
          </button>
          <button
            type="button"
            class="p-3 ring-2 ring-lime-300 transition-all hover:rounded-full hover:bg-lime-300 hover:text-lime-900"
            @click="curStyleType = 'b'"
          >
            樣式B
          </button>
        </div>
        <div :class="dynamicStyle[curStyleType]"></div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scope></style>
