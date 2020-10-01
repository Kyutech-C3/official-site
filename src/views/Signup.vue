<template>
  <div class="signup">
    <h1>アカウント登録</h1>
    <input type="text" placeholder="ユーザー名" v-model="username">
    <input type="password" placeholder="パスワード" v-model="password">
    <button v-on:click="signUp">登録</button>
    <p>
      <router-link to="/signin">サインインはこちらからできます</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('アカウント登録が完了しました。サインイン画面に飛びます', user.email)
          this.$router.push('/signin')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>