<template>
    <div class="step step--2" id="step_2">
        <h2 class="headline headline--primary">
            <span class="headline__inner headline__inner--primary">
                Statistiken
            </span>
        </h2>

    </div>
</template>

<script>
import Quagga from 'quagga';
import Api from '@/api';
import Barcoder from 'barcoder';
import KgpError from '@/components/shared/KgpError/KgpError';

export default {
    name: 'kgp-scan',
    components: {
        KgpError
    },
    data() {
        return {
            cantScan: false,
            isValidEan: false,
            isWeb: false,
            webScanActive: false
        };
    },
    beforeMount() {
        this.$store.dispatch('setStep', 1);
    }
};
</script>

<style lang="scss">
.scan {
    text-align: center;
    margin-top: 10px;
    &__button {
        background-color: #f76259;
        width: 40vw;
        height: 40vw;
        border-radius: 50%;
        border: none;
        outline: none;
        border: 10px solid rgba(0, 0, 0, .17);
        margin: 2vh 0;
        transition: background-color .2s ease-in;
        &:active, &:focus {
            background-color: #fff;
        }
    }
    &__icon {
        fill: #fff;
        width: 24vw;
        height: 24vw;
        position: relative;
        top: 3vw;
    }
    &__close {
        position: absolute;
        right: 0;
        top: 12vh;
    }
    &__container {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 998;
        background: rgba(255, 255, 255, .95);
    }
    &__video {
        position: absolute;
        top: 22vh;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        video, canvas {
            max-width: 100%;
            width: 100%;
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 999;
        }
    }
}
</style>
