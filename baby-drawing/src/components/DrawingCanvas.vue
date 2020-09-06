<template>
  <canvas
    id="drawing-canvas"
    @mousedown="startPainting"
    @mouseup="finishedPainting"
    @mousemove="draw"
  ></canvas>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      painting: false,
      vueCanvas: null,
    };
  },
  methods: {
    startPainting(e) {
      this.painting = true;
      console.log(this.painting);
      this.draw(e);
    },
    draw(e) {
      if (!this.painting) return;
      this.ctx.lineWidth = 10;
      this.ctx.lineCap = "round";
      this.ctx.lineTo(e.clientX, e.clientY);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX, e.clientY);
    },
    finishedPainting() {
      this.painting = false;
      console.log(this.painting);
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
</style>