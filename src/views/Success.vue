<template>
  <div class="Success">
    <h1>サインイン成功</h1>
    <h2>ようこそ!アドレス名:{{ useremail }}さん</h2>
   <button @click="signOut">サインアウト</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Success',
  data () {
    return {
      useremail: firebase.auth().currentUser.email
    }
  },
  methods:{
    signOut: function() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    }
  }
}
</script>