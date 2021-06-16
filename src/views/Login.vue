<template>
   <div class="content">
     <div class="wrapper">
       <form-registr></form-registr>
     </div>
   </div>
</template>

<script>

import FormRegistr from '../components/FormRegistr.vue';
export default {
   components: {
      FormRegistr,
   }
}
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
