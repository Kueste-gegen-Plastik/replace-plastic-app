<template>
  <div class="main" id="main">
    <div class="main__scroll" v-bind:class="getStepClass()">
        <div class="main__logo" v-bind:class="{ 'main__logo--hidden' : step > 1 }">
        <svg alt="ReplacePlastic" class="main__wortmarke" width="481.89px" height="175.75px" viewBox="0 0 481.89 175.75">
            <use xlink:href="#wortmarke"></use>
        </svg>
        </div>
        <kgp-form></kgp-form>
        <kgp-scan></kgp-scan>
        <kgp-product product="product"></kgp-product>
    </div>
  </div>
</template>

<script>
import KgpForm from './KgpForm';
import KgpScan from './KgpScan';
import KgpProduct from './KgpProduct';
import EventBus from '../lib/EventBus';
import VueScrollTo from 'vue-scrollto';

export default {
  name: 'kgp-main',
  data() {
    return {
      product: '',
      step: 1,
      user: {}
    };
  },
  methods: {
    switchStep(step) {
      this.step = step;
      VueScrollTo.scrollTo('#step_'+this.step, 500, {
        container: '#main'
      })
    },
    getStepClass() {
        var retVal = {};
        retVal['main__scroll--step-' + this.step] = true;
        return retVal;
    }
  },
  mounted() {
    EventBus.$on('setProduct', (barcode) => {
      this.product = barcode;
      this.switchStep(3);
    });
    EventBus.$on('setUser', (user) => {
      this.user = user;
      this.switchStep(2);
    });
  },
  components: {
    KgpForm,
    KgpScan,
    KgpProduct,
  },
};
</script>

<style lang="scss">
  .main {
    overflow: hidden;
    height: 100%;
    width: 100%;
    &__logo {
      text-align: center;
      transition: transform .5s ease-out;
      &--hidden {
        transform: translate3D(0,-500px, 0);
      }
    }
    &__scroll {
        will-change: transform;
        transition: transform .5s ease-out;
        &--step-1 {
            transform: translate3D(0,0,0);
        }
        &--step-2 {
            transform: translate3D(0,-32%,0);
        }
        &--step-3 {
            transform: translate3D(0,-64%,0);
        }
    }
    &__wortmarke {
      fill: #fff;
      max-width: 13.4782608696vh;
      height: auto;
    }
  }
</style>
