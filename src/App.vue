<template>
  <div>
    <Navbar/>
    <div>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  data: function() {
    return {
      app_name: "Luiz Cosméticos"
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>