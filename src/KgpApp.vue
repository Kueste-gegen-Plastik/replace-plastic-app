<template>
    <div id="app" class="app" v-bind:class="{ 'app--step-1' : step == 1,  'app--step-2' : step == 2,  'app--step-3' : step == 3,  'app--step-4' : step == 4 }">
        <svg class="symbols" width="277.8px" height="246.61px" viewBox="0 0 277.8 246.61" enable-background="new 0 0 277.8 246.61">
            <symbol id="bildmarke" width="277.8px" height="246.61px" viewBox="0 0 277.8 246.61">
                <path stroke-width="8" stroke-miterlimit="10" d="M196.017,7.008c5.35,0,11.916,3.786,14.593,8.419
                l57.658,99.806c2.677,4.632,2.678,12.213,0.006,16.848l-57.604,99.835c-2.672,4.635-9.234,8.427-14.585,8.428l-115.263,0.035
                c-5.349,0.002-11.915-3.787-14.591-8.419L8.569,132.158c-2.677-4.633-2.678-12.213-0.005-16.848l57.601-99.837
                c2.673-4.633,9.236-8.426,14.585-8.427L196.017,7.008z" />
                <polyline stroke-width="8" stroke-miterlimit="10" points="74.129,236.017 73.839,90.335
            47.545,90.867 107.185,30.986 166.826,90.387 138.38,90.684 136.837,155.944 109.352,157.196 167.317,215.405 227.434,155.046
            202.574,155.573 202.684,9.904 " />
            </symbol>
        </svg>
        <svg class="symbols" x="0px" y="0px" width="481.89px" height="175.75px" viewBox="0 0 481.89 175.75" enable-background="new 0 0 481.89 175.75">
            <symbol id="wortmarke" width="481.89px" height="175.75px" viewBox="0 0 481.89 175.75">
                <path d="M19.186,71.082l8.37-0.018l0.014,6.976L2.459,78.09l-0.014-6.975l8.37-0.018L10.692,9.716L3.298,9.731
            L3.284,2.756l24.274-0.049c8.649-0.018,14.976,1.552,18.982,4.705c4.004,3.155,6.015,7.848,6.027,14.078
            c0.022,11.069-5.823,17.869-17.537,20.403l0,0.279c1.303,0.742,2.7,1.877,4.192,3.41c1.49,1.531,3.357,4.387,5.598,8.567
            l9.241,16.862l6.975-0.014l0.014,6.975L47.659,78c-1.121-2.51-2.196-4.739-3.223-6.69c-1.028-1.951-2.008-3.763-2.94-5.435
            l-5.181-9.615c-1.868-3.251-3.359-5.713-4.479-7.385s-2.378-3.064-3.775-4.178c-1.397-1.02-3.212-1.528-5.444-1.523l-3.487,0.007
            L19.186,71.082z M25.812,36.191c5.951-0.012,10.436-1.113,13.455-3.305c3.017-2.19,4.523-5.705,4.513-10.542
            c-0.01-4.743-1.39-8.041-4.136-9.896c-2.748-1.854-7.05-2.776-12.909-2.765l-7.673,0.016l0.053,26.506L25.812,36.191z"
                />
                <path d="M119.348,70.881l-0.02-9.766l7.394-0.016l0.034,16.74l-50.222,0.102l-0.014-6.975l8.37-0.018L84.767,9.567
            l-8.37,0.017l-0.014-6.975l48.827-0.098l0.034,16.741l-7.394,0.015L117.83,9.5L93.138,9.55l0.053,26.506l13.95-0.028l-0.014-6.975
            l6.976-0.014l0.045,22.32l-6.976,0.015l-0.017-8.37l-13.95,0.027l0.056,27.901L119.348,70.881z" />
                <path d="M163.104,47.076l0.047,23.716l9.765-0.02l0.014,6.976l-26.506,0.053l-0.014-6.975l8.37-0.018l-0.123-61.382
            l-8.37,0.017l-0.014-6.975l25.25-0.051c8.183-0.016,14.233,1.764,18.146,5.335c3.914,3.573,5.877,8.755,5.891,15.543
            c0.016,7.721-2.183,13.606-6.591,17.661c-4.411,4.054-10.847,6.091-19.309,6.106L163.104,47.076z M170.065,40.087
            c5.393-0.011,9.53-1.251,12.409-3.722c2.876-2.469,4.312-6.496,4.3-12.076c-0.011-5.672-1.323-9.576-3.93-11.71
            c-2.609-2.133-6.657-3.196-12.143-3.185l-7.673,0.015l0.062,30.691L170.065,40.087z" />
                <path d="M241.289,9.252l-8.37,0.017l0.123,61.383l23.298-0.047l-0.02-9.766l7.393-0.016l0.034,16.74l-47.432,0.096
            l-0.014-6.975l8.37-0.018l-0.123-61.382l-8.37,0.017l-0.014-6.975l25.111-0.051L241.289,9.252z" />
                <path d="M300.143,70.517l0.015,6.976l-22.321,0.045l-0.014-6.976l6.975-0.014l22.322-69.1l8.092-0.016
            l23.017,69.009l6.558-0.013l0.014,6.975l-22.32,0.045l-0.015-6.975l6.976-0.015l-6.879-20.912l-23.297,0.047l-6.515,20.938
            L300.143,70.517z M310.491,13.299l-9.149,29.314l18.973-0.038l-9.545-29.277L310.491,13.299z" />
                <path d="M410.498,73.085c-6.877,3.735-13.849,5.608-20.915,5.622c-9.953,0.02-17.794-3.428-23.527-10.346
            c-5.733-6.916-8.612-16.467-8.638-28.651c-0.023-12.089,2.887-21.629,8.732-28.616c5.845-6.987,13.649-10.49,23.415-10.51
            c6.789-0.014,13.72,1.461,20.796,4.422l0.033,16.461l-7.674,0.016l-0.022-11.021c-3.724-1.479-8.188-2.216-13.397-2.205
            c-7.441,0.015-13.155,2.562-17.143,7.638c-3.99,5.078-5.973,12.824-5.952,23.239c0.022,10.881,2.131,18.923,6.326,24.121
            c4.196,5.201,10.013,7.793,17.454,7.777c6.23-0.012,13.062-1.885,20.496-5.621L410.498,73.085z" />
                <path d="M472.987,70.17l-0.02-9.766l7.395-0.016l0.033,16.74l-50.222,0.102l-0.014-6.975l8.37-0.018l-0.123-61.382
            l-8.37,0.017l-0.015-6.975L478.849,1.8l0.034,16.741l-7.394,0.015l-0.02-9.766l-24.692,0.049l0.053,26.506l13.95-0.028
            l-0.014-6.975l6.976-0.014l0.045,22.32l-6.976,0.015l-0.017-8.37l-13.95,0.028l0.056,27.901L472.987,70.17z" />
                <path d="M15.452,148.076l0.039,19.309l7.951-0.016l0.011,5.68l-21.581,0.043l-0.011-5.68l6.815-0.014l-0.101-49.975
            l-6.815,0.014l-0.011-5.68l20.558-0.041c6.662-0.014,11.588,1.436,14.774,4.344c3.186,2.909,4.785,7.128,4.796,12.654
            c0.013,6.286-1.778,11.078-5.367,14.379c-3.591,3.301-8.832,4.959-15.721,4.973L15.452,148.076z M21.119,142.387
            c4.391-0.009,7.759-1.019,10.103-3.031c2.342-2.01,3.511-5.287,3.501-9.831c-0.009-4.618-1.077-7.796-3.199-9.534
            c-2.125-1.736-5.42-2.602-9.887-2.593l-6.247,0.013l0.05,24.988L21.119,142.387z" />
                <path d="M97.6,117.245l-6.815,0.014l0.101,49.976l18.968-0.039l-0.016-7.949l6.02-0.013l0.027,13.63l-38.618,0.077
            l-0.011-5.679l6.815-0.014l-0.101-49.976l-6.815,0.014l-0.011-5.679l20.445-0.041L97.6,117.245z" />
                <path d="M164.009,167.087l0.011,5.679l-18.173,0.037l-0.011-5.68l5.679-0.012l18.173-56.258l6.588-0.014
            l18.74,56.185l5.338-0.011l0.011,5.68l-18.173,0.036l-0.011-5.679l5.679-0.012l-5.6-17.025l-18.968,0.037l-5.303,17.048
            L164.009,167.087z M172.434,120.502l-7.449,23.867l15.447-0.031l-7.771-23.836H172.434z" />
                <path d="M248.164,173.732c-5.756,0.012-11.096-1.039-16.021-3.148l-0.026-12.721l6.133-0.012l0.017,8.404
            c2.652,0.98,6.136,1.465,10.452,1.456c4.164-0.009,7.399-0.981,9.706-2.916c2.305-1.936,3.454-4.567,3.448-7.901
            c-0.004-1.74-0.33-3.236-0.975-4.484c-0.646-1.248-1.521-2.343-2.619-3.288c-1.1-0.944-2.484-1.812-4.15-2.604
            c-1.668-0.791-3.563-1.6-5.684-2.43c-2.047-0.752-4.074-1.562-6.082-2.43c-2.009-0.866-3.828-1.941-5.458-3.227
            c-1.631-1.283-2.959-2.908-3.985-4.876c-1.026-1.966-1.542-4.313-1.548-7.039c-0.01-4.921,1.8-8.88,5.428-11.88
            c3.628-2.998,8.547-4.504,14.756-4.516c5.452-0.012,10.452,1.114,15,3.377l0.024,12.494l-6.134,0.012l-0.016-8.178
            c-2.729-1.13-5.872-1.691-9.431-1.685c-4.165,0.009-7.306,0.999-9.421,2.972c-2.117,1.975-3.171,4.322-3.166,7.049
            c0.003,1.666,0.327,3.086,0.974,4.258c0.645,1.173,1.555,2.211,2.731,3.117c1.176,0.906,2.616,1.699,4.322,2.377
            c1.705,0.678,3.617,1.432,5.739,2.26c2.121,0.83,4.187,1.715,6.196,2.656c2.007,0.944,3.789,2.076,5.345,3.396
            c1.554,1.323,2.807,2.947,3.758,4.877c0.95,1.93,1.429,4.37,1.435,7.323c0.01,5.225-1.855,9.413-5.598,12.562
            C259.575,172.139,254.524,173.72,248.164,173.732z" />
                <path d="M312.527,166.788l7.951-0.016l-0.101-49.976l-12.493,0.025l0.018,9.086l-6.02,0.013l-0.029-14.766
            l43.842-0.089l0.029,14.766l-6.02,0.013l-0.019-9.087l-12.493,0.025l0.1,49.975l7.951-0.016l0.012,5.68l-22.717,0.045
            L312.527,166.788z" />
                <path d="M378.836,166.654l6.814-0.014l-0.101-49.975l-6.814,0.014l-0.011-5.68l20.443-0.041l0.011,5.68
            l-6.814,0.014l0.101,49.975l6.814-0.014l0.012,5.68l-20.443,0.041L378.836,166.654z" />
                <path d="M478.089,168.728c-5.599,3.04-11.275,4.565-17.028,4.577c-8.104,0.016-14.486-2.791-19.155-8.423
            c-4.668-5.631-7.013-13.407-7.032-23.327c-0.02-9.843,2.351-17.609,7.109-23.299c4.758-5.688,11.113-8.541,19.063-8.557
            c5.526-0.011,11.171,1.189,16.932,3.602l0.026,13.402l-6.247,0.012l-0.018-8.973c-3.031-1.204-6.668-1.804-10.908-1.795
            c-6.059,0.012-10.71,2.085-13.957,6.218c-3.248,4.134-4.863,10.441-4.846,18.921c0.018,8.859,1.734,15.406,5.149,19.639
            c3.416,4.235,8.151,6.344,14.211,6.332c5.071-0.01,10.634-1.535,16.688-4.576L478.089,168.728z" />
            </symbol>
        </svg>
        <kgp-header></kgp-header>
        <kgp-nagscreen></kgp-nagscreen>
        <div class="main" id="main" v-show="!menuOpen && !nagscreen">
            <div class="main__logo">
                <svg alt="ReplacePlastic" class="main__wortmarke" width="481.89px" height="175.75px" viewBox="0 0 481.89 175.75">
                    <use xlink:href="#wortmarke"></use>
                </svg>
            </div>
            <transition :name="transition" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <div v-if="!keyboardShown" class="foot-border"></div>
    </div>
</template>

<script>
import KgpHeader from '@/components/shared/KgpHeader/KgpHeader';
import KgpNagscreen from '@/components/shared/KgpNagscreen/KgpNagscreen';

export default {
    components: { KgpHeader, KgpNagscreen },
    name: 'KgpApp',
    data() {
        return {
            transition : 'slideUp',
            keyboardShown : false,
            hasSeenNagscreen : true
        }
    },
    computed: {
        step() {
            return this.$store.state.step;
        },
        menuOpen() {
            return this.$store.state.menuOpen;
        },
        nagscreen() {
            return this.$store.getters.nagscreen;
        }
    },
    mounted() {
        var usr = localStorage.getItem('kgp_user'),
            history = localStorage.getItem('kgp_history');
        if(usr) {
            this.$store.dispatch('setUser', JSON.parse(usr));
        }
        if(history) {
            this.$store.dispatch('setHistory', JSON.parse(history));
        }
        localStorage.removeItem('kgp_token');
    },
    watch: {
        '$route' (to, from) {
            this.$store.dispatch('resetError');
            if(to.name.indexOf('meta') <= -1) {
                var routeNames = this.$router.options.routes.map(itm => {
                    return itm.name;
                });
                this.transition = ['Scan','Product','Form','Submit'].indexOf(to.name) > routeNames.indexOf(from.name) ?  'slideLeft' : 'slideRight';
            } else {
                this.transition = ['Impressum','Datenschutz','Ueber'].indexOf(to.name) ? 'slideLeft' : 'slideRight';
            }
        }
    }
};
</script>

<style lang="scss">
body {
    font-size: 100%;
    overflow: hidden;
}
.symbols {
    display: none;
}
.app {
    background: url('./KgpApp.png') no-repeat;
    background-size: cover;
    min-height: 100vh;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    padding-top: 13vh;
    will-change: background-position;
    transition: all .5s ease-in;
    &--step-2 {
        background-position: 50% 50%;
    }
    &--step-2 {
        background-position: 30% 50%;
    }
    &--step-3 {
        background-position: 10% 50%;
    }
    &--step-4 {
        background-position: 0% 50%;
    }
}
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
    &__wortmarke {
        fill: #fff;
        max-width: 11vh;
        height: auto;
        max-height: 100px;
    }
}
.step {
    height: 74vh;
    overflow: hidden;
    overflow-y: auto;
    margin-top: 2vh;
    transition: all .2s ease-in;
    &--1,
    &--2 {
        height: 84vh;
    }
    &__inner {
        height: 100%;
        margin: 4vw;
        padding: 0;
    }
    &__number {
        position: absolute;
        top: 0;
        left: 4.347826087vw;
        width: 6.0869565217vw;
        height: 6.0869565217vw;
        border-radius: 50%;
        color: #004d8e;
        background: #fff;
        text-align: center;
        line-height: 6.0869565217vw;
        font-size: 19px;
    }
    &__line {
        position: absolute;
        top: 3vh;
        bottom: 0;
        background: #fff;
        width: 3px;
        left: 7.2vw;
    }

}
.headline {
    font-family: 'Slabo 27px';
    font-weight: normal;
    &--primary {
        text-align: center;
        font-family: 'Slabo 27px';
        font-size: 28px;
        border: none;
        padding: 0 4vw;
        margin: 0 auto;
    }
    &--secondary {
        font-size: 20px;
    }
    &--tertiary {
        font-size: 18px;
    }
    &__inner {
        &--primary {
            padding: 2px 5px;
            background: rgba(3, 60, 106, 0.5);
            color: #fff;
        }
    }
}
.foot-border {
    height: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 3;
    background: #fff;
}
.slideRight-enter  {
    z-index: 2;
}
.slideRight-enter-active {
    transform: translate3d(100%, 0, 0);
}
.slideRight-enter-to {
    transform: translate3d(0, 0, 0);
}
.slideRight-leave-active {
    transform: translate3d(0, 0, 0);
}
.slideRight-leave-to {
    transform: translate3d(-100%, 0, 0);
}



.slideLeft-enter  {
    z-index: 2;
}
.slideLeft-enter-active {
    transform: translate3d(-100%, 0, 0);
}
.slideLeft-enter-to {
    transform: translate3d(0, 0, 0);
}
.slideLeft-leave-active {
    transform: translate3d(0, 0, 0);
}
.slideLeft-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>
