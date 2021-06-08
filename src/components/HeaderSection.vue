<template>
  <header class="header">
    <div class="header__left">
      <a href="/" class="logo">
        <img src="../assets/img/logo.png" alt="logo" />
      </a>

      <div class="header-dashboard dropdown">
        <span>Dashboards</span>
        <ul class="header-dashboard__drop">
          <li>
            <a href="#">View System Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
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
        <div class="header-link header-link_login">Log In</div>
      </div>
    </div>
  </header>
</template>
<script>

  export default {
    components: {

    }
  };
</script>
<style lang="scss">
  .header {
    min-height: 41px;
    padding: 5px;
    background-color: #0747a6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__right,
    &__left {
       display: flex;
       align-items: center;
    }

    &__right-links {
      display: flex;
      .header-link {
        margin: 0 10px;
      }
    }
  }
  .logo {
     margin-right: 30px;
    width: 158px;
    height: 30px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .header-dashboard {
     color:#fff;
     cursor: pointer;
     position: relative;
    /* .header-dashboard__drop */

    &__drop {
       position: absolute;
       top: 100%;
       right: 0;
       width: auto;
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
      color:#fff;
      border: 2px solid #0a47a2;
      font-size: 14px;
    }
  }
  .header-link {
    color:#fff;
    cursor: pointer;

    &_feedback {
    }



    &_help {
    }


    &_login {
    }
  }
</style>
