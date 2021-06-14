<template>
  <nav  >
    <ul >
      <li :key="i" v-for="(item,i) in menu">
        <router-link  :to="{name:item.route}">{{item.title}}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import {mapGetters} from 'vuex'
export default ({
  computed: {
    ...mapGetters('menu', ['menu'])
  }

})
</script>
<style scoped lang="scss">
nav{
  margin-right: auto;
}
  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    li {
      a {
        height: 100%;
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        padding: 0 15px;
        &:hover {
          background-color: #083376;
        }

      }
    }
  }
</style>
