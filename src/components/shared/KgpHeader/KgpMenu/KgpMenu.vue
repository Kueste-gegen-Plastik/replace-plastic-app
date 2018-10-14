<template>
  <div class="menu">
    <button @click="toggleMenu()"
      class="menu__button"
      v-bind:class="{ 'menu__button--open' : menuOpen }"
      type="button"
      aria-controls="menu__items"
      v-bind:aria-label="'Menü ' + menuOpen ? 'schließen' : 'öffnen'"
      v-bind:aria-expanded="menuOpen">
      <span class="menu__button-box">
        <span class="menu__button-inner"></span>
      </span>
    </button>
    <div v-bind:class="{ 'menu__items--open' : menuOpen }" id="menu__items" class="menu__items">
        <ul class="menu__nav">
            <li v-for="menuitem in menuitems" v-bind:key="menuitem.title" v-on:click="closeMenu" class="menu__item">
                <router-link class="menu__link" v-bind:to="{ name : menuitem.name }">
                    {{ menuitem.title }} <span class="menu__counter" v-if="menuitem.name == 'History' && historyCount > 0">{{ historyCount }}</span>
                </router-link>
            </li>
        </ul>
        <button v-if="canShare()" v-on:click="share()" class="menu__share">
            <span class="menu__shareinner">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 125" version="1.1" x="0px" y="0px">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M65.63645,75.10205 C61.86695,75.10205 58.80095,72.03555 58.80095,68.26605 C58.80095,64.49705 61.86695,61.43055 65.63645,61.43055 C69.40595,61.43055 72.47245,64.49705 72.47245,68.26605 C72.47245,72.03555 69.40595,75.10205 65.63645,75.10205 M27.87795,51.18905 C27.87795,47.41955 30.94445,44.35305 34.71345,44.35305 C38.48295,44.35305 41.54945,47.41955 41.54945,51.18905 C41.54945,54.95805 38.48295,58.02455 34.71345,58.02455 C30.94445,58.02455 27.87795,54.95805 27.87795,51.18905 M65.63645,25.37805 C69.40595,25.37805 72.47245,28.44455 72.47245,32.21355 C72.47245,35.98305 69.40595,39.04955 65.63645,39.04955 C61.86695,39.04955 58.80095,35.98305 58.80095,32.21355 C58.80095,28.44455 61.86695,25.37805 65.63645,25.37805 M65.63645,55.05255 C61.47495,55.05255 57.75845,56.98855 55.33445,60.00505 L47.03545,55.95205 C47.60945,54.47305 47.92745,52.86805 47.92745,51.18905 C47.92745,49.45905 47.58995,47.80755 46.98245,46.29155 L56.09445,41.34005 C58.50145,43.85555 61.88795,45.42705 65.63645,45.42705 C72.92245,45.42705 78.85045,39.49955 78.85045,32.21355 C78.85045,24.92755 72.92245,19.00005 65.63645,19.00005 C58.35045,19.00005 52.42295,24.92755 52.42295,32.21355 C52.42295,33.45805 52.59945,34.66205 52.92295,35.80455 L43.21295,41.08205 C40.91345,39.14505 37.94845,37.97505 34.71345,37.97505 C27.42745,37.97505 21.49995,43.90305 21.49995,51.18905 C21.49995,58.47455 27.42745,64.40255 34.71345,64.40255 C37.98745,64.40255 40.98495,63.20305 43.29545,61.22355 L52.65795,65.79605 C52.50545,66.59655 52.42295,67.42205 52.42295,68.26605 C52.42295,75.55205 58.35045,81.48005 65.63645,81.48005 C72.92245,81.48005 78.85045,75.55205 78.85045,68.26605 C78.85045,60.98055 72.92245,55.05255 65.63645,55.05255" fill="#004d8e"/>
                    </g>
                </svg>
                ReplacePlastic teilen
            </span>
        </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'kgp-menu',
    data() {
       const menuitems = [
            {
                title: 'Persönliche Daten',
                name: 'Form'
            },
            {
                title: 'Gescannte Produkte',
                name: 'History'
            },
            {
                title: 'Über "ReplacePlastic"',
                name: 'Ueber'
            },
            {
                title: 'Dankeschön',
                name: 'Thankyou'
            },
            {
                title: 'Datenschutzerklärung',
                name: 'Datenschutz'
            },
            {
                title: 'Impressum',
                name: 'Impressum'
            }
        ];
        return {
            menuitems: menuitems
        };
    },
    methods: {
        canShare() {
            // in App
            if(process.env.VUE_APP_TARGET_OS !== 'web' || navigator.share) {
                return true;
            }
            return false;
        },
        share() {
            if(navigator.share) {
                navigator.share({
                    title: 'Sieh dir die App "ReplacePlastic" an!',
                    text: 'ReplacePlastic - Teile Herstellern mit, dass Du dir Verpackungen ohne Plastik wünschst.',
                    url: 'https://www.replaceplastic.de',
                });
            } else {
                if(typeof window.plugins !== 'undefined') {
                    window.plugins.socialsharing.shareWithOptions({
                        text: 'ReplacePlastic - Teile Herstellern mit, dass Du dir Verpackungen ohne Plastik wünschst.',
                        subject: 'Sieh dir die App "ReplacePlastic" an!',
                        url: 'https://www.replaceplastic.de',
                    });
                }
            }
        },
        toggleMenu() {
/*             if(!this.menuOpen) {
                // save the last state to jump back there later on
                if(['Scan','Product','Form','Submit'].indexOf(this.$route.name) > -1) {
                    this.$store.dispatch('setLastRoute', this.$route.path);
                }
            } */
            this.$store.dispatch('menuOpen', !this.menuOpen);
  /*           if(!this.menuOpen) {
                this.$router.push(this.$store.getters.lastRoute);
            } */
        },
        closeMenu() {
            this.$store.dispatch('menuOpen', false);
        }
    },
    computed: {
        menuOpen() {
            return this.$store.state.menuOpen;
        },
        historyCount() {
            return this.$store.state.history.length;
        }
    }
};
</script>

<style lang="scss">
.menu {
  position: fixed;
  z-index: 15;
  width: 10vw;
  right: 0;
  height: 100%;
  top: 0;
  top:env(safe-area-inset-top);
  height: 8vh;
  // code "stolen" from: https://github.com/jonsuh/hamburgers
  // thanks! :)
  &__button {
    $context: &;
    position: absolute;
    z-index: 11;
    outline: none;
    left: -30px;
    top: 3vh;
    width: 8vh;
    height: 8vh;
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    &--back {
        left: -10px;
    }
    &:hover {
      opacity: 0.7;
    }
    &-box {
      width: 30px;
      height: 18px;
      display: inline-block;
      position: relative;
    }
    &-inner {
      display: block;
      top: 50%;
      margin-top: -2px;
    }
    &-inner,
    &-inner::before,
    &-inner::after {
      width: 30px;
      height: 3px;
      background-color: #033c6a;
      border-radius: 3px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
      #{$context}--open & {
        background-color: #fff;
      }
    }
    &-inner::before,
    &-inner::after {
      content: "";
      display: block;
    }
    &-inner::before {
      top: -8px;
      #{$context}--open & {
        transform: translate3d(6px, 0, 0) rotate(45deg) scale(0.7, 1);
      }
    }
    &-inner::after {
      bottom: -8px;
      #{$context}--open & {
        transform: translate3d(6px, 0, 0) rotate(-45deg) scale(0.7, 1);
      }
    }

    &-back {
      display: block;
      top: 50%;
      margin-top: -2px;
    }
    &-back,
    &-back::before,
    &-back::after {
        width: 30px;
        height: 3px;
        background-color: #033c6a;
        border-radius: 3px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }
    &-back {
        background-color: transparent;
    }
    &-back::before,
    &-back::after {
        content: "";
        display: block;
    }
    &-back::before {
        top: -7px;
        transform: translate3d(6px, 0, 0) rotate(-45deg) scale(0.7, 1);
    }
    &-back::after {
        bottom: -7px;
        transform: translate3d(6px, 0, 0) rotate(45deg) scale(0.7, 1);
    }
  }
  &__bar {

  }
  &__items {
    transform: translate3d(100%,0,0);
    transition: all .2s ease-out;
    position: absolute;
    height: 100vh;
    top: 0;
    right: 0;
    width: 100vw;
    padding-top: 12vh;
    bottom: 0;
    background: rgba(#004d8e,.95);
    &--open {
      transform: translate3d(0%,0,0);
    }
  }
  &__share {
      display: block;
      width: 80%;
      margin: 40px 10%;
      text-align: center;
      padding: 20px;
      background: rgba(255,255,255,.6);
      border: none;
      color: #fff;
      font-family: 'Slabo 27px', sans-serif;
      text-transform: uppercase;
      border-radius: 5px;
      color: #004d8e;
      @include fluid-type(16px, 22px);
      svg {
          height: 40px;
          width: 40px;
          position: absolute;
          left: 0;
          top: -5px;
      }
      &inner {
          position: relative;
          padding-left: 40px;
      }
  }
  &__nav {
    border-top: 1px solid #fff;
    list-style: none;
    padding: 0;
    margin: 0 40px;
  }
  &__link {
    color: #fff;
    display: block;
    text-transform: uppercase;
    font-family: 'Slabo 27px', sans-serif;
    padding: 3.5vh 0;
    @include fluid-type(16px, 22px);
    border-bottom: 1px solid #fff;
    text-decoration: none;
  }
  &__counter {
      display: inline-block;
      background: #fff;
      width: 20px;
      height: 20px;
      line-height: 18px;
      border-radius: 50%;
      color: rgba(0, 77, 142, 0.95);
      margin-left: 5px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
