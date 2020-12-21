<template>
  <div>
    <section class="news_header">
      <p>投稿日: {{ news.date }}</p>
    </section>
    <section class="news_content">
      <div ref="htmlContent" class="news_markdown"></div>
    </section>
  </div>
</template>
<script>
import 'firebase'
import { Newsdb } from "@/plugins/firebase";

export default {
  name: "Index",
  data() {
    return {
      news: {}
    };
  },
  methods: {
    closeModal() {
      this.showContent = false;
    },
  },
  mounted: function () {
    const newsId = this.$route.params.newsId
    console.log(newsId)
    if(newsId === null) this.$router.push('/')
    let self = this;
    console.log(Newsdb)
    Newsdb
      .doc(newsId)
      .get()
      .then((doc) => {
        self.news = doc.data()
        self.$refs.htmlContent.innerHTML = self.news.html
      })
  },
};
</script>
<style lang="scss" scoped>
.news_markdown h1 {
  text-align: center;
}
</style>
