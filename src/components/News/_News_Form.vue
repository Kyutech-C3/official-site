<template>
  <div>
    <form>
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
        @change="setImage"
        required
      />
      <br />
    </form>
    <button @click="addNews">投稿</button>
  </div>
</template>

<script>
import { Newsdb } from "../../plugins/firebase.js";
import { storage } from "../../plugins/firestorage.js";
import "firebase/firestore";

export default {
  data: () => ({
    db: null,
    valid: true,
    title: "",
    description: "",
    date: "",
    img: null,
    imgURL: "",
  }),
  methods: {
    addNews() {
      if (this.title !== "" && this.description !== "" && this.date !== "") {
        var _this = this;
        const nowAt = new Date().getTime();
        const uploadTask = storage
          .ref()
          .child(`news/${nowAt}${_this.img[0].name}`);
        console.log(_this.img[0].name);
        uploadTask.put(_this.img[0]).then((snapshot) => {
          snapshot.ref
            .getDownloadURL()
            .then(async (downloadURL) => {
              _this.imgURL = downloadURL;
            })
            .then(function () {
              Newsdb.add({
                title: _this.title,
                description: _this.description,
                date: _this.date,
                imageURL: _this.imgURL,
              });
            })
            .then(function () {
              _this.title = "";
              _this.description = "";
              _this.date = "";
            })
            .catch(function () {
              console.log("err");
            });
        });
      } else {
        alert("記入していない部分があります");
      }
    },
    setImage: function (e) {
      e.preventDefault();
      var file = e.target.files;
      console.log(file);
      this.img = file;
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
