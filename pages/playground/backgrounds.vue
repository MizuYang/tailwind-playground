<script setup>
definePageMeta({
  title: "背景色",
});
</script>

<template>
  <div>
    <SectionContent title="Typography">
      <template #content>
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">background 語法</h3>

          <div class="mx-auto max-w-[1000px]">
            <div
              class="h-[400px] w-full bg-fixed bg-center bg-no-repeat"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80&quot;);
              "
            ></div>

            <article class="w-full bg-gray-300/50 px-16 py-10">
              <h2 class="text-5xl font-extrabold">
                <span
                  class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
                >
                  Hello world
                </span>
                <span
                  class="bg-contain bg-clip-text text-transparent"
                  style="
                    background-image: url(&quot;https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80&quot;);
                  "
                >
                  Mizu
                </span>
              </h2>
              <p
                class="relative text-lg before:absolute before:top-0 before:block before:h-3 before:w-full before:translate-y-3 before:skew-x-[130deg] before:bg-red-300/30"
              >
                {{ $getLoremText(10) }}
              </p>

              <p
                class="relative text-lg before:absolute before:top-0 before:block before:h-3 before:w-full before:translate-y-3 before:skew-x-[130deg] before:bg-red-300/30"
              >
                <span
                  style="
                    background-image: url(&quot;https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80&quot;);
                    font-size: 35px;
                    font-weight: 900;
                    color: transparent;
                    background-clip: text;
                    background-size: cover;
                    background-attachment: fixed;
                  "
                >
                  {{ $getLoremText(10) }}
                </span>
              </p>
            </article>
          </div>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">background-image: linear-gradient</h3>
          <div class="mb-3">
            <h4 class="mb-1">漸層方向 + 起始漸層顏色 + 結束漸層顏色 bg-gradient-to-tr from-sky-700 to-violet-200</h4>
            <div class="w-full h-10 bg-gradient-to-tr from-sky-700 to-violet-200"></div>
          </div>

          <div class="mb-3">
            <h4 class="mb-1">中間色 via-purple-500</h4>
            <div class="w-full h-10 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500"></div>
          </div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped></style>
