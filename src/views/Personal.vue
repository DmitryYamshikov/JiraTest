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
  <div class="modal">
    <div class="wrapper">
      <form>
        <label
          >Name<input type="text" name="name" placeholder="Enter name"
        /></label>
        <label
          >Password<input
            type="password"
            name="password"
            placeholder="Enter password"
        /></label>
        <label
          >Confirm Password<input
            type="text"
            name="confirm_password"
            placeholder="Confirm password"
        /></label>
        <label
          >Email <input type="email" name="email" placeholder="Enter email"
        /></label>
        <fieldset>
          <legend>Choose role</legend>
          <div class="fieldset__body">
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="role"
                  value="admin"
                  checked
                />admin</label
              >
            </div>
            <div class="radio">
              <label
                ><input type="radio" name="role" value="pm" checked />Product
                manager</label
              >
            </div>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="role"
                  value="worker"
                  checked
                />worker</label
              >
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "../components/Pagination";
export default {
  components: {
    Pagination
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

<style scoped lang="scss">
.modal {
  display: none;
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
