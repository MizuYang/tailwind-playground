<script setup></script>

<template>
  <div>
    <SectionContent title="Flex">
      <template #content>
        <div>
          <h3 class="text-red-700 mb-3">flex-basis</h3>
          <ul class="flex gap-3">
            <li class="box basis-auto">basis-auto</li>
            <li class="box basis-[17.1234%]">basis-[17.1234%]</li>
            <li class="box shrink-0 basis-32">shrink-0 basis-20 (128px)</li>
            <li class="box basis-1/2">basis-1/2</li>
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
    @apply bg-sky-300 w-10 h-10 inline-block;
  }
}
</style>
