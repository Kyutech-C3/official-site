<template>
  <div class="news">
    <section-title>News</section-title>
    <NewsView />
  </div>
</template>

<script>
import NewsView from "./_NewsView.vue";
import SectionTitle from "../miscs/SectionTitle";

export default {
  components: {
    NewsView,
    SectionTitle
  },
};
</script>
<style lang="scss" scoped>
.news {
  background-color: $brand-color;
  padding: $content-padding-y $content-padding-x;
}
</style>
