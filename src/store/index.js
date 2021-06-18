import { createStore } from "vuex";

import makeRequest from "../api/server";

import formregistr from "./formregistr";
import menu from "./menu";
import projects from "./projects";
import dash from "./dash";
import dashone from "./dashone";
import resetpass from "./resetpass";

export default createStore({
  state: {
    login: false,
    remember: true,
    currentUser: {},
    token: "",
    users: []
  },
  getters: {
    login: state => state.login,
    remember: state => state.remember,
    users: state => state.users
  },
  mutations: {
    signIn: state => (state.login = !state.login),
    rememberChange: state => (state.remember = !state.remember),
    getUsers: (state, obj) => (state.user = obj)
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
    getUsers(store) {
      makeRequest("users?page=10", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(data => data.json())
        .then(data => {
          console.log(data);
          store.commit("getUsers", data.data);
        });
    }
  },
  modules: {
    formregistr,
    menu,
    projects,
    dash,
    dashone,
    resetpass
  }
});
