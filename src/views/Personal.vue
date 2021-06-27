<template>
  <div class="page-header">
    <h1>Personal</h1>
  </div>
  <div class="page-wrapper">
    <aside>
      <span @click="changeModalStatus">Новый сотрудник</span>
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
  <modal-window v-if="modalStatus">
    <slot>
      <form-registration></form-registration>
    </slot>
  </modal-window>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "../components/Pagination";
import ModalWindow from "../components/ModalWindow";
import FormRegistration from "../components/FormRegistration";
export default {
  components: {
    Pagination,
    ModalWindow,
    FormRegistration
  },
  computed: {
    ...mapGetters("personal", ["personalList"]),
    ...mapGetters(["modalStatus"]),
    changeModalVision() {
      return this.modalStatus;
    }
  },
  methods: {
    ...mapActions("personal", ["getPersonalList"]),
    ...mapActions(["changeModalStatus"]),
    loadUsers(value) {
      this.getPersonalList(value);
    }
  },
  created() {
    this.getPersonalList();
  }
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
