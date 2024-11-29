<script setup></script>

<template>
  <div>
    <PageTitle
      title="官方核心概念示範"
      link="https://tailwind.nodejs.cn/docs/hover-focus-and-other-states"
    />

    <main class="pb-10">
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

      <SectionContent title="group 父層指定子元素吃到樣式">
        <template #content>
          <div class="iten-center flex">
            <a
              href="javascript:;"
              class="group bg-violet-400 px-2 py-3 text-lg text-white"
            >
              hover 後子元素文字變大
              <span class="h-30 w-30 block bg-sky-300 group-hover:text-3xl"
                >子元素</span
              >
            </a>
          </div>
        </template>
      </SectionContent>

      <SectionContent title="group/name 父層指定特定子元素吃到樣式">
        <template #content>
          <div class="iten-center flex">
            <div class="group/a me-10">
              <a
                href="javascript:;"
                class="block bg-emerald-800 px-2 py-3 text-lg text-white"
              >
                hover 後子元素背景色改變
                <span
                  class="block h-10 w-20 bg-sky-300 group-hover/a:bg-slate-500"
                  >子元素</span
                >
              </a>
            </div>
            <div class="group/b me-10">
              <a
                href="javascript:;"
                class="block bg-emerald-800 px-2 py-3 text-lg text-white"
              >
                hover 後子元素背景色改變
                <span
                  class="block h-10 w-20 bg-sky-300 group-hover/b:bg-green-500"
                  >子元素</span
                >
              </a>
            </div>

            <div class="group/list">
              <h3>hover 我，只有指定的子元素吃的到樣式</h3>
              <ul>
                <li>1</li>
                <li>2</li>
                <li class="group-hover/list:bg-sky-600">3</li>
                <li>4</li>
              </ul>
            </div>
          </div>
        </template>
      </SectionContent>

      <SectionContent title="peer 兄弟層吃到樣式">
        <template #content>
          <div class="flex items-center text-lg">
            <span class="peer">hover</span>
            <span class="peer-hover:text-sky-700">我會吃到樣式</span>
          </div>
        </template>
      </SectionContent>

      <SectionContent title="peer/name 兄弟層吃到樣式">
        <template #content>
          <div class="flex items-center text-lg">
            <span class="peer/red me-5">顯示紅色</span>
            <span class="peer/blue me-5">顯示藍色</span>

            <span class="hidden h-5 w-5 bg-red-300 peer-hover/red:block"></span>
            <span
              class="hidden h-5 w-5 bg-blue-300 peer-hover/blue:block"
            ></span>
          </div>
        </template>
      </SectionContent>

      <SectionContent title="has">
        <template #content>
          <div class="text-lg0 flex items-center">
            <label for="紅色" class="me-5 p-2 has-[:checked]:bg-red-300">
              紅色
              <input
                type="radio"
                name="select-color"
                id="紅色"
                value="紅色"
                checked
              />
            </label>
            <label for="藍色" class="p-2 has-[:checked]:bg-blue-300">
              藍色
              <input type="radio" name="select-color" id="藍色" value="藍色" />
            </label>

            <div
              class="ms-5 flex items-center text-sky-600 has-[:user-invalid]:text-red-600 has-[:valid]:text-green-600"
            >
              <label for="input-text-change-color">
                請在輸入框輸入文字
                <input
                  type="text"
                  class="border-2 border-gray-500"
                  id="input-text-change-color"
                  placeholder="請輸入文字"
                  required
                />
              </label>
            </div>
          </div>
        </template>
      </SectionContent>
    </main>
  </div>
</template>

<style lang="scss" scope></style>
