<template>
  <div class="page-header"><h1>DashBoard</h1></div>
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
          <tr v-for="item in dashList.data" :key="item.id">
            <td class="item-id">{{ item.id }}</td>
            <td>
              <router-link :to="{ name: 'DashOne', params: { id: item.id } }">
                {{ item.name }}
              </router-link>
            </td>
            <td>{{ item.user_id }}</td>
            <td>{{ createdDate(item.created_at) }}</td>
          </tr>
        </tbody>
      </table>
      <pagination :page="dashList" @calcnextpage="loadDash"> </pagination>
    </main>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import formDate from "../api/formDate";
import Pagination from "../components/Pagination";

export default {
  components: {
    Pagination
  },
  computed: {
    ...mapGetters("dash", ["dashList"])
  },
  methods: {
    ...mapActions("dash", ["getDashboard"]),
    createdDate(string) {
      return formDate(string);
    },
    loadDash(value) {
      this.getDashboard(value);
    }
  },
  created() {
    this.getDashboard();
  }
};
</script>
<style lang="scss"></style>
