<template>
  <header-section></header-section>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
  // import makeRequest from "./api/server.js";
  import HeaderSection from "./components/HeaderSection";


  import {mapGetters, mapActions} from 'vuex';


  export default {
    components: {
      HeaderSection,
    },
    computed: {
      ...mapGetters(['login'])
    },
    methods:{
      ...mapActions(['signIn','getUsers'])
    },
    beforeMount() {
      if (!localStorage.getItem('token'))
        {this.$router.push({name:'Login'})}
      else {
        this.$router.push({name:'Dash'});
        this.signIn();
      }
      this.getUsers();
    },
    Updated() {

    },
    created() {
      // makeRequest();
    },
  };
</script>
<style lang="scss">
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
