<template>
  <div class="page-header">
    <h1>Projects</h1>
  </div>
  <div class="page-wrapper">
    <aside></aside>
    <main>
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
          <tr v-for="item in projectList.data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <router-link
                :to="{ name: 'OneProject', params: { id: item.id } }"
              >
                {{ item.name }}
              </router-link>
            </td>
            <td>{{ item.user.name }}</td>
            <td>{{ createdDate(item.created_at) }}</td>
          </tr>
        </tbody>
      </table>
      <pagination :page="projectList" @calcnextpage="loadProjects"></pagination>
    </main>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "../components/Pagination";
import formDate from "../api/formDate";

export default {
  components: {
    Pagination
  },
  computed: {
    ...mapGetters("projects", ["projectList"])
  },
  methods: {
    ...mapActions("projects", ["getProjects"]),

    loadProjects(value) {
      this.getProjects(value);
    },
		createdDate(string) {
			return formDate(string);
		}
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
