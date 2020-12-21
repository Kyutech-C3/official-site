<template>
  <div id="main">
    <section-title>Content</section-title>
    <Button v-model="isActive"></Button>
    <div :class="{on: isActive}" class="modalBackground" @click="closeModal"></div>
    <div :class="{on: isActive}" class="modal defaultDarkShadow" id="content">
      <h3>お問い合わせ</h3>
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
            this.isActive = false;
          }, 3000);
        }
        return true;
      } else {
        return false;
      }
    },
    closeModal() {
      this.isActive = false
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


.modalBackground {
  display: none;
  position: fixed;
  top: 0;left: 0;
  width: 100%;
  height: 100%;
  background-color: #323232aa;
  backdrop-filter: blur(10px);
}

.modal {
  display: none;
  position: fixed;
  padding: 3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  background-color: #323232;
  border-radius: $border-radius;
}

.on {
  display: block;
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
</style>
