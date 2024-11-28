<script setup></script>

<template>
  <div>
    <PageTitle
      title="官方核心概念示範"
      link="https://tailwind.nodejs.cn/docs/hover-focus-and-other-states"
    />

    <main>
      <SectionContent title="滑鼠懸停效果(hvoer)">
        <template #content>
          <button
            type="button"
            class="rounded-lg bg-violet-500 px-4 py-3 text-white hover:bg-violet-500/90"
          >
            懸停到我上面
          </button>
        </template>
      </SectionContent>
    </main>
  </div>
</template>

<style lang="scss" scope></style>
