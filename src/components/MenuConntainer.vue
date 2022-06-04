<template>
  <component :is="currentMenu" :right="side === 'right' ? true: false">
    <router-link class="link" to="/">
        <span>Home</span>
    </router-link>
    <router-link class="link" to="/list">
        <span>Alerts</span>
    </router-link>
  </component>
</template>

<script>
  import Menu from './Menu/Menu.vue';
  import Slide from './Menu/Slide.vue';
  
  export default {
    data() {
      return {
        menus: {
          Slide: { buttonText: 'Slide' },
        },
        side: 'left',
        currentMenu: 'Slide'
      };
    },
    components: {
      Slide,
      Menu
    },
    methods: {
      changeMenu(menu) {
        this.currentMenu = menu.replace(/ +/g, '').toLowerCase();
        return this.currentMenu;
      },
      changeSide(side) {
        this.side = side;
      }
    }
  };
</script>

<style>
.link{
  cursor: pointer;
}
</style>