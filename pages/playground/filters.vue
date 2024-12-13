<script setup></script>

<template>
  <div>
    <SectionContent title="Filters">
      <template #content>
        <div class="flex flex-wrap">
          <div>
            <div class="mb-3">
              <h3 class="mb-3 text-red-700">blur 模糊</h3>
              <div class="flex gap-x-8">
                <img
                  src="https://picsum.photos/100/100"
                  class="blur-sm"
                  title="blur-sm"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="blur-md"
                  title="blur-md"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="blur-lg"
                  title="blur-lg"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="blur-xl"
                  title="blur-xl"
                />
              </div>
            </div>
            <div class="mb-3">
              <h3 class="mb-3 text-red-700">brightness-* 亮度</h3>
              <div class="flex gap-x-8">
                <img
                  src="https://picsum.photos/100/100"
                  class="brightness-50"
                  title="brightness-50"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="brightness-100"
                  title="brightness-100"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="brightness-125"
                  title="brightness-125"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="brightness-150"
                  title="brightness-150"
                />
              </div>
            </div>
            <div class="mb-3">
              <h3 class="mb-3 text-red-700">contrast-* 對比</h3>
              <div class="flex gap-x-8">
                <img
                  src="https://picsum.photos/100/100"
                  class="contrast-50"
                  title="contrast-50"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="contrast-100"
                  title="contrast-100"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="contrast-125"
                  title="contrast-125"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="contrast-150"
                  title="contrast-150"
                />
              </div>
            </div>
            <div class="mb-3">
              <h3 class="mb-3 text-red-700">hue-rotate-* 色調旋轉</h3>
              <div class="flex gap-x-8">
                <img
                  src="https://picsum.photos/100/100"
                  class="hue-rotate-15"
                  title="hue-rotate-15"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="hue-rotate-30"
                  title="hue-rotate-30"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="hue-rotate-60"
                  title="hue-rotate-60"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="hue-rotate-90"
                  title="hue-rotate-90"
                />
              </div>
            </div>
            <div class="mb-3">
              <h3 class="mb-3 text-red-700">saturate-* 飽和度</h3>
              <div class="flex gap-x-8">
                <img
                  src="https://picsum.photos/100/100"
                  class="saturate-50"
                  title="saturate-50"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="saturate-100"
                  title="saturate-100"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="saturate-150"
                  title="saturate-150"
                />
                <img
                  src="https://picsum.photos/100/100"
                  class="saturate-200"
                  title="saturate-200"
                />
              </div>
            </div>
          </div>
          <div class="ms-8">
            <div class="mb-3">
              <h3 class="mb-3 text-red-700">backdrop-blur-* 背景模糊</h3>
              <div class="flex gap-x-8">
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-blur-[2px]"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-blur-[2px]"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-blur-sm"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-blur-sm"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-blur"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-blur"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-blur-md"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-blur-md"
                  ></span>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h3 class="mb-3 text-red-700">backdrop-brightness-* 背景亮度</h3>
              <div class="flex gap-x-8">
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-brightness-50"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-brightness-50"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-brightness-125"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-brightness-125"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-brightness-200"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-brightness-200"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-brightness-[2.5]"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-brightness-[2.5]"
                  ></span>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h3 class="mb-3 text-red-700">backdrop-contrast-* 背景對比</h3>
              <div class="flex gap-x-8">
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-contrast-50"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-contrast-50"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-contrast-125"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-contrast-125"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-contrast-200"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-contrast-200"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-contrast-[2.5]"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-contrast-[2.5]"
                  ></span>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h3 class="mb-3 text-red-700">backdrop-saturate-* 背景飽和</h3>
              <div class="flex gap-x-8">
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-saturate-50"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-saturate-50"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-saturate-125"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="backdrop-saturate-125 absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-saturate-200"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-saturate-200"
                  ></span>
                </div>
                <div
                  class="bg-img relative size-[100px] bg-cover bg-no-repeat"
                  title="backdrop-saturate-[2.5]"
                  style="
                    background-image: url(&quot;https://picsum.photos/100/100&quot;);
                  "
                >
                  <span
                    class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent backdrop-saturate-[2.5]"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped></style>
