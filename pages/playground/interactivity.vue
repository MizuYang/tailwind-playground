<script setup></script>

<template>
  <div>
    <SectionContent title="互動">
      <template #content>
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">accent-*</h3>

          <input
            type="checkbox"
            class="me-5 size-5 accent-violet-700 hover:accent-pink-700/50"
            checked
          />
          <input type="radio" class="size-5 accent-violet-700 hover:accent-pink-700/50" checked />
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped></style>
