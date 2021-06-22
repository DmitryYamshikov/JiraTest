<template>
  <pre>{{ page }}</pre>
  <div class="pagination">
    <span v-for="(item, i) in page.links" :key="i">{{ item.label }}</span>
  </div>
</template>

<script>
export default {
  props: ["page"],
  name: "pagination"
};
</script>

<style scoped></style>
