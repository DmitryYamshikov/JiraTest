<template>
  <div v-if="!login">
    <div class="modal-register">
      <div class="modal-register__form-wrapper">
        <h2 class="modal-register__title">Login</h2>
        <form class="form-registr" @submit.prevent="signIn">
          <div class="form-registr__inputs" v-for="field, index in fields" :key="field.name">
            <label
              ><span>{{ field.title }}</span>
              <input
                :type="field.type"
                :name="field.name"
                :placeholder="field.placeholder"
                :value="field.value"
                @input="onInput({index, value:$event.target.value.trim()})"
              />
            </label>
          </div>
          <label><input type="checkbox" name="save-pass" />Remember my Login for this computer</label>
          <div class="form-registr__notification">
            Not a member? To request an account, please contact your Jira administrators
          </div>
          <button class="btn">Log in</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    data: () => ({}),
    methods: {
      ...mapActions("formregistr", ["signIn", "onInput"]),
    },
    computed: {
      ...mapGetters("formregistr", ["login", "fields"]),
    },
  };
</script>
<style lang="scss">
  .form-registr {
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    .btn {
      width: 100px;
    }
    label {
      display: flex;
      margin-bottom: 20px;
      align-items: center;
      input[type="text"],
      input[type="password"] {
        padding: 5px;
        background-color: rgb(240, 240, 240);
        border: 1px solid lightgray;
        border-radius: 5px;
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
      font-size: 12px;
      line-height: 120%;
    }
  }
</style>
