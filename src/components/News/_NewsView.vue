<template>
  <div class="newsIndex">
    <div class="card" v-for="(news, number) in index" :key="number">
      <news-card 
        :title="news.title"
        :description="news.description"
        :imageUrl="news.imageURL"
        :date="news.date"
      />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import NewsCard from "./_NewsCard.vue";

export default {
  name: "Index",
  components: {
    NewsCard
  },
  data() {
    return {
      db: null,
      index: [],
      postItem: "",
    };
  },
  methods: {
    closeModal() {
      this.showContent = false;
    },
  },
  created: function () {
    this.db = firebase.firestore();
    var _this = this;
    this.db
      .collection("news")
      .orderBy("date", "desc")
      .onSnapshot(function (querySnapshot) {
        _this.index = [];
        querySnapshot.forEach(function (doc) {
          var data = doc.data();
          data.id = doc.id;
          _this.index.push(data);
        });
      });
  },
  // components: {
  //   NewsCard,
  // },
};
</script>

<style lang="scss" scoped>
.newsIndex {
  overflow-x: auto;
  overflow-y: hidden;
  background-color: $brand-color;
  padding: $content-padding-y $content-padding-x;
  white-space: nowrap;
}
.card {
  display: inline-block;
  margin-left: 15px;
}
.card:nth-last-child(0) {
  margin-right: 15px;
}
</style>
