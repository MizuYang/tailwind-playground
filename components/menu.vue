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
  <nav class="mb-5">
    <ul class="flex items-center px-40">
      <template v-for="menu in menuList" :key="menu.name">
        <li class="py-3 pe-5 text-xl text-slate-500 first:pe-10">
          <NuxtLink :to="menu.path" active-class="active">
            {{ menu.title }}
          </NuxtLink>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scope>
.active {
  color: #475569;
  font-weight: 700;
}
</style>
