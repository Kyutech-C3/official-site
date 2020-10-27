<template>
  <div>
    <button @click="openForm">新規投稿</button>
    <NewsIndex />
    <NewsForm ref="form" />
  </div>
</template>

<script>
import NewsForm from "./_NewsForm.vue";
import NewsIndex from "./_NewsIndex.vue";

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
