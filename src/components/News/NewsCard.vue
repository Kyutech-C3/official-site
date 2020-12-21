<template>
  <div class="card defaultShadow">
    <div class="editToolBar" v-if="$root.isAdmin">
      <button @click="$emit('edit')" >Edit</button>
    </div>
    <div id="img">
      <img :src="imageUrl"/>
    </div>
    <div id="art">
      <h2>{{ title }}</h2>
      <p class="description" v-html="description"></p>
    </div>
    <p id="time">{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    title: String,
    description: String,
    imageUrl: String,
    date: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 14rem;
  height: 21rem;
  border-collapse: separate;
  border-radius: 10px;
  background-color: $base-color;
  overflow: hidden;
}
.editToolBar {
  position: absolute;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#img {
  height: 50%;
}
#art {
  //background: linear-gradient(135deg, $base-color, $brand-color);
  // color: $text-color;
  border-radius: 0 0 8px 8px;
  padding: 6px 17px 13px 17px;
}
h2 {
  text-align: left;
  margin: 0;
  margin-bottom: 0.3rem;
  height: 2rem;
  overflow: hidden;
}
p.description {
  text-align: left;
  margin: 0;
  overflow: hidden;
  white-space: normal;
}
#time {
  position: absolute;
  bottom: 0.6rem;
  text-align: left;
  font-size: 9px;
  padding: 6px 17px 0 17px;
}
</style>
