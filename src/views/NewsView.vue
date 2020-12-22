<template>
  <div class="news_view">
    <div class="news_container">
      <section class="news_header">
        <p>投稿日: {{ news.date }}</p>
      </section>
      <section class="news_content">
        <div v-html="news.html" class="news_markdown">
        </div>
      </section>
    </div>
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
  created: function () {
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
      })
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');
.news_header {
  text-align: center;
}
.news_view {
  text-align: center;
}
.news_view{
  padding: 0 2rem;
  .news_container {
    text-align: left;
  }
}

.news_markdown {
  /deep/ h1:first-of-type{
    font-size: 3em;
    margin-top: 0;
    text-align: center;
  }

  /deep/ h2, /deep/ h3 {
    border-bottom: solid 2px $brand-color;
  }

  /deep/ img, video, iframe{
    max-width: 100%;
  }
  /deep/ code {
    font-family: 'jetBrains Mono', monospace;
    background-color: $brand-color;
    padding: .2em;
    font-size: .85em;
  }
  /deep/ pre {
    font-family: 'jetBrains Mono', monospace;
    font-size: .85em;
    padding: .5em;
    background-color: $brand-color;
    /deep/ code {
      font-family: 'jetBrains Mono', monospace;
      padding: 0;
      background-color: $brand-color;
      font-size: 1em;
    }
  }
  /deep/ blockquote {
    margin-left: 0;
    padding-left: 1em;
    border-left: solid 3px $brand-color;
  }
  /deep/ hr {
    color: none;
    border-bottom: solid 2px $brand-color;
  }
}
</style>
