<template>
  <h2>Проекты</h2>
  <ul>
    <li v-for="(item) in projectList" :key="item.id">
        <router-link :to="{name:'OneProject', params: {id: item.id} }">
          <div class="row">
            <span>{{ item.id }}</span>
            <span>{{ item.name }}</span>
            <span>{{ item.created_at }}</span>
          </div>
        </router-link>
    </li>
  </ul>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default ({
  computed: {
    ...mapGetters('projects',['projectList'])
  },
  methods:{
    ...mapActions('projects',['getProjects'])
  },

  created() {
    this.getProjects();
  }
})
</script>
