<template>
  <header class="header">
    <div class="header__left">
      <a href="/" class="logo">
        <img src="../assets/img/logo.png" alt="logo" />
      </a>

      <div class="header-dashboard dropdown" v-if="!login">
        <div>Dashboards</div>
        <ul class="header-dashboard__drop">
          <li>
            <a href="#">View System Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
    <menu-block v-if="login"></menu-block>
    <div class="header__right">
      <div class="form-search">
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div class="header__right-links">
        <div class="header-link header-link_feedback">feed</div>
        <div class="header-link header-link_help">
          <span>?</span>
        </div>
        <div class="header-link header-link_login" v-if="!login">Log In</div>
        <div class="header-link header-link_login" @click="logOut($router)" v-else>Log Out</div>
      </div>
    </div>
  </header>
</template>
<script>
import MenuBlock from './Menu'
import {mapGetters, mapActions} from 'vuex';
  export default {
    components: {
      MenuBlock
    },
    computed: {
      ...mapGetters(['login'])
    },
    methods: {
      ...mapActions(['logOut'])
    }
  };
</script>
<style scoped lang="scss">
  .header {
    min-height: 41px;
    padding: 0 15px;
    background-color: #0747a6;
    display: flex;
    &__right,
    &__left {
      display: flex;
      align-items: stretch;
      & > * {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
    &__right {
      margin-left: auto;
    }


    &__right-links {
      display: flex;
      .header-link {
        padding: 0 10px;
        height: 100%;
        display: flex;
        align-items: center;
        &:hover {
          background-color: #083376;
        }
      }
    }
  }
  .logo {
    margin-right: 30px;
    img {
      width: 158px;
      height: 30px;
      object-fit: contain;
    }
  }
  .header-dashboard {
    color: #fff;
    cursor: pointer;
    position: relative;
    & > div {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 5px;
      &:hover {
        background-color: #083376;
      }
    }

    &__drop {
      list-style-type: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: auto;
      margin: 0;
      padding: 10px;
      background-color: #fff;
      width: max-content;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      display: none;
      a {
        color: #000;
        text-decoration: none;
        font-size: 14px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    &:hover {
      .header-dashboard__drop {
        display: flex;
      }
    }
  }
  .dropdown {
  }
  .form-search {
    margin-right: 20px;
    width: 170px;
    input {
      padding-left: 30px;
      height: 32px;
      background-color: #083377;
      color: #fff;
      border: 2px solid #0a47a2;
      font-size: 14px;
    }
  }
  .header-link {
    color: #fff;
    cursor: pointer;

    &_feedback {
    }

    &_help {
    }

    &_login {
    }
  }
</style>
