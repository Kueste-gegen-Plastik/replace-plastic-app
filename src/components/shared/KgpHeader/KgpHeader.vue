<template>
  <div class="header">
    <svg v-on:click="goHome()" class="header__logo" v-bind:class="{ 'header__logo--open' : menuOpen }" width="277.8px" height="246.61px" viewBox="0 0 277.8 246.61">
      <use xlink:href="#bildmarke"></use>
    </svg>
    <kgp-menu></kgp-menu>
    <div class="header__border"></div>
  </div>
</template>


<script>
import KgpMenu from './KgpMenu/KgpMenu';

export default {
    name: 'kgp-header',
    components: {
        KgpMenu
    },
    methods: {
        goHome() {
            this.$router.push('/');
        }
    },
    computed: {
        menuOpen() {
            return this.$store.state.menuOpen;
        }
    },
};
</script>

<style lang="scss">
.header {
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 7vh;
    text-align: center;
    &__logo {
        max-width: 100%;
        height: 5.6vh;
        stroke: #033c6a;
        fill: transparent;
        margin-top: 1.2vh;
        &--open {
            z-index: 999;
            stroke: #fff;
        }
    }
    &__border {
        background: url('img/header-border.png') 0 0 repeat-x;
        position: absolute;
        bottom: -16px;
        width: 100%;
        height: 17px;
    }
}
</style>
