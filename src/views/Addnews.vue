<template>
  <div>
    <input v-model="title" placeholder="タイトル" class="title" required>
    <br />
    <textarea v-model="body" placeholder="内容" class="body" required></textarea>
    <br />
    <input type="date" name="num01" autocomplete="off" v-model="date">
    <br />
    <input type="file" name="example" accept="image/jpeg, image/png">
    <br />
    <button @click="console">確認</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
    body: "",
    date: ""
  }),
  methods: {
    console  () {
      console.log(this.date)
    }
  }
}
</script>

<style scoped>
.title{
  padding: 5px;
  margin: 15px;
}
.body{
  padding: 5px;
  margin: 15px;
}
</style>
