<template>
  <div class="newsIndex">
    <div class="loader-wrap" v-show="loading">
      <div class="loader">Loading...</div>
    </div>
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
import NewsCard from "./NewsCard.vue";

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
      loading: true,
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
        _this.loading = false;
      }
    );
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
  white-space: nowrap;
}
.card {
  display: inline-block;
  margin-left: 15px;
}
.card:nth-last-child(0) {
  margin-right: 15px;
}

//Loading
.loader-wrap {
  align-items: center;
}

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>
