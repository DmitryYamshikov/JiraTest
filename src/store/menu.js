export default {
  namespaced: true,
  state: {
    menu: [
      { title: "Доски", route: "Dash" },
      { title: "Задачи", route: "Projects" },
      { title: "Список сотрудников", route: "Personal" }
    ]
  },
  getters: {
    menu: state => state.menu
  }
};
