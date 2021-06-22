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
      <tr v-for="item in userList" :key="item.id">
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
  <div class="pagination">
    <span
      v-for="(item, i) in pagination"
      :key="i"
      @click="paginationStep(i)"
      :class="item.active && 'active'"
      >{{ item.label }}</span
    >
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import formDate from "../api/formDate";
export default {
  computed: {
    ...mapGetters("dash", ["userList", "pagination", "dashList"])
  },
  methods: {
    ...mapActions("dash", ["getDashboard"]),
    createdDate(string) {
      return formDate(string);
    },
    paginationStep(index) {
      if (index === 0) {
        this.getDashboard(this.dashList.current_page - 1);
      } else if (index === this.dashList.last_page + 1) {
        this.getDashboard(this.dashList.current_page + 1);
      } else {
        this.getDashboard(index);
      }
    }
  },
  created() {
    this.getDashboard();
  }
};
</script>
<style lang="scss"></style>
