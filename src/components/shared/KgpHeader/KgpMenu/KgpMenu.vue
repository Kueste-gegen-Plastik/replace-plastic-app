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
            <li v-for="menuitem in menuitems"  v-on:click="closeMenu" class="menu__item">
                <router-link class="menu__link" v-bind:to="{ name : menuitem.name }">
                    {{ menuitem.title }} <span class="menu__counter" v-if="menuitem.name == 'History' && historyCount > 0">{{ historyCount }}</span>
                </router-link>
            </li>
        </ul>
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
        toggleMenu() {
            if(!this.menuOpen) {
                // save the last state to jump back there later on
                if(['Scan','Product','Form','Submit'].indexOf(this.$route.name) > -1) {
                    this.$store.dispatch('setLastRoute', this.$route.path);
                }
            }
            this.$store.dispatch('menuOpen', !this.menuOpen);
            if(!this.menuOpen) {
                this.$router.push(this.$store.getters.lastRoute);
            }
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
