<template>
    <div class="error" v-if="error">
        <h2 class="headline headline--primary"> <span class="headline__inner headline__inner--primary">So ein Ärger...</span></h2>
        <p>{{ error }}</p>
        <div class="error__buttonwrap">
            <button class="form__button form__button--error" v-on:click.prevent="resetError" type="button">Noch mal versuchen</button>
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
    border: 1px solid rgba(248, 98, 89, 0.32);;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    margin: 20px 0;
    box-shadow: 2px 5px 0 #fff;
    &__buttonwrap {
        text-align: center;
    }
}
</style>
