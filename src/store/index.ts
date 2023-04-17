import { createStore } from "vuex";

export default createStore({
  state: {
    users: null
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  },
  mutations: {
    getUsers(state, data) {
      state.users = data;
    }
  },
  actions: {
    async loadUsers({ commit }, url: string) {
      const response = await fetch(url)
        .then(res => res.json())
        .then(async data => data)
      commit("getUsers", response);
    }
  },
  modules: {},
});
