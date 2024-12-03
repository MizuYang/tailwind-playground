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
          <div class="md:flex ring-2 ring-sky-700 rounded">
            <div><img src='https://picsum.photos/500/300' class="block w-full h-36 md:h-full"></div>
            <div class="flex justify-center flex-col p-5">
              <h2 class="mb-2">測試標題</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsa dicta facere aliquid amet quibusdam voluptatibus, facilis id veritatis soluta ex fuga eaque? Illum praesentium ullam vero similique consequuntur hic.</p>
            </div>
          </div>
        </template>
      </SectionContent>
    </main>
  </div>
</template>

<style lang="scss" scope></style>
