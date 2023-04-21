<template>
  <aside>
    <input class="search-input" type="text" placeholder="поиск по имени" v-model="term">
    <ul v-if="users?.length" class="users">
      <li 
        class="user-sidebar" 
        :class="{ 'active-user' : user.id === activeUser }"
        v-for="user in users" 
        @click="getUser(user)"
        :key="user.id">
        <div class="detail-info">
          <span v-if="user.name">{{ user.name }}</span>
        </div>
        <div class="detail-info">
          <span v-if="user.email">{{ user.email }}</span>
        </div>
        <div class="detail-info">
          <span v-if="user.address.city">{{ user.address.city }}</span>
        </div>
        <div class="detail-info">
          <span v-if="user.phone">{{ user.phone }}</span>
        </div>
      </li>
    </ul>
    <div v-else class="prompt">Начните вводить имя или фамилию</div>
  </aside>

</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
import { User } from "@/types/main";

export default defineComponent({
  name: "SearchSidebar",
  data() {
    return {
      term: "",
      activeUser: 0
    }
  },
  methods: {
    getUser(user: User): void {
      this.activeUser = user.id;
      store.commit("getUser", user);
    }
  },
  computed: {
    users(): User[] {
      return store.getters.getUsers;
    },
  },
  watch: {
    term(value): void {
      store.commit("getTerm", value);
      store.dispatch("loadUsers", "https://jsonplaceholder.typicode.com/users");
    }
  }
});
</script>

<style scoped lang="scss">
  .user-sidebar {
    min-height: 100px;
    font-size: 14px;
    background-color: rgb(245, 216, 173);
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;
    padding: 10px 20px;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      background-color: rgb(226, 185, 124);
    }
  }
  .active-user {
    background-color: rgb(226, 185, 124);
  }
  .users {
    list-style-type: none;
    padding: 0;
    min-width: 300px;
  }

  .search-input {
    min-width: 300px;
    padding: 10px;
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px 0px rosybrown;
  }

  .prompt {
    font-size: 12px;
    color: #bdaeae;
    margin-top: 24px;
  }
</style>
