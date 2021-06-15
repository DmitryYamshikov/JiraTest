<template>
  <h1>DashBoard</h1>
  <ul>
    <li v-for="(item) in dashList" :key="item.id">
      <router-link :to="{name:'DashOne', params:{id:item.id}}">
        <div class="row">
          <span>{{ item.id }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.created_at }}</span>
          <span>{{item.user_id}}</span>
        </div>
      </router-link>
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
