<template>
  <div>
    <div id="Container">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <p id="title">Contact</p>
      <div @click="change()"> <img id="button" src="@/assets/na-su.png"> </div>
    </div>
    <div v-if="isActive" id="content">aaaa</div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      isActive: false
    }
  },
  methods:{
    change () {
      this.isActive = !this.isActive;
    }
  }
}

</script>

<style>
#Container {
  display: flex;
  justify-content: center;
}

#title {
  margin: auto 0;
  margin-right: 20px;
}

#button {
  width: 100px;
  height: auto;
}

#content {
  margin-top: 50px;
}
</style>
