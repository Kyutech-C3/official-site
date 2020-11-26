<template>
  <div class="header">
    <a href="http://abehiroshi.la.coocan.jp/"><img alt="C3 logo" src="../../assets/C3icon.png" width="30" hspace="4"></a>
    <a href="https://twitter.com/c3_kyutech"><img alt="twitter logo" src="../../assets/twitter.svg" width="35" hspace="10"></a>
    <a href="https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw?pbjreload=102"><img alt="youtube logo" src="../../assets/youtube.svg" width="35"></a>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: absolute;
  top: 1%;
  right: 2%;
}
</style>
