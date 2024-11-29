<script setup>
const menuList = ref([
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
]);
</script>

<template>
  <nav class="sticky top-0 w-full bg-sky-200 px-10">
    <ul class="flex items-center">
      <template v-for="menu in menuList" :key="menu.name">
        <li class="py-3 pe-5 text-xl text-slate-500 first:pe-10">
          <NuxtLink :to="menu.path" active-class="active">
            {{ menu.title }}
          </NuxtLink>
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

<style lang="scss" scope>
.active {
  color: #475569;
  font-weight: 700;
}
</style>
