<template>
  <h2>Проекты</h2>
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
      <tr v-for="item in projectList" :key="item.id">
        <td>{{ item.id }}</td>
        <td>
          <router-link :to="{ name: 'OneProject', params: { id: item.id } }">
            {{ item.name }}
          </router-link>
        </td>
        <td>{{ item.user.name }}</td>
        <td>{{ item.created_at }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("projects", ["projectList"])
  },
  methods: {
    ...mapActions("projects", ["getProjects"])
  },

  created() {
    this.getProjects();
  }
};
</script>
<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  tr {
    th,
    td {
      border-bottom: 1px solid rgb(187, 187, 187);
      padding: 10px 20px;
      text-align: left;
      &.item-id {
        width: 5%;
      }
    }
  }
}
</style>
