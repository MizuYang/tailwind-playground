// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // 新增其他想 Auto Import 的資料夾
  "imports": {
    "dirs": ['stores'] // 資料夾名稱
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  // 共用樣式
  css: ['@/style/all.scss']
})
