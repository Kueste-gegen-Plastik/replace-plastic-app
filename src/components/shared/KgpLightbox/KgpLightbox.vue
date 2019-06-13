<template>
    <div class="lightbox" v-if="lightboxContent != ''">
        <button class="lightbox__close" type="button" v-on:click.prevent="resetLightboxContent">X</button>
        <div class="lightbox__inner">
            <div v-html="lightboxContent"></div>
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
    name: 'kgp-lightbox',
    methods: {
        resetLightboxContent() {
            this.$store.dispatch('resetLightboxContent');
        }
    },
    computed: mapState([
        'lightboxContent'
    ]),
};
</script>

<style lang="scss">
.lightbox {
    position: fixed;
    left: 0;
    top: 10vh;
    right: 0;
    bottom: 0;
    background: rgba(#033c6a,.8);
    padding: 4vw;
    display: flex;
    z-index: 10;
    @include fluid-type(16px, 22px);
    &__close {
        position: absolute;
        right: 15px;
        top: 30px;
        width: 30px;
        height: 30px;
        text-align: center;
        background: transparent;
        color: #fff;
        border: none;
        font-size: 20px;
        color: #033c6a;
        background: #fff;
        border-radius: 50%;

    }
    &__inner {
        width: 100%;
        text-align: left;
        border: 1px solid rgba(248, 98, 89, 0.32);
        color: #fff;
        padding: 30px;
        border: 1px solid #fff;
        margin: 20px 0;
        box-shadow: 2px 5px 0 #fff;
        background: rgba(255,255,255,.9);
        color: #033c6a;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        @include bp('medium') {
            max-width: 980px;
            margin: 0 auto;
        }
        &__buttonwrap {
            text-align: center;
            button {
                margin: 0 auto;
            }
        }
    }
}
</style>
