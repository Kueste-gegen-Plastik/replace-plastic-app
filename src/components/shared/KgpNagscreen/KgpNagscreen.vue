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
            <carousel :perPage="1" paginationActiveColor="#033c6a">
                <slide>
                    Plastikmüll im Meer verursacht enorme Probleme. Ein großer Teil gelangt vom Land her über die Flüsse ins Meer.
                </slide>
                <slide>
                    Verpackungen spielen dabei eine große Rolle.
                </slide>
                <slide>
                    Es gibt zu viele Plastikverpackungen für Produkte des täglichen Bedarfs.
                </slide>
                <slide>
                    Hersteller sagen: „Der Verbraucher will es so.“<br>
                    Das sehen wir anders.
                </slide>
                <slide>
                    Mit dieser App scannst du die Barcodes von Produkten, die du verwenden oder kaufen würdest, um dem Hersteller mitzuteilen, dass du dir dafür Verpackungen ohne Plastik wünschst.
                </slide>
                <slide>
                    ein Feedback wird von uns an die Produzenten weitergeleitet.
                </slide>
            </carousel>
            <div class="nagscreen__button">
                <button class="form__button form__button--error" v-on:click.prevent="closeNagscreen" type="button">Okay, los geht's!</button>
            </div>
        </div>
    </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide
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
        left: 10vw;
        top: 10vh;
        box-sizing: border-box;
        width: 80vw;
        height: 80vh;
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
.VueCarousel {
    font-family: 'Slabo 27px';
    font-weight: normal;
    display: block;
    width: 80%;
    margin-left: 10%;
}
</style>
