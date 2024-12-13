<script setup></script>

<template>
  <div>
    <SectionContent title="Effects">
      <template #content>
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">blur</h3>

          <div class="flex gap-x-8">
            <img src='https://picsum.photos/100/100' class="blur-sm" />
            <img src='https://picsum.photos/100/100' class="blur-md" />
            <img src='https://picsum.photos/100/100' class="blur-lg" />
            <img src='https://picsum.photos/100/100' class="blur-xl" />
          </div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped></style>
