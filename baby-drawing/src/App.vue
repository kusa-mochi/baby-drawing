<template>
  <div id="app">
    <drawing-canvas :width="canvasWidth" :height="canvasHeight" />
    <color-palettes :width="paletteWidth" :height="paletteHeight" :colors="paletteColors" />
  </div>
</template>

<script>
import DrawingCanvas from "./components/DrawingCanvas";
import ColorPalettes from "./components/ColorPalettes";

export default {
  components: {
    ColorPalettes,
    DrawingCanvas,
  },
  computed: {
    canvasHeight: {
      get() {
        return window.innerHeight;
      },
    },
    canvasWidth: {
      get() {
        return window.innerWidth - this.$store.state.paletteWidth;
      },
    },
    paletteHeight: {
      get() {
        return window.innerHeight;
      },
    },
    paletteWidth: {
      get() {
        return this.$store.state.paletteWidth;
      },
    },
    paletteColors: {
      get() {
        return this.$store.state.paletteColors;
      },
    },
  },
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
