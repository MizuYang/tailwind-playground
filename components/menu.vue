<script setup>
const { getLastPath } = useMenuStore()
const { playgroundLastPath } = storeToRefs(useMenuStore());

const menuList = computed(() => [
  {
    name: "hoem",
    title: "首頁",
    path: "/",
  },
  {
    name: "demo",
    title: "官方核心概念示範",
    path: "/demo",
  },
  {
    name: "responsive-design",
    title: "響應式設計",
    path: "/responsive-design",
  },
  {
    name: "functions-and-directives",
    title: "函數和指令",
    path: "/functions-and-directives",
  },
  {
    name: "adding-custom-styles",
    title: "客製化自訂樣式",
    path: "/adding-custom-styles",
  },
  {
    name: "playground",
    title: "修練場",
    path: `/playground/${playgroundLastPath.value}`,
  },
]);

onMounted(() => {
  getLastPath()
})
</script>

<template>
  <nav class="sticky top-0 z-50 w-full bg-sky-200 px-10">
    <ul class="relative flex items-center">
      <template v-for="menu in menuList" :key="menu.name">
        <li
          class="mb-3 me-5 border-b-4 border-solid border-transparent pt-3 text-xl text-slate-500 transition-all first:me-10 hover:border-red-300"
        >
          <ClientOnly>
            <NuxtLink :to="menu.path" active-class="active">
              {{ menu.title }}
            </NuxtLink>
          </ClientOnly>
        </li>
      </template>
      <li class="ms-auto text-xl italic text-gray-500">
        <Nuxt-link
          to="https://github.com/MizuYang/tailwind-playground"
          class="group/line relative"
          target="_blank"
          external
        >
          Mizu Tailwindcss 修練場
          <span
            class="absolute bottom-[-5px] block h-1 w-10 -skew-x-12 bg-red-300 transition-all group-hover/line:w-full group-hover/line:bg-red-500"
          ></span>
        </Nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.active {
  color: #475569;
  font-weight: 700;
}
</style>
