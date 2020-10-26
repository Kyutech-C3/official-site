<template>
  <div id="overlay" v-show="showContent">
    <div id="content">
      <h1>Newsの編集</h1>
      <form>
        <p>タイトルを入力してください</p>
        <input
          v-model="data.title"
          placeholder="タイトル"
          class="title"
          required
        />
        <br />
        <p>Newsの内容を入力してください</p>
        <textarea
          v-model="data.description"
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
          v-model="data.date"
          required
        />
        <br />
      </form>
      <br />
      <button @click="close">戻る</button>
      <button @click="updateNews">保存</button>
      <button @click="deleteNews">削除</button>
    </div>
  </div>
</template>

<script>
import { Newsdb } from "../../plugins/firebase.js";
import "firebase/firestore";

export default {
  name: "Modal",
  data() {
    return {
      showContent: false,
      data: [],
    };
  },
  props: ["index"],
  methods: {
    async updateNews() {
      console.log(this.data);
      if (this.title !== "" && this.description !== "" && this.date !== "") {
        var _this = this;
        const updateRef = Newsdb.doc(_this.data.id);
        await updateRef
          .update({
            title: _this.data.title,
            description: _this.data.description,
            date: _this.data.date,
          })
          .then(() => {
            this.showContent = false;
          })
          .catch(function() {
            console.log("err");
          });
      } else {
        alert("記入していない部分があります");
      }
    },
    close() {
      this.showContent = false;
    },
    async deleteNews() {
      var _this = this;
      const updateRef = Newsdb.doc(_this.data.id);
      await updateRef
        .delete()
        .then(() => {
          this.showContent = false;
        })
        .catch(function() {
          console.log("err");
        });
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
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  z-index: 2;
  width: 50%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
  background-color: white;
}
</style>
