<template>
  <div>
    <button @click="openForm">新規投稿</button>
    <NewsIndex />
    <NewsFrom ref="form" />
  </div>
</template>

<script>
import NewsFrom from "./_NewsForm.vue";
import NewsIndex from "./_NewsIndex.vue";

export default {
  components: {
    NewsFrom,
    NewsIndex,
  },
  methods: {
    openForm() {
      this.$refs.form.showContent = true;
    },
  },
};
</script>
