import { defineStore } from "pinia";

export const useMenuStore = defineStore("useMenuStore", () => {
  // const playgroundLastPath = computed(() => {
  //   if (process.server) return "flex";
  //   return JSON.parse(localStorage?.getItem("playgroundLastPath")) || "flex";
  // });

  const playgroundLastPath = ref("");

  if (import.meta.client) {
    playgroundLastPath.value =
      JSON.parse(localStorage?.getItem("playgroundLastPath")) || "flex";
  }

  function setLastPath(path) {
    playgroundLastPath.value = path;
    if (import.meta.client) {
      localStorage.setItem("playgroundLastPath", JSON.stringify(path));
    }
  }

  return {
    playgroundLastPath,
    setLastPath,
  };
});
