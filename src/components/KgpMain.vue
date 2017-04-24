<template>
  <div class="main">
    <div class="main__logo">
      <svg alt="ReplacePlastic" class="main__wortmarke" width="481.89px" height="175.75px" viewBox="0 0 481.89 175.75">
        <use xlink:href="#wortmarke"></use>
      </svg>
    </div>
    <kgp-form></kgp-form>
    <kgp-scan></kgp-scan>
  </div>
</template>

<script>
import KgpForm from './KgpForm';
import KgpScan from './KgpScan';

export default {
  name: 'kgp-main',
  data() {
    return {
    };
  },
  components: {
    KgpForm,
    KgpScan,
  },
};
</script>

<style lang="scss">
  .main {
    &__logo {
      text-align: center;
    }
    &__wortmarke {
      fill: #fff;
      max-width: 13.4782608696vh;
      height: auto;
    }
  }

</style>
