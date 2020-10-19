<template>
  <div>
    <NewsIndex />
    <NewsFrom />
  </div>
</template>

<script>
import NewsFrom from "./_News_Form.vue";
import NewsIndex from './_News_Index.vue'

export default {
  components: {
    NewsFrom,
    NewsIndex
  },
};
</script>
