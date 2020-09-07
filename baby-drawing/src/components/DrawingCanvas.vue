<template>
  <canvas
    id="drawing-canvas"
    @pointerdown="startPainting"
    @pointerup="finishedPainting"
    @pointermove="draw"
  ></canvas>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      painting: false,
      penColor: "green",
      vueCanvas: null,
    };
  },
  methods: {
    startPainting(e) {
      console.log("start painting.");
      this.painting = true;
      this.draw(e);
    },
    draw(e) {
      console.log("draw.");
      if (!this.painting) return;
      console.log("pen moving.");
      this.ctx.lineWidth = 30 * e.pressure;
      this.ctx.lineCap = "round";
      this.ctx.strokeStyle = this.penColor;
      this.ctx.lineTo(e.clientX, e.clientY);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX, e.clientY);
    },
    finishedPainting() {
      console.log("finish painting.");
      this.painting = false;
      this.ctx.beginPath();
    },
  },
  mounted() {
    this.canvas = document.getElementById("drawing-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.vueCanvas = this.ctx;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
  },
  name: "DrawingCanvas",
};
</script>

<style lang="scss" scoped>
#drawing-canvas {
    touch-action: none;
}
</style>