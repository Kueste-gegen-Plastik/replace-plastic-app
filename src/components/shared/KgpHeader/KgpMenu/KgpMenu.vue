<template>
  <div class="menu">
    <button @click="toggleMenu()"
      class="menu__button"
      v-bind:class="{ 'menu__button--open' : menuOpen }"
      type="button"
      aria-controls="menu__items"
      v-bind:aria-label="'Menü ' + menuOpen ? 'schließen' : 'öffnen'"
      v-bind:aria-expanded="open">
      <span class="menu__button-box">
        <span class="menu__button-inner"></span>
      </span>
    </button>
    <div v-bind:class="{ 'menu__items--open' : menuOpen }" id="menu__items" class="menu__items">
        <ul class="menu__nav">
            <li v-for="menuitem in menuitems" class="menu__item">
                <router-link v-bind:to="{ name: menuitem.name }">{{ menuitem.title }}</router-link>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'kgp-menu',
    data() {
        return {
            menuitems: [
                {
                    title: 'Über "ReplacePlastic"',
                    name: ''
                },
                {
                    title: 'Datenschutzerklärung"',
                    name: ''
                },
                {
                    title: 'Impressum',
                    name: 'Impressum'
                }
            ]
        };
    },
    methods: {
        toggleMenu() {
            this.$store.dispatch('menuOpen', !this.menuOpen);
        }
    },
    computed: {
        menuOpen() {
            return this.$store.state.menuOpen;
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
  height: 8vh;
  // code "stolen" from: https://github.com/jonsuh/hamburgers
  // thanks! :)
  &__button {
    $context: &;
    position: absolute;
    z-index: 11;
    outline: none;
    left: -30px;
    top: 7px;
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
  }
  &__bar {

  }
  &__items {
    transform: translate3d(100vw,0,0);
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
      transform: translate3d(0,0,0);
    }
  }
  &__nav {
    border-top: 1px solid #fff;
    list-style: none;
    padding: 0;
    margin: 0 40px;
  }
  &__item {
    text-transform: uppercase;
    font-family: 'Slabo 27px', sans-serif;
    padding: 2.5vh 0;
    border-bottom: 1px solid #fff;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
