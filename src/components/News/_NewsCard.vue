<template>
  <div class="card">
    <table>
      <tr>
        <article id="img">
          <img :src="imageUrl" @click="childeEvent" />
        </article>
      </tr>
      <tr>
        <article id="art">
          <h2>{{ title }}</h2>
          <p v-html="description"></p>
          <p id="time">{{ date }}</p>
        </article>
      </tr>
    </table>
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
  width: 14rem;
  height: 21rem;
  background-color: $accent-color;
  border-collapse: separate;
  border-radius: 10px;
}
img {
  display: block;
  margin: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 13.8rem;
  height: 10.35rem;
  border-radius: 8px 8px 0 0;
}
#img {
  background-color: $brand-color;
  height: 10.35rem;
  width: 13.8rem;
  // color: $text-color;
  border-radius: 8px 8px 0 0;
}
#art {
  background: linear-gradient(135deg, $base-color, $brand-color);
  height: 10.35rem;
  width: 13.8rem;
  // color: $text-color;
  border-radius: 0 0 8px 8px;
}
h2 {
  text-align: left;
  margin: 0;
  padding: 6px 17px 0px;
  width: 9rem;
  height: 2rem;
  overflow: hidden;
}
p {
  text-align: left;
  margin: 0;
  padding: 0 17px;
  width: 11rem;
  height: 5.8rem;
  overflow: hidden;
}
#time {
  width: 12rem;
  margin: 0.6rem 0;
  text-align: left;
  font-size: 9px;
}
</style>
