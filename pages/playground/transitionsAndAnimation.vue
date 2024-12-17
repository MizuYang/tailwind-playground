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
            class="size-10 bg-red-400 hover:opacity-70 transition-opacity"
          ></div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scope></style>
