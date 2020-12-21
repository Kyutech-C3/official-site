<template>
  <div>
    <button class="newButton" @click="openForm">新規投稿</button>
    <NewsIndex />
    <NewsForm ref="form" />
  </div>
</template>

<script>
import NewsForm from "./NewsForm.vue";
import NewsIndex from "./NewsIndex.vue";

export default {
  components: {
    NewsForm,
    NewsIndex,
  },
  methods: {
    openForm() {
      this.$refs.form.showContent = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.newButton {
  margin: 20px;
  padding: 1rem;
  font-weight: bold;
}
</style>
