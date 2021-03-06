import makeRequest from "../api/server";
export default {
  namespaced: true,
  state: {
    projectList: []
  },
  getters: {
    projectList: state => state.projectList
  },
  mutations: {
    getProjects: (state, obj) => {
      state.projectList = obj;
    }
  },

  actions: {
    getProjects(store, index = 0) {
      makeRequest(`projects?page=${index}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(data => data.json())
        .then(data => {
          store.commit("getProjects", data);
        });
    }
  }
};
