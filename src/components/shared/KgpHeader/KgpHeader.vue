<template>
    <div class="header">
        <svg v-on:click="goHome()" class="header__logo" v-bind:class="{ 'header__logo--open' : menuOpen }" width="277.8px" height="246.61px" viewBox="0 0 277.8 246.61">
            <use xlink:href="#bildmarke"></use>
        </svg>
        <button @click="goBack()" v-if="showBack" class="menu__button menu__button--back" type="button">
            <span class="menu__button-box">
                <span class="menu__button-back"></span>
            </span>
        </button>
        <kgp-menu></kgp-menu>
        <div class="header__border"></div>
    </div>
</template>


<script>
import KgpMenu from './KgpMenu/KgpMenu';

export default {
    name: 'kgp-header',
    data() {
        return {
            showBack: true
        }
    },
    components: {
        KgpMenu
    },
    methods: {
        goHome() {
            this.$router.push('/');
        },
        goBack() {
            let to = '';
            switch(this.$route.name) {
                case 'Form':
                    if(localStorage.getItem('kgp_user')) {
                        to = this.$store.getters.lastRoute;
                    } else {
                        if (navigator.app) {
                            navigator.app.exitApp();
                        } else if (navigator.device) {
                            navigator.device.exitApp();
                        } else {
                            window.close();
                        }
                    }
                break;
                case 'Scan':
                    if(localStorage.getItem('kgp_user')) {
                        if (navigator.app) {
                            navigator.app.exitApp();
                        } else if (navigator.device) {
                            navigator.device.exitApp();
                        } else {
                            window.close();
                        }
                    } else {
                        to = 'Form';
                    }
                break;
                case 'Product':
                    to = 'Scan';
                break;
                case 'Send':
                    to = 'Scan';
                break;
                default:
                    if(this.$store.getters.lastRoute) {
                        to = this.$store.getters.lastRoute;
                    } else {
                        if(localStorage.getItem('kgp_user')) {
                            to = 'Scan';
                        } else {
                            to = 'Form';
                        }
                     }
                break;
            }
            this.$router.push(to);
        }
    },
    computed: {
        menuOpen() {
            return this.$store.state.menuOpen;
        }
    },
    watch: {
        '$route' (to, from) {
            if(to.name == 'Send') {
                this.showBack = false;
            } else {
                this.showBack = true;
            }
        }
    }
};
</script>

<style lang="scss">
.header {
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 9vh;
    text-align: center;
    &__logo {
        max-width: 100%;
        height: 5.6vh;
        stroke: #033c6a;
        fill: transparent;
        margin-top: 3.2vh;
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
