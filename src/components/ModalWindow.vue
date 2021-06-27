<template>
  <div class="modal">
    <div class="wrapper">
      <div class="close" @click="changeModalStatus">&#10006;</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["changeModalStatus"])
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
  .close {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 100%;
    left: 100%;
    cursor: pointer;
    font-size: 30px;
  }
}
form {
}
</style>
