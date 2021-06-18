export default {
  namespaced: true,
  state: {
    forgotType: "forgotPassword"
  },
  getters: {
    forgotType: state => state.forgotType
  },
  mutations: {
    setForgotType: (state, value) => (state.forgotType = value)
  },
  actions: {
    setForgotType: ({ commit }, value) => commit("setForgotType", value)
  }
};
