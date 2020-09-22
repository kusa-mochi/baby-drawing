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
  beforeDestroy() {
    window.removeEventListener("keydown", this.keyAction);
  },
  computed: {
    penColor: {
      get() {
        return this.$store.state.penColor;
      },
      set(newValue) {
        this.$store.state.penColor = newValue;
      },
    },
    penMaxWidth: {
      get() {
        return this.$store.state.penMaxWidth;
      },
    },
  },
  created() {
    window.addEventListener("keydown", this.keyAction);
  },
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
      console.log("start painting.");
      this.painting = true;
      this.draw(e);
    },
    draw(e) {
      console.log("draw.");
      if (!this.painting) return;
      console.log("pen moving.");
      this.ctx.lineWidth = this.penMaxWidth * e.pressure;
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
    keyAction(e) {
      // Delete key
      if (e.keyCode == 46) {
        // clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    },
  },
  mounted() {
    this.canvas = document.getElementById("drawing-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.vueCanvas = this.ctx;
    this.canvas.height = this.height;
    this.canvas.width = this.width;
  },
  name: "DrawingCanvas",
  props: {
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#drawing-canvas {
  touch-action: none;
}
</style>