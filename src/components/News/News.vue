<template>
  <div>
    <NewsIndex />
    <NewsFrom />
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
};
</script>
