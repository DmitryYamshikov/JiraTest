import makeRequest from "../api/server";

export default {
  namespaced: true,
  state: {
    personalList: []
  },
  getters: {
    personalList: state => state.personalList
  },
  mutations: {
    getPersonalList: (state, obj) => {
      state.personalList = obj;
    }
  },
  actions: {
    getPersonalList(store, page = 0) {
      makeRequest(`users?page=${page}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(data => data.json())
        .then(data => {
          console.log(data);
          store.commit("getPersonalList", data);
        });
    }
  }
};
