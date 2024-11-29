export default defineNuxtRouteMiddleware((to, from) => {
  const title = `Tailwind-Playground-${to.meta.title || '神秘的頁面'}`;
  useHead({ title });
});
