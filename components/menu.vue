<script setup>
const menuList = ref([
  {
    name: 'hoem',
    title: '首頁',
    path: '/'
  },
  {
    name: 'demo',
    title: '官方核心概念示範',
    path: '/demo'
  },
])
</script>

<template>
  <nav>
    <ul class="flex items-center px-40">
      <template v-for="menu in menuList" :key="menu.name">
        <li class="text-xl text-slate-500 first:pe-10 pe-5 py-3">
          <NuxtLink :to="menu.path" active-class="active">
            {{  menu.title  }}
          </NuxtLink>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang='scss' scope>
.active {
  color: #475569;
  font-weight: 700;
}
</style>
