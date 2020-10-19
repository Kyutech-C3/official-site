<template>
  <div class="signin">
    <h1>サインイン</h1>
    <input type="text" placeholder="ユーザ名" v-model="username" />
    <input type="password" placeholder="パスワード" v-model="password" />
    <button @click="signIn">サインイン</button>
    <p>
      アカウント登録はしましたか? <br />
      <router-link to="/signup"
        >ここをクリックしてアカウント登録をしてください</router-link
      >
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          (user) => {
            console.log(user);
            alert("サインイン成功です。");
            this.$router.push("/success");
          },
          (error) => {
            alert(error.message);
          }
        );
    },
  },
};
</script>
