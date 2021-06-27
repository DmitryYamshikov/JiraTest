<template>
  <div class="content">
    <div class="wrapper">
      <form-login></form-login>
    </div>
  </div>
</template>

<script>
import FormLogin from "../components/FormLogin.vue";
export default {
  components: {
    FormLogin
  }
};
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 100%;
}
.wrapper {
  border-radius: 5px;
  margin: 50px auto;
  width: 576px;
  padding: 40px;
  background-color: #fff;
  border: 1px solid #c1c7d0;
}
</style>
