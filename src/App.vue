<template>

  <form-registr></form-registr>
</template>
<script>

import FormRegistr from './components/FormRegistr.vue';

export default {
  components: {
    FormRegistr,
  },
};
</script>
<style lang="scss">
  .modal-register {
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100vh;
    background-color: #aaa;
    &__form-wrapper {
      background-color: #fff;
      position: relative;
      top: 50%;
      left:50%;
      width: 500px;
      height: 350px;
      transform: translate(-50%, -50%);
      border: 1px  solid lightgray;
      padding: 10px;
    }
    &__title {
      font-size: 28px;
    }
  }
</style>
