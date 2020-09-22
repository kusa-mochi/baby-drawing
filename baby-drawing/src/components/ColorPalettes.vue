<template>
  <div
    class="color-palettes"
    :style="`position: relative; height: ${height}px; width: ${width}px;`"
  >
    <div
      v-for="(c, iColor) in colors"
      :key="iColor"
      :style="`background-color: ${c}; height: calc(100%/${numColors}); width: ${width}px;`"
      @pointerover="penColor = c"
      class="palette"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    numColors: {
      get() {
        return this.colors.length;
      },
    },
    penColor: {
      set(newValue) {
        this.$store.state.penColor = newValue;
      },
    },
  },
  name: "ColorPalettes",
  props: {
    colors: {
      type: Array,
      required: false,
      default() {
        return ["red", "green", "blue"];
      },
    },
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
.color-palettes {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
}
</style>