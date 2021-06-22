<template>
  <div class="pagination">
    <span
      v-for="(item, i) in page.links"
      :key="i"
      @click="$emit('calcnextpage', calcNextPage(i))"
      :class="item.active && 'active'"
      v-html="item.label"
    ></span>
  </div>
</template>

<script>
export default {
  props: ["page"],
  emits: ["calcnextpage"],
  name: "pagination",
  data() {
    return {};
  },
  methods: {
    calcNextPage(index) {
      if (index === 0) {
        return this.page.current_page - 1;
      } else if (index === this.page.last_page + 1) {
        return this.page.current_page + 1;
      } else {
        return index;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  span {
    padding: 10px;
    cursor: pointer;
    &.active {
      text-decoration: underline;
    }
  }
}
</style>
