<script setup>
definePageMeta({
  title: "排版",
});
const clampText = ref(`
  Lorem ipsum dolor sit amet <br />
  consectetur adipisicing elit. <br />
  Molestiae reiciendis possimus <br />
  esse tenetur magnam,`);

const listSideStyle = ref({
  listInside: "list-inside",
  listOutside: "list-outside",
});
const currentSideStyle = ref("listOutside");
const listSideClass = computed(
  () => listSideStyle.value[currentSideStyle.value],
);

const textWrapClassList = ref({
  "text-wrap": "text-wrap",
  "text-nowrap": "text-nowrap",
  "text-balance": "text-balance",
  "text-pretty": "text-pretty",
});
const curWrapClass = ref("text-wrap");
</script>

<template>
  <div>
    <SectionContent title="Typography">
      <template #content>
        <!-- font-family -->
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">font-family</h3>
          <ul>
            <li class="mb-3">
              <h3 class="text-lg">font-sans</h3>
              <p class="font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae reiciendis possimus esse tenetur magnam, dolore
                blanditiis incidunt nemo aut tempore sequi molestias ad
                voluptatibus est nesciunt quis odit, autem distinctio.
              </p>
            </li>
            <li class="mb-3">
              <h3 class="text-lg">font-serif</h3>
              <p class="font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae reiciendis possimus esse tenetur magnam, dolore
                blanditiis incidunt nemo aut tempore sequi molestias ad
                voluptatibus est nesciunt quis odit, autem distinctio.
              </p>
            </li>
            <li class="mb-3">
              <h3 class="text-lg">font-mono</h3>
              <p class="font-mono">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae reiciendis possimus esse tenetur magnam, dolore
                blanditiis incidunt nemo aut tempore sequi molestias ad
                voluptatibus est nesciunt quis odit, autem distinctio.
              </p>
            </li>
          </ul>
        </div>

        <!-- ul 裝飾系列 -->
        <div class="mb-3">
          <!-- line-clamp -->
          <div class="mb-3">
            <h3 class="mb-3 text-red-700">line-clamp</h3>
            <ul>
              <li class="mb-3">
                <h3 class="text-lg">line-clamp-1</h3>
                <p class="line-clamp-1" v-html="clampText"></p>
              </li>
              <li class="mb-3">
                <h3 class="text-lg">line-clamp-2</h3>
                <p class="line-clamp-2" v-html="clampText"></p>
              </li>
              <li class="mb-3">
                <h3 class="text-lg">line-clamp-3</h3>
                <p class="line-clamp-3" v-html="clampText"></p>
              </li>
            </ul>
          </div>
          <!-- list-inside | list-outside -->
          <div class="mb-3">
            <h3 class="mb-3 text-red-700">list-inside</h3>
            <ul class="mb-3 list-inside list-disc">
              <li>
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Et maxime architecto tempore saepe eaque eius,
                sint ullam eveniet
              </li>
            </ul>
            <h3 class="mb-3 text-red-700">list-outside</h3>
            <ul class="list-outside list-disc">
              <li>
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Et maxime architecto tempore saepe eaque eius,
                sint ullam eveniet
              </li>
            </ul>
          </div>
          <div class="border-y-2 border-sky-300 py-4">
            <div class="mb-2">
              <button
                type="button"
                class="bg-purple-500 p-1"
                @click="currentSideStyle = 'listOutside'"
              >
                outside
              </button>
              <button
                type="button"
                class="bg-violet-300 p-1"
                @click="currentSideStyle = 'listInside'"
              >
                inside
              </button>
              =>
              {{ listSideClass }}
            </div>

            <!-- list-disc | list-decimal | list-[upper-roman] | list-[lower-roman] -->
            <div class="mb-3">
              <h3 class="mb-3 text-red-700">list-disc</h3>
              <ul class="list-disc" :class="listSideClass">
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
              </ul>
              <br />
              <h3 class="mb-3 text-red-700">list-decimal</h3>
              <ul class="list-decimal" :class="listSideClass">
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
              </ul>
              <br />
              <h3 class="mb-3 text-red-700">
                list-[upper-roman] - 大寫羅馬數字
              </h3>
              <ul class="list-[upper-roman]" :class="listSideClass">
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
              </ul>
              <br />
              <h3 class="mb-3 text-red-700">
                list-[lower-roman] - 小寫羅馬數字
              </h3>
              <ul class="list-[lower-roman]" :class="listSideClass">
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 文字裝飾系列 -->
        <div class="mb-3">
          <div class="mb-3">
            <h3 class="mb-3 text-red-700">
              overline | line-through | underline
            </h3>
            <p>
              overline：
              <span class="overline"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
              >
            </p>
            <p>
              line-through：
              <span class="line-through"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
              >
            </p>
            <p>
              underline：
              <span class="underline"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
              >
            </p>
          </div>

          <div class="mb-3">
            <h3 class="mb-3 text-red-700">decoration-* 裝飾顏色</h3>
            <p>
              overline decoration-yellow-400：
              <span class="overline decoration-yellow-400"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
              >
            </p>
            <p>
              line-through decoration-green-400：
              <span class="line-through decoration-green-400"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
              >
            </p>
            <p>
              underline decoration-red-400：
              <span class="underline decoration-red-400"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
              >
            </p>
          </div>

          <div class="mb-3">
            <h3 class="mb-3 text-red-700">decoration-* 裝飾樣式</h3>
            <p class="mb-1">
              underline decoration-solid：
              <span class="underline decoration-solid"
                >The quick brown fox...</span
              >
            </p>
            <p class="mb-1">
              underline decoration-double：
              <span class="underline decoration-double"
                >The quick brown fox...</span
              >
            </p>
            <p class="mb-1">
              underline decoration-dotted：
              <span class="underline decoration-dotted"
                >The quick brown fox...</span
              >
            </p>
            <p class="mb-1">
              underline decoration-dashed：
              <span class="underline decoration-dashed"
                >The quick brown fox...</span
              >
            </p>
            <p class="mb-1">
              underline decoration-wavy：
              <span class="underline decoration-wavy"
                >The quick brown fox...</span
              >
            </p>
          </div>
        </div>

        <!-- 文字溢出 -->
        <div class="mb-3">
          <div class="mb-3">
            <h3 class="mb-3 text-red-700">truncate 文字截短</h3>
            <p class="max-w-40 truncate">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            </p>
          </div>
        </div>

        <!-- 文字溢出 -->
        <div class="mb-3">
          <div class="mb-3">
            <h3 class="mb-3 text-red-700">truncate 文字換行</h3>

            <div class="mb-3">
              <template
                v-for="className in textWrapClassList"
                :key="`text-wrap-${className}`"
              >
                <button
                  type="button"
                  class="me-3 bg-violet-200 p-1"
                  :class="className === curWrapClass && 'bg-violet-400'"
                  @click="curWrapClass = className"
                >
                  {{ className }}
                </button>
              </template>
              =>
              {{ textWrapClassList[curWrapClass] }}
            </div>

            <p
              class="max-w-40 overflow-auto"
              :class="textWrapClassList[curWrapClass]"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            </p>
          </div>
        </div>

        <!-- 偽元素 content -->
        <div class="mb-3">
          <div class="mb-3">
            <h3 class="mb-3 text-red-700">偽元素 content</h3>
            <div
              data-before="be"
              data-after="af"
              class="before:content-[attr(data-before)] after:content-[attr(data-after)]"
            >
              文本內容
            </div>
          </div>

          <div class="mb-3">
            <h3 class="mb-3 text-red-700">before:clear-both before:block - 使用偽元素來清除浮動</h3>
            <img src='http://placehold.it/50x50/000/fff/?text=xDDDD' class="float-left">
            <p class="before:clear-both before:block">使用偽元素來清除浮動</p>
          </div>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
