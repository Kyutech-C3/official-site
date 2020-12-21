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
    <mavon-editor language="ja" v-model="editingNews.markdown" @change="generateHTML" @save="save"/>
  </div>
</template>
<script>
import MavonEditor from "mavon-editor";
import { Newsdb } from "@/plugins/firebase.js";
//import { storage } from "@/plugins/firestorage.js";
import "firebase/firestore";

export default {
  components: {
    'mavon-editor': MavonEditor.mavonEditor
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
        console.log("Updated Successfully")
      }catch(e) {
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