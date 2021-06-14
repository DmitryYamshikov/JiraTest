<template>
  <div>
    <h2 class="modal-register__title">Welcome to DC Jira</h2>
    <div class="alert-message" v-if="!valid">
      Sorry, your username and password are incorrect - please try again.
    </div>
    <form class="form-registr" @submit.prevent="submitForm(this.$router)">
      <div
        class="form-registr__inputs"
        v-for="(field, index) in fields"
        :key="field.name"
      >
        <label
          ><span>{{ field.title }}</span>

          <input
            :type="field.type"
            :name="field.name"
            :value="field.value"
            @input="onInput({ index, value: $event.target.value.trim() })"
          />
        </label>
      </div>
      <div class="form-registr__footer">
        <label
        ><input
            type="checkbox"
            name="remember"
            :checked="remember"
            @click="rememberChange()"
        />Remember my login on this computer</label
        >
        <div class="form-registr__notification">
          Not a member? To request an account, please contact your Jira
          administrators
        </div>
        <button class="btn">Log in</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({}),
  methods: {
    ...mapActions("formregistr", ["onInput", "onSubmit"]),
    ...mapActions(["rememberChange"]),
    async submitForm(router){
       await this.onSubmit(router)
    }
  },
  computed: {
    ...mapGetters("formregistr", ["fields","valid"]),
    ...mapGetters(["remember"]),
  },
};
</script>
<style lang="scss">
.alert-message {
  font-size: 14px;
  background-color: rgb(255, 235, 230);
  padding : 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form-registr {
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    input[type="text"],
    input[type="password"] {
      padding: 5px;
      background-color: rgb(250, 251, 252);
      border: 1px solid lightgray;
      border-radius: 3px;
      &:focus {
        background-color: #fff;
        border: 1px solid blue;
      }
    }
    span {
      margin-right: 15px;
      flex-basis: 70px;
    }
  }
  &__notification {
    margin-bottom: 20px;
    font-size: 13px;
    line-height: 130%;
  }
  &__footer {
    margin-left: 85px;
    label {
      font-size: 14px;
    }
  }
}
.modal-register {
  &__title {
    font-size: 24px;
    line-height: 1.25;
    letter-spacing: -.01em;
    margin-top: 0;
    font-weight: 500;
  }
}
</style>
