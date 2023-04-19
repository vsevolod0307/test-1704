import { createStore } from "vuex";

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}
interface User {
  id: number, 
  name: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export default createStore({
  state: {
    users: [] as User[],
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
