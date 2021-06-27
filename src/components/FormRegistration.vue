<template>
  <form @submit.prevent="userRegistration()">
    <label
      >Name<input
        type="text"
        name="name"
        placeholder="Enter name"
        :value="getName"
        required
        @input="
          changeFieldValue({ name: 'name', newValue: $event.target.value })
        "
    /></label>
    <label
      >Password<input
        required
        type="password"
        name="password"
        placeholder="Enter password"
        :value="getPass"
        @input="
          changeFieldValue({ name: 'password', newValue: $event.target.value })
        "
    /></label>
    <label
      >Confirm Password<input
        required
        type="password"
        name="confirm_password"
        placeholder="Confirm password"
        :value="getPassConfirm"
        @input="
          changeFieldValue({
            name: 'confirm_password',
            newValue: $event.target.value
          })
        "
    /></label>
    <label
      >Email
      <input
        required
        type="email"
        name="email"
        placeholder="Enter email"
        :value="getEmail"
        @input="
          changeFieldValue({ name: 'email', newValue: $event.target.value })
        "
    /></label>
    <fieldset>
      <legend>Choose role</legend>
      <div class="fieldset__body">
        <div class="radio">
          <label
            ><input
              required
              type="radio"
              name="role"
              value="admin"
              @input="
                changeFieldValue({
                  name: 'role',
                  newValue: $event.target.value
                })
              "
            />admin</label
          >
        </div>
        <div class="radio">
          <label
            ><input
              required
              type="radio"
              name="role"
              value="pm"
              @input="
                changeFieldValue({
                  name: 'role',
                  newValue: $event.target.value
                })
              "
            />Product manager</label
          >
        </div>
        <div class="radio">
          <label
            ><input
              required
              type="radio"
              name="role"
              value="worker"
              @input="
                changeFieldValue({
                  name: 'role',
                  newValue: $event.target.value
                })
              "
            />worker</label
          >
        </div>
      </div>
    </fieldset>
    <button class="btn">Registr user</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("formregistration", [
      "getName",
      "getPass",
      "getPassConfirm",
      "getEmail",
      "getEmail"
    ])
  },
  methods: {
    ...mapActions("formregistration", ["changeFieldValue", "userRegistration"])
  }
};
</script>

<style scoped lang="scss"></style>
