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
          <input
            type="radio"
            class="size-5 accent-violet-700 hover:accent-pink-700/50"
            checked
          />
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">caret-* 光標顏色</h3>

          <input
            type="text"
            class="px-3 py-2 text-4xl bg-gray-300 focus:caret-pink-500 ring-4  ring-sky-700 focus:outline-none"
          />
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">resize overflow-auto 使元素可拖曳控制寬高</h3>

          <div class="bg-sky-100 ring-1 ring-sky-300 w-24 h-10 resize overflow-auto" contenteditable></div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped></style>
