<script setup></script>

<template>
  <div>
    <SectionContent title="Effects">
      <template #content>
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">shadow</h3>

          <div
            class="my-5 size-20 bg-sky-400/20 shadow-lg shadow-sky-500/40"
          ></div>
          <a
            href="javascript:;"
            class="my-5 inline-block size-20 bg-violet-400/20 text-center leading-[80px] shadow-lg shadow-violet-500/40"
            >按鈕</a
          >
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">混入混合模式</h3>

          <div>
            <h4>mix-blend-multiply</h4>
            <div class="flex">
              <div
                class="my-3 size-20 rounded-full bg-sky-300 mix-blend-multiply"
              ></div>
              <div
                class="my-3 size-20 -translate-x-6 rounded-full bg-red-300 mix-blend-multiply"
              ></div>
            </div>
          </div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped></style>
