<template>
  <main-view/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainView from "./views/MainView.vue";

export default defineComponent({
  name: "App",
  components: {
    MainView,
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 10px 40px;
}
</style>
