import makeRequest from "../api/server";
export default {
  namespaced: true,
  state: {
    name: "123",
    password: "",
    confirm_password: "",
    email: "",
    role: "",
    validForm(state) {
      return (
        name.length > 0 &&
        state.email.length > 0 &&
        state.password.length > 0 &&
        state.confirm_password.length > 0 &&
        state.password === state.confirm_password &&
        state.role.length > 0
      );
    }
  },
  getters: {
    getName: state => state.name,
    getPass: state => state.password,
    getPassConfirm: state => state.confirm_password,
    getEmail: state => state.email,
    getRole: state => state.role
  },
  mutations: {
    changeFieldValue: (state, { name, newValue }) => (state[name] = newValue)
  },
  actions: {
    changeFieldValue: ({ commit }, { name, newValue }) =>
      commit("changeFieldValue", { name, newValue }),
    userRegistration({ state }) {
      if (state.validForm) {
        makeRequest(
          `users/register?name=${state.name}&password=${state.password}&password_confirmation=${state.confirm_password}&email=${state.email}&role=${state.role}`,
          {
            method: "POST",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        )
          //.then(data => data.json)
          .then(data => console.log(data))
          .catch(error => console.log(`Ошибка регистрации ${error}`));
      }
    }
  }
};
