<script setup></script>

<template>
  <div>
    <SectionContent title="Effects">
      <template #content>
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">blur 模糊</h3>

          <div class="flex gap-x-8">
            <img src='https://picsum.photos/100/100' class="blur-sm" />
            <img src='https://picsum.photos/100/100' class="blur-md" />
            <img src='https://picsum.photos/100/100' class="blur-lg" />
            <img src='https://picsum.photos/100/100' class="blur-xl" />
          </div>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">brightness-* 亮度</h3>

          <div class="flex gap-x-8">
            <img src='https://picsum.photos/100/100' class="brightness-50" />
            <img src='https://picsum.photos/100/100' class="brightness-100" />
            <img src='https://picsum.photos/100/100' class="brightness-125" />
            <img src='https://picsum.photos/100/100' class="brightness-150" />
          </div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped></style>
