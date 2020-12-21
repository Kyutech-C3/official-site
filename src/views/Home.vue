<template>
  <div>
    <Header />
    <Top />
    <News />
    <Members />
    <Activity />
    <Contact />
    <Footer />
  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header/Header'
import Top from '@/components/Top/Top'
import News from '@/components/News/News'
import Members from '@/components/Members/Members'
import Activity from '@/components/Activity/Activity'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default {
  components: {
    Header,
    Top,
    News,
    Members,
    Activity,
    Contact,
    Footer,
  }
}
</script>