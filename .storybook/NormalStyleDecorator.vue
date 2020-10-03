<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
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