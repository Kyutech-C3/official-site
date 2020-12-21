<template>
  <div id="app">
    <notifications group="newsEdit" position="top center"/>
    <div class="container">
      <my-header />
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header/Header'
export default {
  components: {
    myHeader: Header
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
  background-color: $base-color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}
.container {
  background-color: $base-color;
}
@media screen and (min-width: $max-width) {
  .container {
    margin-left: 50%;
    transform: translateX(-50%);
    width: $max-width;
  }
}
</style>
