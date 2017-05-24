<template>
  <div class="header">
    <svg class="header__logo" width="277.8px" height="246.61px" viewBox="0 0 277.8 246.61">
      <use xlink:href="#bildmarke"></use>
    </svg>
    <kgp-menu></kgp-menu>
    <div class="header__border"></div>
  </div>
</template>


<script>
import KgpMenu from './KgpMenu';

export default {
  components: {
    KgpMenu,
  },
  name: 'kgp-header',
};
</script>

<style lang="scss">
.header {
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10vh;
    text-align: center;
    &__logo {
        max-width: 100%;
        height: 9vh;
        stroke: #033c6a;
        fill: transparent;
        margin-top: .5vh;
    }
    &__border {
        background: url('../../assets/header-border.png') 0 0 repeat-x;
        position: absolute;
        bottom: -16px;
        width: 100%;
        height: 17px;
    }
}
</style>
