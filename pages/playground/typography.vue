<script setup>
definePageMeta({
  title: "Typography",
});
const clampText = ref(`
  Lorem ipsum dolor sit amet <br />
  consectetur adipisicing elit. <br />
  Molestiae reiciendis possimus <br />
  esse tenetur magnam,`
);
</script>

<template>
  <div>
    <SectionContent title="Typography">
      <template #content>
        <!-- font-family -->
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">font-family</h3>
          <ul>
            <li class="mb-3">
              <h3 class="text-lg">font-sans</h3>
              <p class="font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae reiciendis possimus esse tenetur magnam, dolore
                blanditiis incidunt nemo aut tempore sequi molestias ad
                voluptatibus est nesciunt quis odit, autem distinctio.
              </p>
            </li>
            <li class="mb-3">
              <h3 class="text-lg">font-serif</h3>
              <p class="font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae reiciendis possimus esse tenetur magnam, dolore
                blanditiis incidunt nemo aut tempore sequi molestias ad
                voluptatibus est nesciunt quis odit, autem distinctio.
              </p>
            </li>
            <li class="mb-3">
              <h3 class="text-lg">font-mono</h3>
              <p class="font-mono">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae reiciendis possimus esse tenetur magnam, dolore
                blanditiis incidunt nemo aut tempore sequi molestias ad
                voluptatibus est nesciunt quis odit, autem distinctio.
              </p>
            </li>
          </ul>
        </div>

        <!-- line-clamp -->
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">line-clamp</h3>
          <ul>
            <li class="mb-3">
              <h3 class="text-lg">line-clamp-1</h3>
              <p class="line-clamp-1" v-html="clampText"></p>
            </li>
            <li class="mb-3">
              <h3 class="text-lg">line-clamp-2</h3>
              <p class="line-clamp-2" v-html="clampText"></p>
            </li>
            <li class="mb-3">
              <h3 class="text-lg">line-clamp-3</h3>
              <p class="line-clamp-3" v-html="clampText"></p>
            </li>
          </ul>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
