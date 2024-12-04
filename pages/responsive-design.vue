<script setup>
definePageMeta({
  title: "響應式設計",
});
</script>

<template>
  <div>
    <PageTitle
      title="響應式設計"
      link="https://tailwind.nodejs.cn/docs/responsive-design#-2"
    />

    <main class="pb-10">
      <SectionContent title="min-width">
        <template #content>
          <div class="rounded ring-2 ring-sky-700 md:flex">
            <div>
              <img
                src="https://picsum.photos/500/300"
                class="block h-36 w-full md:h-full"
              />
            </div>
            <div class="flex flex-col justify-center p-5">
              <h2 class="mb-2">測試標題</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat ipsa dicta facere aliquid amet quibusdam voluptatibus,
                facilis id veritatis soluta ex fuga eaque? Illum praesentium
                ullam vero similique consequuntur hic.
              </p>
            </div>
          </div>
        </template>
      </SectionContent>

      <SectionContent title="max-width">
        <template #content>
          <div class="flex rounded ring-2 ring-sky-700 max-md:flex-col">
            <div>
              <img
                src="https://picsum.photos/500/300"
                class="block h-full w-full max-md:h-36"
              />
            </div>
            <div class="flex flex-col justify-center p-5">
              <h2 class="mb-2">測試標題</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat ipsa dicta facere aliquid amet quibusdam voluptatibus,
                facilis id veritatis soluta ex fuga eaque? Illum praesentium
                ullam vero similique consequuntur hic.
              </p>
            </div>
          </div>
        </template>
      </SectionContent>

      <SectionContent title="min-width and max-width">
        <template #content>
          <div
            class="flex rounded bg-sky-300 ring-2 ring-sky-700 max-md:flex-col sm:max-md:bg-sky-400 md:max-lg:bg-sky-500 lg:max-xl:bg-sky-600 xl:max-2xl:bg-sky-700 2xl:bg-sky-800"
          >
            <div>
              <img
                src="https://picsum.photos/500/300"
                class="block h-full w-full max-md:h-36"
              />
            </div>
            <div class="flex flex-col justify-center p-5">
              <h2 class="mb-2">測試標題</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat ipsa dicta facere aliquid amet quibusdam voluptatibus,
                facilis id veritatis soluta ex fuga eaque? Illum praesentium
                ullam vero similique consequuntur hic.
              </p>
            </div>
          </div>
        </template>
      </SectionContent>

      <SectionContent title="自訂斷點">
        <template #content>
          <div
            class="ipadLandscape:bg-violet-300 ipadPortrait:bg-violet-400 flex rounded bg-violet-200"
          >
            <div>
              <img
                src="https://picsum.photos/500/300"
                class="block h-36 w-36 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center p-5">
              <h2 class="mb-2">控制瀏覽器大小後, 觀察背景顏色的變化</h2>
              <p>
                <!-- iPad 橫式 -->
                'ipadPortrait': '1024px' <br />
                <!-- iPad 直式 -->
                'ipadLandscape': '768px' <br />
              </p>
            </div>
          </div>
        </template>
      </SectionContent>

      <SectionContent title="斷點任意值">
        <template #content>
          <div
            class="flex rounded min-[300px]:bg-sky-300 min-[400px]:bg-violet-300 min-[500px]:bg-green-300 min-[600px]:bg-red-300 min-[700px]:bg-orange-300 min-[800px]:bg-yellow-300 min-[900px]:bg-lime-300 min-[1000px]:bg-teal-300 min-[1100px]:bg-rose-300"
          >
            <div>
              <img
                src="https://picsum.photos/500/300"
                class="block h-36 w-36 object-cover"
              />
            </div>
            <div class="flex flex-col justify-center p-5">
              <h2 class="mb-2">控制瀏覽器大小後, 觀察背景顏色的變化</h2>
              <p>300-1100 間每100px 都會有不同的背景顏色</p>
            </div>
          </div>
        </template>
      </SectionContent>
    </main>
  </div>
</template>

<style lang="scss" scope></style>
