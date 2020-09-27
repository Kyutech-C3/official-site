<template>
  <div>
    <div id="Container">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <p id="title">Contact</p>
      <div @click="change()" class="button">
        <div id="zoom">
          <p id="form">連絡はこちら</p>
          <img :class="{on :isActive}" src="@/assets/na-su.png">
        </div>
      </div>
    </div>
    <div :class="{on: isActive}" id="content">
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3EvzAo-J6GaAaqs1b96CKOl-W7-j55ZMPAaADcLS3PXNyyw/formResponse" onsubmit="doSomething();return false;">
        <label for="name">氏名</label>
        <input id="name" type="text" name="entry.240185004">
        <br>
        <label for="email">メールアドレス</label>
        <input id="email" type="text" name="entry.503816471" placeholder="example@mail.co.jp">
        <br>
        <label for="msg">お問い合わせ内容</label>
        <textarea id="msg" name="entry.1170722932" placeholder="お気軽にお問い合わせください。"></textarea>
        <br>
        <button type="submit" name="button" value="送信">送信</button>
      </form>
    </div>
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
  /*display: flex;
  justify-content: center;
  border: 4px solid;*/
}

#title {
  text-decoration: underline;
}

#form {
  margin: auto 0;
  margin-right: 10px;
}

.button {
  width: 300px;
  margin: 0 auto;
  cursor: pointer;
  overflow: hidden;
  border: 4px solid;
}

#zoom {
  display: flex;
  justify-content: center;
}

.button img{
  width: 100px;
  height: auto;
  transition: 1s;
}

#zoom:hover {
  color: #00ff00;
  transform: scale(1.2,1.2);
}

#content {
  margin-top: 10px;
  height: 0;
  transition: 1s;
  overflow: hidden;
}
#content.on{
  height: auto;
  padding: 20px;
  border: 4px solid;
}

img.on{
  transform: rotate(-180deg);
}

</style>
