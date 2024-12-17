<script setup></script>

<template>
  <div>
    <SectionContent title="Transition & Animation">
      <template #content>
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">transition-colors</h3>
          <div
            class="size-10 bg-red-400 transition-colors hover:bg-sky-400"
          ></div>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">transition-colors</h3>
          <div
            class="size-10 bg-red-400 transition-opacity hover:opacity-70"
          ></div>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">transition-shadow</h3>
          <div
            class="size-10 bg-red-400 shadow-md shadow-violet-600 transition-shadow hover:shadow-xl hover:shadow-sky-600"
          ></div>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">transition-transform</h3>
          <div
            class="size-10 bg-red-400 shadow-md transition-transform hover:translate-x-5"
          ></div>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">transition-all</h3>
          <div
            class="size-10 bg-red-400 transition-all hover:translate-x-5 hover:rotate-45 hover:rounded-lg hover:bg-violet-500 hover:opacity-70 hover:shadow-xl hover:shadow-yellow-700"
          ></div>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">duration-*</h3>
          <div
            class="size-10 bg-red-400 transition-all duration-700 hover:translate-x-5 hover:rotate-45 hover:rounded-lg hover:bg-violet-500 hover:opacity-70 hover:shadow-xl hover:shadow-yellow-700"
          ></div>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">delay-*</h3>
          <div
            class="size-10 bg-red-400 transition-all delay-300 duration-700 hover:translate-x-5 hover:rotate-45 hover:rounded-lg hover:bg-violet-500 hover:opacity-70 hover:shadow-xl hover:shadow-yellow-700"
          ></div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scope></style>
