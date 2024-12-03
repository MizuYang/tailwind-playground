/** @type {import('tailwindcss').Config} */
export default {
  // 在 html 標籤上加上 .dark 就會啟用暗色模式
  darkMode: "selector", 
  // 在 html 標籤上加上 data-mode="dark" 就會啟用暗色模式
  // darkMode: ["selector", '[data-mode="dark"]'],
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // 自訂斷點(擴充新的斷點)
        // iPad 橫式
        ipadPortrait: "1024px",
        // iPad 直式
        ipadLandscape: "768px",
      },
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
