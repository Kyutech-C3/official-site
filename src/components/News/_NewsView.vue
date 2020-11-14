<template>
  <div>
    <div v-for="(news, number) in index" :key="number">
      <NewsCard
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
  components: {
    NewsCard,
  },
};
</script>

<style scoped>
img {
  height: 50px;
  width: 50px;
}
</style>
