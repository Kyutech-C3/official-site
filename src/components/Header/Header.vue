<template>
  <div class="header">
    <div class="left_box">
      <div class="admin_toolbox" v-if="$root.currentUser" >
        <div class="admin_mark" :class="{is_admin: $root.isAdmin}" @click="changeAdminMode">
          {{ $root.isAdmin ? 'Admin' : 'Preview' }} mode
        </div>
        <div>
          <router-link to="signout">Sign Out</router-link>
        </div>
      </div>
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
export default {
  name: 'Header',
  data: () => ({
    currentUser: null
  }),
  methods: {
    changeAdminMode() {
      this.$root.isAdmin = !this.$root.isAdmin
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
.admin_toolbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    margin-left: 1em;
  }
  div:first-child {
    margin-left: 0;
  }
}
.admin_mark {
  background-color: $base-color;
  color: $admin-color;
  padding: 0.5rem 1rem;
  border: solid 2px $admin-color;
  border-radius: 10px;
  cursor: pointer;
}
.is_admin {
  background-color: $admin-color;
  color: $base-color;
}
.links_container {
  cursor: pointer;
}
</style>
