<template>
  <div  class="newsIndex">
    <div class="card" v-for="(news, number) in index" :key="number">
      <table>
        <tr>
          <article id="img">
            <img :src="news.imageURL"/>
          </article>
        </tr>
        <tr>
          <article id="art">
            <h2>{{ news.title }}</h2>
            <p v-html="news.description"></p>
            <p id="time">{{ news.date }}</p>
          </article>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
// import NewsCard from "./_NewsCard.vue";

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
  // components: {
  //   NewsCard,
  // },
};
</script>

<style lang="scss" scoped>
.newsIndex {
  overflow-x: auto;
  white-space: nowrap;
}
.card {
  display: inline-block;
  width: 14rem;
  height: 21rem;
  background-color: $accent-color;
  border-collapse: separate;
  border-radius: 10px;
  margin-top: 2px;
  margin-left: 15px;
  margin-right: 15px;
}
img {
  display: block;
  margin: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 13.8rem;
  height: 10.35rem;
  object-fit: cover; //画像の縦横比を変わらないようにしました
  border-radius: 8px 8px 0 0;
}
#img {
  background-color: $brand-color;
  height: 10.35rem;
  width: 13.8rem;
  object-fit: cover; //画像の縦横比を変わらないようにしました
  // color: $text-color;
  border-radius: 8px 8px 0 0;
}
#art {
  background: linear-gradient(135deg, $base-color, $brand-color);
  height: 10.35rem;
  width: 13.8rem;
  // color: $text-color;
  border-radius: 0 0 8px 8px;
}
h2 {
  text-align: left;
  margin: 0;
  padding: 6px 17px 0px;
  width: 9rem;
  height: 2rem;
  overflow: hidden;
}
p {
  text-align: left;
  margin: 0;
  padding: 0 17px;
  width: 11rem;
  height: 5.8rem;
  overflow: hidden;
}
#time {
  width: 12rem;
  margin: 0.6rem 0;
  text-align: left;
  font-size: 9px;
}
</style>
