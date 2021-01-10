<template>
  <div>
    <h1>SIGN OUT</h1>
    <button @click="signout">Sign out Now!!</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signout",
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logout!");
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
