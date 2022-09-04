import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paletteWidth: 150,
    paletteColors: [
      "#FFF464", "#FEF102", "#80422B", "#D69E01", "#E73930", "#E50045", "#90C320", "#018850", "#0070BC", "#003567", "#3E3A39", "#FFFFFF"
    ],
    penColor: "#E73930",
    penMaxWidth: 60
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
