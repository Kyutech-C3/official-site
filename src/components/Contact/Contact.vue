<template>
  <div id="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p id="title">Contact</p>
    <Button v-model="isActive"></Button>

    <div :class="{on: isActive}" id="content">
      <form name="Form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3EvzAo-J6GaAaqs1b96CKOl-W7-j55ZMPAaADcLS3PXNyyw/formResponse" target="dummyIframe" @submit="fvalidate">
        <div class="item">
          <label for="name" class="mrgs">氏名*</label>
          <input id="name" type="text" name="entry.240185004" v-model="fname" required>
        </div>
        <div class="item">
          <label for="email" class="mrgm">メールアドレス*</label>
          <input id="email" type="text" name="entry.503816471" placeholder="example@mail.co.jp" v-model="mail" required>
        </div>
        <div class="item">
          <label for="msg" class=mrgm>お問い合わせ内容*</label>
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
import Button from '@/components/Contact/_ContactButton.vue'

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
  components:{
    Button
  },

  methods:{

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

label.mrgs {
  margin-right: 100px;
}
label.mrgm {
  margin-right: 20px;
}



</style>
