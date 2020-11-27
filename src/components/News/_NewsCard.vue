<template>
  <div class="card">
    <div id="img">
      <img :src="imageUrl" @click="childeEvent" />
    </div>
    <div id="art">
      <h2>{{ title }}</h2>
      <p class="description" v-html="description"></p>
      <p id="time">{{ date }}</p>
    </div>
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
  methods: {
    childeEvent() {
      this.$emit("parent-event");
    },
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
  box-shadow: 2px 2px 2px black;
  background-color: $base-color;
  overflow: hidden;
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
  height: 50%;
  border-radius: 0 0 8px 8px;
  padding: 6px 17px 0 17px;
}
h2 {
  text-align: left;
  margin: 0;
  margin-bottom: 0.3rem;
  width: 9rem;
  height: 2rem;
  overflow: hidden;
}
p.description {
  position: absolute;
  text-align: left;
  margin: 0;
  overflow: hidden;
}
#time {
  position: absolute;
  bottom: 0.6rem;
  text-align: left;
  font-size: 9px;
  background-color: #fff;
}
</style>
