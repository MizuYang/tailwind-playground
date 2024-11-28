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

      <SectionContent title="first, last, odd, even">
        <template #content>
          <ul class="flex *:m-5 *:mt-0 *:p-3">
            <li class="first:bg-sky-400">1</li>
            <li class="odd:bg-red-200 even:bg-slate-200">2</li>
            <li class="odd:bg-red-200 even:bg-slate-200">3</li>
            <li class="odd:bg-red-200 even:bg-slate-200">4</li>
            <li class="odd:bg-red-200 even:bg-slate-200">5</li>
            <li class="odd:bg-red-200 even:bg-slate-200">6</li>
            <li class="odd:bg-red-200 even:bg-slate-200">7</li>
            <li class="odd:bg-red-200 even:bg-slate-200">8</li>
            <li class="odd:bg-red-200 even:bg-slate-200">9</li>
            <li class="last:bg-red-400">10</li>
          </ul>
        </template>
      </SectionContent>

      <SectionContent title="嘗試在輸入框輸入文字(valid, invalid)">
        <template #content>
          <input
            type="text"
            class="rounded-lg border-gray-300 bg-green-200 px-2 text-2xl ring-4 valid:ring-green-300 invalid:bg-red-200 invalid:ring-red-300 focus:outline-0"
            placeholder="請輸入文字"
            required
          />
        </template>
      </SectionContent>
    </main>
  </div>
</template>

<style lang="scss" scope></style>
