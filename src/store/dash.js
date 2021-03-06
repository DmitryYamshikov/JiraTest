import makeRequest from "../api/server";

export default {
  namespaced: true,
  state: {
    dashList: []
  },
  getters: {
    // userList: state => state.dashList.data,
    // pagination: state => state.dashList.links,
    dashList: state => state.dashList
  },
  mutations: {
    getDashboard: (state, obj) => {
      state.dashList = obj;
    }
  },
  actions: {
    getDashboard(store, page = 0) {
      makeRequest(`dashboards?page=${page}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(data => data.json())
        .then(data => {
          store.commit("getDashboard", data);
        });
    }
  }
};
