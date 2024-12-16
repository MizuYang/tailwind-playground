<script setup>
onMounted(async () => {
  if (process.client) {
    const { StarFieldCanvas } = await import(
      "~/utils/StarFieldCanvas.client.js"
    );

    // const canvas = new StarFieldCanvas(someParameter);

    /**
     * Example of usage with some extra stuff to test the config on the fly
     */

    // Canvas element to use - style/position this with CSS
    const canvasId = "space"; // required

    // If you enable 'followMouse' and need mousemove on different element to canvas
    // var followContext = window; // optional, default 'this.canvas' in class

    // Illusion of changing view direction due to mouse pos
    const followMouse = true; // optional, default false

    // Star color
    const color = { r: 255, g: 255, b: 255 }; // optional, default 255, 255, 255

    // Subtle glow with canvas shadow - performance drain
    const glow = true; // optional, default false

    // Min velocity range
    const minV = 2; // optional, default 2

    // Max velocity range
    const maxV = 10; // optional, default 5

    // Perforance starts to degrade beyond around 1500 stars, system-dependent
    const numStars = 1000; // optional, default 400

    // Subtle trail lines which help the illusion of speed
    const trails = true; // optional, default false

    // Setup the Starfield
    // var starfield = new Starfield.Starfield(canvasId); // Run with defaults
    const starfield = new StarFieldCanvas.StarField(canvasId, {
      followMouse,
      color,
      glow,
      minV,
      maxV,
      numStars,
      trails,
    });

    // Make stars happen
    starfield.start();

    window.addEventListener("blur", () => {
      // 離開網頁焦點確保動畫繼續運行
      starfield.start();
    });
  }
});
</script>

<template>
  <div>
    <canvas id="space"></canvas>
    <Menu />
    <div
      class="container m-auto bg-white my-10 px-10 py-10"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
html {
  background-color: #222;
}

html,
body {
  height: 100vh;
  width: 100vw;
}

#space {
  background-color: #000;
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: -1;
}
</style>
