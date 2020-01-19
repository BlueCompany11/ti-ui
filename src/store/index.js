import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flashcards: []
  },
  mutations: {
    loadFlashcards(state, flashcards){
      state.flashcards = flashcards
    }
  },
  actions: {
  },
  modules: {
  }
})
