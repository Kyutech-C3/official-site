<template>
  <div @click="change()" class="button">
    <div id="zoom">
      <p id="form">連絡はこちら</p>
      <img :class="{on :value}" src="@/assets/na-su.png">
    </div>
  </div>
</template>

<script>
export default{
  props: ['value'],
  methods:{
    change () {
      this.$emit('input', !this.value);
    }
  }
}
</script>

<style lang="scss">
p#form {
  margin: auto 0;
  margin-right: 10px;
}

img.on{
  transform: rotate(-180deg);
}

.button {
  width: 300px;
  margin: 0 auto;
  cursor: pointer;
  overflow: hidden;
/*  border: 4px solid; */
  border-radius: $border-radius;
  font-weight: bold;
  font-size: 1.2rem;
  color: $brand-color;
  background-color: #702f0c;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .5);
}

#zoom {
  display: flex;
  transition: .1s;
  justify-content: center;
}

.button img{
  width: 100px;
  height: auto;
  transition: 1s;
}

#zoom:hover {
  transform: scale(1.2,1.2);
}
</style>
