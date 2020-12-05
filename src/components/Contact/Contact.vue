<template>
  <div id="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section-title>Content</section-title>
    <Button v-model="isActive"></Button>

    <div :class="{on: isActive}" id="content">
      <form name="Form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3EvzAo-J6GaAaqs1b96CKOl-W7-j55ZMPAaADcLS3PXNyyw/formResponse" target="dummyIframe" @submit="fvalidate">
        <table>
          <tr>
            <td class="label">氏名*</td>
            <td class="textbox"><input class="input" type="text" name="entry.240185004" v-model="fname" required></td>
          </tr>
          <tr>
            <td class="label">メールアドレス*</td>
            <td class="textbox"><input class="input" type="text" name="entry.503816471" placeholder="example@mail.co.jp" v-model="mail" required></td>
          </tr>
          <tr>
            <td class="label">お問い合わせ内容*</td>
            <td class="textbox"><textarea name="entry.1170722932" placeholder="お気軽にお問い合わせください。" v-model="msg" required></textarea></td>
          </tr>
        </table>

        <button name="button" type="submit" value="Submit" id="subm">送信</button>
      </form>

      <iframe name="dummyIframe" style="display:none;"></iframe>

      <div id="thxMessage" :class="{Fon: formAccept}">お問い合わせありがとうございました。</div>
    </div>


  </div>
</template>

<script>
import Button from '@/components/Contact/_ContactButton.vue'
import SectionTitle from '../miscs/SectionTitle.vue';

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
    Button,
    SectionTitle
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

<style lang="scss" scoped>
#main {
  padding: 20px;
  text-align: center;
  background-color: $brand-color;
  padding: $content-padding-y $content-padding-x;
}

#title {
  text-decoration: underline;
}

#content {

  margin-top: 10px;
  height: 0;
  transition: 1s;
  overflow: hidden;
/*  border-radius: $border-radius; */
  background-color: white;
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

table {
  margin: 0 auto;
}

.label {
  text-align: left;
}

.textbox {
  text-align: right;
}

@media (min-width: 600px) {
  #content {
    width: 500px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .input {
    width: 200px;
    height: 30px;
  }

  table {
    font-size: 1.2rem;
  }
}

@media (max-width: 599px) {
  #content {
    margin: 20px 5px auto;
  }
}

</style>
