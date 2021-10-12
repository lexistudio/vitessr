import { createStore } from 'vuex'

export const store = createStore({
  state: () => ({
    mess: []
  }),
  mutations: {
    SOCKET_setMess(state, payload) {
      state.mess = payload
    }
  },
  actions: {
    SOCKET_newMess({ commit }, data) {
      commit('SOCKET_setMess', data)
    }
  },
  getters: {
    getMess: state => state.mess
  },
  modules: {},
})