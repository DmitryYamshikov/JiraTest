export default {
  namespaced: true,
  state: {
    forgotType: "forgotPassword", //что необходимо восстановить по умолчанию "Password"
    inputValue:'' //указываем Имя или Почту
  },
  getters: {
    forgotType: state => state.forgotType,
    inputValue: state =>state.inputValue
  },
  mutations: {
    setForgotType: (state, value) => (state.forgotType = value),
    setInputValue: (state,value)=>(state.inputValue=value)
  },
  actions: {
    setForgotType: ({ commit }, value) => {
      commit('setInputValue', '') //при смене radio button сбрпсываем значение Input
      commit("setForgotType", value)
    },
    setInputValue: ({commit}, value) =>commit("setInputValue",value)
  }
};
