import { createStore } from "vuex";

import formregistr from "./formregistr";
import menu from "./menu";
import projects from "./projects";
import dash from "./dash";
import dashone from "./dashone";
import resetpass from "./resetpass";
import personal from "./personal";

export default createStore({
  state: {
    login: false,
    remember: true, //запоминать ли user login //TODO сделать функционал remember user
    currentUser: {},
    token: "",
    modalStatus: false
  },
  getters: {
    login: state => state.login,
    remember: state => state.remember,
    modalStatus: state => state.modalStatus
  },
  mutations: {
    signIn: state => (state.login = !state.login),
    rememberChange: state => (state.remember = !state.remember),
    changeModalStatus: state => (state.modalStatus = !state.modalStatus)
  },
  actions: {
    signIn(context) {
      context.commit("signIn");
    },
    logOut(store, router) {
      localStorage.setItem("token", "");
      localStorage.setItem("currentUser", "");
      store.commit("signIn");
      router.push({ name: "Login" });
    },
    rememberChange(context) {
      context.commit("rememberChange");
    },
    changeModalStatus({ commit }) {
      commit("changeModalStatus");
    }
  },
  modules: {
    formregistr,
    menu,
    projects,
    dash,
    dashone,
    resetpass,
    personal
  }
});
