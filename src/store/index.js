import { createStore } from 'vuex';
import formregistr from './formregistr';

export default createStore({
  state: {
    login: false,
    remember: true,
    currentUser: {},
    token: ''
  },
  getters: {
    login: state => state.login,
    remember: state => state.remember
  },
  mutations: {
    signIn: (state) => state.login = !state.login,
    rememberChange: (state) => state.remember = !state.remember
  },
  actions: {
    signIn(context) {
      context.commit('signIn')
    },
    logOut(store, router) {
      localStorage.setItem('token','');
      localStorage.setItem('currentUser','');
      store.commit('signIn');
      router.push({name:'Login'});
    },
    rememberChange(context) {
      context.commit('rememberChange')
    }
  },
  modules: {
    formregistr
  },
});
