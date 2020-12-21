<template>
  <div class="news_edit defaultShadow" v-if="editingNews" >
    <div class="date_edit">
      <label>投稿日</label>
      <input
        type="date"
        autocomplete="off"
        v-model="editingNews.date"
        v-if="editingNews"
        required
      />
    </div>
    <mavon-editor ref="mavonEditor" language="ja" v-model="editingNews.markdown" @change="generateHTML" @imgAdd="uploadImage" @save="save"/>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import { Newsdb } from "@/plugins/firebase.js";
import { storage } from "@/plugins/firestorage.js";
import "firebase/firestore";

export default {
  components: {
    'mavon-editor': mavonEditor
  },
  data: () => ({
    editingNews: null
  }),
  methods: {
    editNews(news) {
      console.log(news)
      if(news === null) this.editingNews = {
        id: null
      }
      else this.editingNews = news
    },
    uploadImage(filename, imgfile) {
      const now = Date.now().toString()
      storage
        .ref()
        .child(`news/${this.editingNews.id}-${now}-${filename}`)
        .put(imgfile)
        .then((snapShot) => {
          return snapShot
            .ref
            .getDownloadURL()
        })
        .then((url) => {
          console.log(mavonEditor)
          console.log(url)
          this.$refs.mavonEditor.$img2Url(filename, url)
        })
        .catch((e) => {
          alert(`Error on uploading image ${filename}: ${e}`)
        })
    },
    extractTitle(html) {
      const div = document.createElement('div')
      div.innerHTML = html
      const firstH1Elem = div.querySelector('h1')
      return firstH1Elem.textContent || firstH1Elem.innerText || ""
    },
    stripHTMLTags(html) {
      const div = document.createElement('div')
      div.innerHTML = html
      const firstH1Elem = div.querySelector('h1')
      if(firstH1Elem !== null) firstH1Elem.remove()
      return div.textContent || div.innerText || ""
    },
    generateHTML(markdown, html) {
      console.log(html)
      this.editingNews.html = html
      this.editingNews.description = this.stripHTMLTags(this.editingNews.html)
      this.editingNews.title = this.extractTitle(html)
      console.log(this.editingNews)
    },
    async save() {
      let news
      if(this.editingNews.id === null) {
        news = Newsdb.doc()
      } else {
        news = Newsdb.doc(this.editingNews.id)
      }
      try {
        await news.set(this.editingNews)
        console.log(this.$notify)
        this.$notify({
          group: 'newsEdit',
          type: 'success',
          title: 'セーブ成功',
          text: 'ニュースのセーブが成功しました。'
        })
        console.log("Updated Successfully")
      }catch(e) {
        this.$notify({
          group: 'newsEdit',
          type: 'error',
          title: 'セーブ失敗',
          text: 'ニュースのセーブが失敗しました。'
        })
        console.error(e)
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.news_edit {
  padding: 1rem;
  background-color: $base-color;
  border-radius: $border-radius;
}
.date_edit {
  padding: 1rem;
}
.date_edit label {
  margin-right: 1rem;
}
</style>