export default defineNuxtPlugin((nuxtApp) => {
  const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis cumque minus deleniti enim, harum, sed non cum est sapiente laudantium quod repellat similique beatae dolores animi quidem quasi ad!";

  return {
    provide: {
      getLoremText: (count = 1) => new Array(count).fill(lorem).join(" ")
    },
  };
});
