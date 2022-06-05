<template>
  <div>
    <div id="nav">
      <router-link id="logo-url" to="/">
        <img src="../assets/img/logo.png">
      </router-link>
      <MenuConntainer/>
    </div>
  </div>
</template>

<script>
import MenuConntainer from './MenuConntainer.vue'

export default {
  name: "Navbar",
  components: {
    MenuConntainer
  }
}
</script>

<style scoped>
  #nav {
    background-color: #c0c0c0;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* min-height: 40px; */
  }

  #nav #logo-url {
    margin: auto;
    margin-right: 0;
  }

  #logo {
    /* width: 40px;
    height: 40px; */
  }

  #nav a {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }

  #nav a:hover {
    color: #FFF;
  }
</style>