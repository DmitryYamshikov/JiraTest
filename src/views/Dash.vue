<template>
  <h1>DashBoard</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Author</th>
        <th>Created</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in dashList" :key="item.id">
        <td>{{item.id}}</td>
        <td>
          <router-link :to="{name:'DashOne', params:{id:item.id}}">
            {{item.name}}
          </router-link>
        </td>
        <td>{{item.user_id}}</td>
        <td>{{item.created_at}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    computed: {
      ...mapGetters("dash", ["dashList"]),
    },
    methods: {
      ...mapActions("dash", ["getDashboard"]),
    },
    created() {
      this.getDashboard();
    },
  };
</script>
