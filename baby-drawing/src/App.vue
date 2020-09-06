<template>
  <div id="app">
    <drawing-canvas />
  </div>
</template>

<script>
import DrawingCanvas from "./components/DrawingCanvas.vue";

export default {
  components: {
    DrawingCanvas,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
