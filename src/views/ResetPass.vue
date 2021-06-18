<template>
  <div class="content">
    <div class="wrapper">
      <h1>Can't access your account?</h1>
      <div class="message">
        If you can't access Jira, fill in this form and an email will be sent to
        you with the details to access your account again.
      </div>
      <form>
        <fieldset>
          <legend>Which did you forget</legend>
          <div class="fieldset__body">
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="forgot"
                  value="forgotPassword"
                  v-model="changeForgotType"
                  checked
                />Password</label
              >
            </div>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="forgot"
                  value="forgotUsername"
                  v-model="changeForgotType"
                />Username</label
              >
            </div>
          </div>
        </fieldset>
        <label v-if="changeInputType" class="label-user"
          ><span>Username</span><i>*</i><input type="text"
        /></label>
        <label v-else class="label-user"
          ><span>Email</span><i>*</i><input type="text"
        /></label>
        <div class="form__footer">
          <button class="btn">Send</button>
          <router-link :to="{ name: 'Login' }">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapGetters("resetpass", ["forgotType"]),
    changeForgotType: {
      get() {
        return this.forgotType;
      },
      set(value) {
        this.setForgotType(value);
      }
    },
    changeInputType() {
      return this.forgotType === "forgotPassword";
    }
  },
  methods: {
    ...mapActions("resetpass", ["setForgotType"])
  }
};
</script>
<style scoped lang="scss">
h1 {
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  margin-top: 0;
  font-weight: 500;
}
.message {
  color: rgb(52, 69, 99);
  font-size: 14px;
  padding: 15px 15px 15px 40px;
  background-color: #ddecff;
  margin-top: 20px;
}
fieldset {
  display: flex;
  align-items: center;
  border: none;
  margin-top: 10px;
  label {
    font-size: 14px;
    color: rgb(23, 43, 77);
    font-weight: 400;
  }
}
legend {
  float: left;
  position: relative;
  text-align: right;
  width: 130px;
  word-wrap: break-word;
  font-weight: 500;
  font-size: 14px;
  color: rgb(107, 119, 140);
}
.fieldset__body {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}
.radio {
  margin: 2px 0;
}
.label-user {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: rgb(107, 119, 140);
  margin-left: 75px;
  i {
    color: red;
  }
  span {
    display: inline-block;
    width: 64px;
    text-align: right;
  }
  input {
    height: 30px;
    width: 250px;
    padding: 3px 4px;
    border-radius: 3px;
    border: 2px solid rgb(223, 225, 230);
    background-color: rgb(250, 251, 252);
    margin-left: 9px;
  }
}
.form__footer {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 153px;
  .btn {
    margin-right: 10px;
  }
  a {
    color: rgb(0, 82, 204);
    font-size: 14px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
