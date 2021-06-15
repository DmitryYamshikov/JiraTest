<template>
  <h1>DashBoard</h1>
  <ul>
    <li v-for="(item) in dashList" :key="item.id">

      <div class="row">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.created_at }}</span>
      </div>

    </li>
  </ul>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default ({
    computed: {
      ...mapGetters('dash', ['dashList'])
    },
    methods: {
      ...mapActions('dash', ['getDashboard'])
    },
    created() {
      this.getDashboard();
    }
  })

</script>
