import { defineStore } from "pinia";

export const useMenuStore = defineStore("useMenuStore", () => {
  const playgroundLastPath = ref("");

  function getLastPath() {
    if (import.meta.client) {
      playgroundLastPath.value =
        JSON.parse(localStorage?.getItem("playgroundLastPath")) || "flex";
    }
  }
  function setLastPath(path) {
    if (import.meta.client) {
      playgroundLastPath.value = path;
      localStorage.setItem("playgroundLastPath", JSON.stringify(path));
    }
  }

  return {
    playgroundLastPath,
    getLastPath,
    setLastPath,
  };
});
