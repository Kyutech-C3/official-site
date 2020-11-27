<template>
  <div>
    <div class="newsIndex">
      <div class="card" v-for="(news, number) in index" :key="number">
        <news-card 
          :title="news.title"
          :description="news.description"
          :imageUrl="news.imageURL"
          :date="news.date"
          @parent-event="openModal(news)"
        />
      </div>
    </div>
    <Modal :index="postItem" ref="modal" />
  </div>
</template>

<script>
import firebase from "firebase";
import Modal from "./_NewsUpdateForm.vue";
import NewsCard from "./_NewsCard.vue";

export default {
  name: "Index",
  data() {
    return {
  
      index: [],
      postItem: "",
    };
  },
  methods: {
    openModal(item) {
      this.$refs.modal.showContent = true;
      this.$refs.modal.data = item;
      console.log(item);
    },
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
    Modal,
    NewsCard,
  },
};
</script>

<style lang="scss" scoped>
.newsIndex {
  overflow-x: scroll;
  white-space: nowrap;
}
.card {
  white-space: nowrap;
  display: inline-block;
  margin: 0 10px;
}
</style>

