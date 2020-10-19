<template>
  <div>
    <h1>SING OUT</h1>
    <button @click="singout">Sing out Now!!</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "singout",
  methods: {
    singout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logout!");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
