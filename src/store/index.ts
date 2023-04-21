import { createStore } from "vuex";
import { User } from "@/types/main";

export default createStore({
  state: {
    users: [] as User[],
    user: {} as User,
    term: ""
  },
  getters: {
    getUsers(state): User[] | undefined {
      if(state.term) {
        return state.users.filter(item => item.name.toLowerCase().includes(state.term)) as []
      } else {
        state.users = [];
      }
    },
  },
  mutations: {
    getUsers(state, data) {
      state.users = data;
    },
    getTerm(state, term) {
      state.term = term;
    },
    getUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async loadUsers({ commit }, url: string) {
      const response = await fetch(url)
        .then((res) => res.json())
        .then(async (data) => data);
      commit("getUsers", response);
    },
  },
  modules: {},
});
