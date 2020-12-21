<template>
  <div class="header">
    <div class="left_box">
      <div class="admin_mark" v-if="currentUser">Admin mode</div>
    </div>
    <div class="right_container">
      <div class="links_container">
        <a href="http://abehiroshi.la.coocan.jp/">
          <img alt="C3 logo" src="../../assets/C3icon.png" width="30" hspace="4" class="defaultDropShadow">
        </a>
        <a href="https://twitter.com/c3_kyutech">
          <img alt="twitter logo" src="../../assets/twitter.svg" width="35" hspace="10" class="defaultDropShadow">
        </a>
        <a href="https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw?pbjreload=102">
          <img alt="youtube logo" src="../../assets/youtube.svg" width="35" class="defaultDropShadow">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'Header',
  data: () => ({
    currentUser: null
  }),
  created() {
    let self = this
    console.info('Login check')
    firebase.auth().onAuthStateChanged((user) => {
      console.info(user)
      self.currentUser = user
    })
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
.admin_mark {
  background-color: $admin-color;
  color: $base-color;
  padding: 0.5rem 1rem;
  border-radius: 10px;
}
.links_container {
  cursor: pointer;
}
</style>
