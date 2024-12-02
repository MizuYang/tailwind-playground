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
      <SectionContent title="響應式卡片">
        <template #content>
          <div
            class="w-1/2 items-center rounded-xl ring-1 ring-violet-600 lg:flex lg:rounded-l-xl"
          >
            <div
              class="overflow-hidden rounded-t-xl object-cover lg:shrink-0 lg:rounded-none lg:rounded-l-xl"
            >
              <img
                src="http://placehold.it/100x100/000/fff/?text=xDDDD"
                class="block h-full w-full object-cover lg:h-auto lg:w-auto"
              />
            </div>
            <div class="lg:shrink-0">
              <div class="w-1/2 px-5 py-3">
                <h2>標題</h2>
                <p class="overflow-wrap break-words">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                  quae commodi repellat, minima maxime labore qui, optio,
                </p>
              </div>
            </div>
          </div>
        </template>
      </SectionContent>
    </main>
  </div>
</template>

<style lang="scss" scope></style>
