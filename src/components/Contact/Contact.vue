<template>
  <div id="main">
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
      <form name="Form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3EvzAo-J6GaAaqs1b96CKOl-W7-j55ZMPAaADcLS3PXNyyw/formResponse" target="dummyIframe" @submit="fvalidate">
        <div class="item">
          <label for="name" id="mrgs">氏名*</label>
          <input id="name" type="text" name="entry.240185004" v-model="fname" required>
        </div>
        <div class="item">
          <label for="email" id="mrgm">メールアドレス*</label>
          <input id="email" type="text" name="entry.503816471" placeholder="example@mail.co.jp" v-model="mail" required>
        </div>
        <div class="item">
          <label for="msg" id=mrgm>お問い合わせ内容*</label>
          <textarea id="msg" name="entry.1170722932" placeholder="お気軽にお問い合わせください。" v-model="msg" required></textarea>
        </div>
        <button name="button" type="submit" value="Submit" id="subm">送信</button>
      </form>
      
      <iframe name="dummyIframe" style="display:none;"></iframe>

      <div id="thxMessage" :class="{Fon: formAccept}">お問い合わせありがとうございました。</div>
    </div>


  </div>
</template>

<script>
export default{
  name: 'Contact',
  data () {
    return {
      isActive: false,
      formAccept: false,
      fname: '',
      mail: '',
      msg: ''
    }
  },
  methods:{
    change () {
      this.isActive = !this.isActive;
    },

    fvalidate () {
      if (this.fname && this.mail && this.msg) {

        if(!this.formAccept){
          this.formAccept = true;

          setTimeout(() => {
            this.formAccept = false;
          }, 3000);
        }

        return true;
      } else {
        return false;
      }
    }
  }
}

</script>

<style lang="scss">

#main {
  text-align: center;
}


#title {
  text-decoration: underline;
}

p#form {
  margin: auto 0;
  margin-right: 10px;
}

.button {
  width: 300px;
  margin: 0 auto;
  cursor: pointer;
  overflow: hidden;
  border: 4px solid;
  border-radius: $border-radius;
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
  color: #00ff00;

  transform: scale(1.2,1.2);
}

#content {
  margin-top: 10px;
  height: 0;
  transition: 1s;
  overflow: hidden;
  border-radius: $border-radius;
  background-color: #b5fff7;
}

#content.on{
  height: auto;
  padding: 20px;
}

img.on{
  transform: rotate(-180deg);
}

#thxMessage {
  margin-top: 10px;
  opacity: 0;
  transition: .3s;
}

#thxMessage.Fon {
  opacity: 1;
}

.item {
  text-align: left;
  display: flex;
  justify-content: center;
  margin: 10px 10px;
}

label#mrgs {
  margin-right: 100px;
}
label#mrgm {
  margin-right: 20px;
}

</style>
