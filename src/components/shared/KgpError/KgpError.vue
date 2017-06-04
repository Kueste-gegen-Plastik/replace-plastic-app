<template>
    <div class="error" v-if="error">
        <button class="error__close" type="button" v-on:click.prevent="closeError">X</button>
        <div class="error__inner">
            <h2 class="headline headline--primary"> <span class="headline__inner headline__inner--primary">So ein Ärger...</span></h2>
            <p>{{ error }}</p>
            <div class="error__buttonwrap">
                <button class="form__button form__button--error" v-on:click.prevent="resetError" type="button">Noch mal versuchen</button>
            </div>
        </div>
    </div>
</template>


<script>
import config from '@/config';
import errors from '@/config/constants';

export default {
    name: 'kgp-error',
    data() {
        return {}
    },
    methods: {
        resetError() {
            this.$emit('reset');
        },
        closeError() {
            this.$store.dispatch('resetError');
        }
    },
    computed: {
        error() {
            return this.$store.getters.error;
        }
    }
};
</script>

<style lang="scss">
.error {
    position: fixed;
    left: 0;
    top: 10vh;
    right: 0;
    bottom: 0;
    background: rgba(#033c6a,.8);
    padding: 4vw;
    display: flex;
    align-items: center;
    &__close {
        position: absolute;
        right: 30px;
        top: 30px;
        width: 30px;
        height: 30px;
        text-align: center;
        background: transparent;
        color: #fff;
        border: none;
        font-size: 20px;
    }
    &__inner {
        width: 100%;
        text-align: center;
        border: 1px solid rgba(248, 98, 89, 0.32);;
        color: #fff;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #fff;
        margin: 20px 0;
        box-shadow: 2px 5px 0 #fff;
        &__buttonwrap {
            text-align: center;
            button {
                margin: 0 auto;
            }
        }
    }
}
</style>
