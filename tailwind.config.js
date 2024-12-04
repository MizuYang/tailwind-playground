/** @type {import('tailwindcss').Config} */
export default {
  // prefix: 'tw-', // 將所有樣式設定的 class 前綴為 tw-

  // 在 html 標籤上加上 .dark 就會啟用暗色模式
  darkMode: "selector",
  // 在 html 標籤上加上 data-mode="dark" 就會啟用暗色模式
  // darkMode: ["selector", '[data-mode="dark"]'],

  /**
   * https://www.tailwindcss.cn/docs/content-configuration#configuring-source-paths
   */
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx,html}",
    "./components/**/*.{vue,js,ts,jsx,tsx,html}",
  ],

  // important: true, // 將所有樣式設定為 !important

  theme: {
    extend: {
      screens: {
        // 自訂斷點(擴充新的斷點)
        // iPad 橫式
        ipadPortrait: "1024px",
        // iPad 直式
        ipadLandscape: "768px",
      },

      // 自訂顏色
      colors: {
        "happy": "orange",
        "unhappy": "grey",
      },

      spacing : {
        "mizu-spacing": '87px'
      }
    },

    // 自訂斷點(會覆蓋掉預設的斷點)
    // screens: {
    // 'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    // 'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    // 'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }

    // iPad 橫式
    // 'ipadPortrait': '1024px',
    // iPad 直式
    // 'ipadLandscape': '768px'
    // },
  },
  plugins: [],
};
