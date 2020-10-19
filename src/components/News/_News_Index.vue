
<template>
<div>
    <li v-for="news in index" :key="news">
      {{news.title}}
    </li>
    <button @click="console">open</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return{
      db: null,
      index: []
    }
  },
  methods: {
    console () {
      console.log(this.index)
    }
  },
  created: function () {
    this.db = firebase.firestore()
    var _this = this
    this.db.collection('news').orderBy('date','desc').onSnapshot(function (querySnapshot) {
      _this.index = []
      querySnapshot.forEach(function (doc) {
        var data = doc.data()
        data.id = doc.id
        _this.index.push(data)
      })
    })
  }
};
</script>
