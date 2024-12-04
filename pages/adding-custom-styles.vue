<script setup></script>

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
  </div>
</template>

<style lang="scss" scope></style>
