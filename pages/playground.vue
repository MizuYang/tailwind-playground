<script setup>
definePageMeta({
  middleware: (to, from) => {
    if (import.meta.client) {
      const { setLastPath } = useMenuStore();
      const pagePath = to.fullPath.split("/").at(-1);
      setLastPath(pagePath);
      localStorage?.setItem("playgroundLastPath", JSON.stringify(pagePath));
    }
  },
});
const playgroundPagesName = ref([
  {
    path: "flex",
    linkName: "Flex",
  },
  {
    path: "grid",
    linkName: "Grid",
  },
  {
    path: "typography",
    linkName: "排版",
  },
  {
    path: "backgrounds",
    linkName: "Backgrounds",
  },
  {
    path: "effects",
    linkName: "效果",
  },
  {
    path: "filters",
    linkName: "濾鏡",
  },
  {
    path: "table",
    linkName: "表格",
  },
  {
    path: "transitionsAndAnimation",
    linkName: "轉場、動畫",
  },
]);
</script>

<template>
  <div>
    <PageTitle title="對 Tailwind 語法進行練習" class="!mb-7" />

    <nav class="mb-5">
      <ul class="flex flex-wrap">
        <template v-for="link in playgroundPagesName" :key="link">
          <li class="me-3">
            <nuxt-link
              :to="`/playground/${link.path}`"
              class="bg-violet-200 px-2 py-1 text-violet-700 transition-all hover:bg-violet-300 active:bg-violet-400/80"
              active-class="bg-violet-500 text-white hover:bg-violet-500/90 active:bg-violet-500/80"
            >
              {{ link.linkName }}
            </nuxt-link>
          </li>
        </template>
      </ul>
    </nav>

    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped></style>
