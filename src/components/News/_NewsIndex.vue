<template>
  <div>
    <div v-for="(news, number) in index" :key="number">
      <NewsCard
        :title="news.title"
        :description="news.description"
        :imageUrl="news.imageURL"
        :date="news.date"
        @parent-event="openModal(news)"
      />
    </div>
    <Modal :index="postItem" ref="modal" />
    <button @click="console">open</button>
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
      db: null,
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
    console() {
      console.log(this.index);
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

<style scoped>
img {
  height: 50px;
  width: 50px;
}
</style>
