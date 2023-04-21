<template>
  <search-sidebar />
  <user-detail/>
</template>

<script>
import SearchSidebar from '@/components/SearchSidebar.vue';
import UserDetail from '@/components/UserDetail.vue';

export default {
  name: "HomeView",
  components: {
    SearchSidebar,
    UserDetail
  },
};
</script>
