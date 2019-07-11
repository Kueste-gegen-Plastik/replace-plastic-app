<template>
    <div v-if="nagscreen" class="nagscreen">
        <div class="nagscreen__inner">
            <button class="nagscreen__close" v-on:click.prevent="closeNagscreen">X</button>
            <h1 class="headline headline--primary headline--nagscreen">
                Willkommen bei ReplacePlastic
            </h1>
            <h2 class="headline headline--secondary">
                Darum geht's:
            </h2>
            <div class="glide-outer">
                <vue-glide :perView="1" :autoplay="4000" v-model="active">
                    <vue-glide-slide v-for="(item, i) in items" :key="i">
                        <span class="nagscreen__headline" v-html="item">
                            
                        </span>
                    </vue-glide-slide>
                    <template slot="control">
                        <button type="button" :class="{
                            'glide__bullet': true,
                            'glide__bullet--active': active == i
                        }"  v-for="(item, i) in items" :key="i" :data-glide-dir="'='+i"></button>
                    </template>
                </vue-glide>
            </div>
            <div class="nagscreen__button">
                <button class="form__button form__button--error" v-on:click.prevent="closeNagscreen" type="button">Okay, los geht's!</button>
            </div>
        </div>
    </div>
</template>


<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

export default {
    components: {
      [Glide.name]: Glide,
      [GlideSlide.name]: GlideSlide
    },
    data: () => {
        return {
            active: 0,
            items: [
                'Plastikmüll im Meer verursacht enorme Probleme. Ein großer Teil gelangt vom Land her über die Flüsse ins Meer.',
                'Verpackungen spielen dabei eine große Rolle.',
                'Es gibt zu viele Plastikverpackungen für Produkte des täglichen Bedarfs.',
                'Hersteller und Anbieter sagen: „Der Verbraucher will es so.“<br>Das sehen wir anders.',
                ' Mit dieser App scannst du die Barcodes von Produkten, die du verwenden oder kaufen würdest, um dem Anbieter mitzuteilen, dass du dir dafür Verpackungen ohne Plastik wünschst.',
                'Dein Feedback wird von uns weitergeleitet.'
            ]
        }
    },
    beforeMount() {
        this.$store.dispatch('nagscreen', localStorage.getItem('kgp_seen_nagscreen') === null);
    },
    computed: {
        nagscreen() {
            return this.$store.getters.nagscreen;
        }
    },
    methods: {
        closeNagscreen() {
            localStorage.setItem('kgp_seen_nagscreen', true);
            this.$store.dispatch('nagscreen', false);
        }
    }
};
</script>

<style lang="scss">
.nagscreen {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background: rgba(#fff, .96);
    align-items: center;
    &__headline {
        position: relative;
        z-index: 2;
        color: #033c6a;
    }
    &__image {
        opacity: .4;
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    &__button {
        text-align: center;
    }
    &__close {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 30px;
        height: 30px;
        text-align: center;
        background: transparent;
        color: #fff;
        border: none;
        font-size: 20px;
    }
    &__inner {
        position: fixed;
        text-align: center;
        left: 0;
        top: 10vh;
        box-sizing: border-box;
        width: 100vw;
        height: 90vh;
        background: url('../../../KgpApp.png') center center no-repeat;
        background-size: cover;
        padding: 10vh 4vw;
        align-items: center;
        &__buttonwrap {
            text-align: center;
            button {
                margin: 0 auto;
            }
        }
    }
}

.glide {
    &__slide {
        @include fluid-type(18px, 22px);
        min-height: 20vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &-outer {
        font-family: 'Slabo 27px';
        display: block;
        width: 80%;
        max-width: 980px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    &__bullet {
        background-color: rgba(255,255,255,.2);
        border: 0;
        outline: 0;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        cursor: pointer;
        &:hover {
            background-color: #d5d5d5
        }
        &+.glide__bullet {
            margin-left: 10px
        }
        &--active,
        &--active:hover {
            background-color: #fff
        }
    }
}
</style>
