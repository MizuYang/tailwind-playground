<script setup></script>

<template>
  <div>
    <SectionContent title="Filters">
      <template #content>
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">blur 模糊</h3>

          <div class="flex gap-x-8">
            <img src='https://picsum.photos/100/100' class="blur-sm" title="blur-sm" />
            <img src='https://picsum.photos/100/100' class="blur-md" title="blur-md" />
            <img src='https://picsum.photos/100/100' class="blur-lg" title="blur-lg" />
            <img src='https://picsum.photos/100/100' class="blur-xl" title="blur-xl" />
          </div>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">brightness-* 亮度</h3>

          <div class="flex gap-x-8">
            <img src='https://picsum.photos/100/100' class="brightness-50" title="brightness-50" />
            <img src='https://picsum.photos/100/100' class="brightness-100" title="brightness-100" />
            <img src='https://picsum.photos/100/100' class="brightness-125" title="brightness-125" />
            <img src='https://picsum.photos/100/100' class="brightness-150" title="brightness-150" />
          </div>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">contrast-* 對比</h3>

          <div class="flex gap-x-8">
            <img src='https://picsum.photos/100/100' class="contrast-50" title="contrast-50" />
            <img src='https://picsum.photos/100/100' class="contrast-100" title="contrast-100" />
            <img src='https://picsum.photos/100/100' class="contrast-125" title="contrast-125" />
            <img src='https://picsum.photos/100/100' class="contrast-150" title="contrast-150" />
          </div>
        </div>
        
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">hue-rotate-* 色調旋轉</h3>

          <div class="flex gap-x-8">
            <img src='https://picsum.photos/100/100' class="hue-rotate-15" title="hue-rotate-15" />
            <img src='https://picsum.photos/100/100' class="hue-rotate-30" title="hue-rotate-30" />
            <img src='https://picsum.photos/100/100' class="hue-rotate-60" title="hue-rotate-60" />
            <img src='https://picsum.photos/100/100' class="hue-rotate-90" title="hue-rotate-90" />
          </div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped></style>
