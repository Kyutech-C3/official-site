<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <p>タイトルを入力してください</p>
      <input v-model="title" placeholder="タイトル" class="title" required />
      <br />
      <p>Newsの内容を入力してください</p>
      <textarea
        v-model="description"
        placeholder="内容"
        class="description"
        cols="30"
        rows="5"
        required
      ></textarea>
      <br />
      <p>開催日時を教えてください</p>
      <input
        type="date"
        name="num01"
        autocomplete="off"
        v-model="date"
        required
      />
      <br />
      <p>画像を挿入してください</p>
      <input
        type="file"
        name="example"
        accept="image/jpeg, image/png"
        required
      />
      <br />
      <button @click="addNews">投稿</button>
    </v-form>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  data: () => ({
    db: null,
    valid: true,
    title: "",
    description: "",
    date: "",
  }),
  created: function() {
    this.db = firebase.firestore();
  },
  methods: {
    addNews: function() {
      // eslint-disable-next-line no-unused-vars
      var _this = this;
      this.db
        .collection("news")
        .add({
          title: _this.title,
          description: _this.description,
          date: _this.date,
        })
        .then(function() {
          _this.title = "";
          _this.description = "";
        })
        .catch(function() {
          console.log("err");
        });
    },
    console() {
      console.log(this.date);
    },
  },
};
</script>

<style scoped>
.title {
  padding: 5px;
  margin-bottom: 10px;
}
.body {
  padding: 5px;
  margin-bottom: 10px;
}
button {
  margin: 10px;
}
</style>
