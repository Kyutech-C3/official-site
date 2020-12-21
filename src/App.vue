<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

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
