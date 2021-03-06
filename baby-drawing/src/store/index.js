import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paletteWidth: 150,
    paletteColors: [
      "#52e820", "#1912e6", "#ff1500", "#e600ff", "#ffff00"
    ],
    penColor: "#169632",
    penMaxWidth: 60
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
