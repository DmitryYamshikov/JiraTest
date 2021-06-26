<template>
  <div class="page-header">
    <h1>Personal</h1>
  </div>
  <div class="page-wrapper">
    <aside>
      <span>Новый сотрудник</span>
    </aside>
    <main>
      <!--TODO вывести таблицу в отдельный компонент -->
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in personalList.data" :key="item.id">
            <td class="item-id">{{ item.id }}</td>
            <td>
              <router-link :to="{ name: 'User', params: { id: item.id } }">
                {{ item.name }}
              </router-link>
            </td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
      </table>

      <pagination :page="personalList" @calcnextpage="loadUsers"></pagination>
    </main>
  </div>
  <modal-window></modal-window>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "../components/Pagination";
import ModalWindow from "../components/ModalWindow";
export default {
  components: {
    Pagination,
    ModalWindow
  },
  computed: {
    ...mapGetters("personal", ["personalList"])
  },
  methods: {
    ...mapActions("personal", ["getPersonalList"]),
    loadUsers(value) {
      this.getPersonalList(value);
    }
  },
  created() {
    this.getPersonalList();
  }
};
</script>

<style scoped lang="scss"></style>
