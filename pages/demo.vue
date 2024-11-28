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

      <SectionContent title="聚焦效果(focus)">
        <template #content>
          <input
            type="text"
            class="border-grey-700 rounded-md border-2 px-2 text-2xl focus:text-sky-700 focus:outline-violet-500"
            value="ewgwrgaer"
          />
        </template>
      </SectionContent>

      <SectionContent title="懸停、聚焦、激活 (hover, focus, active)">
        <template #content>
          <button
            type="button"
            class="rounded-full bg-violet-600 px-3 py-2 text-white hover:bg-violet-600/90 focus:outline-none focus:ring focus:ring-violet-600/60 active:bg-violet-600/85"
          >
            嘗試與我互動
          </button>
        </template>
      </SectionContent>
    </main>
  </div>
</template>

<style lang="scss" scope></style>
