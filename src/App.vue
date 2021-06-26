<template>
  <div class="app-content">
    <header-section></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
  </div>
</template>
<script>
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    HeaderSection,
    FooterSection
  },
  computed: {
    ...mapGetters(["login"])
  },
  methods: {
    ...mapActions(["signIn"])
  },
  beforeMount() {
    if (!localStorage.getItem("token")) {
      this.$router.push({ name: "Login" });
    } else {
      this.$router.push({ name: "Dash" });
      this.signIn();
    }
  }
};
</script>
<style lang="scss">
.app-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.modal-register {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #aaa;
  &__form-wrapper {
    background-color: #fff;
    position: relative;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 350px;
    transform: translate(-50%, -50%);
    border: 1px solid lightgray;
    padding: 10px;
  }
  &__title {
    font-size: 28px;
  }
}
</style>
