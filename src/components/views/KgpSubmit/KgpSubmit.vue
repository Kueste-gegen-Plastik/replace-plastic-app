<template>
    <div class="step step--4" id="step_4">
        <h2 class="headline headline--primary">
            <span class="headline__inner headline__inner--primary">
                {{ !loading && !error ? 'Geschafft!' : 'Fast Geschafft...' }}
            </span>
        </h2>
        <div class="step__inner">
            <hr class="waves" />
            <div class="product">
                <div v-if="loading" class="product__loading">
                    <bounce-loader :loading="loading" color="#fff"></bounce-loader>
                    Dein Vorschlag wird übermittelt...
                </div>
                <kgp-error v-on:reset="submitEntry"></kgp-error>
                <div v-if="!loading && !error" class="product__content">
                    <h3 class="headline headline--tertiary">Danke für Dein Feedback!</h3>
                    <p>
                        Gemeinsam schaffen wir eine spürbare Nachfrage nach plastikfreien Verpackungen, die auch bei den Herstellern ankommt. Wir
                        geben Deinen Wunsch an den Hersteller weiter. Der Hersteller wird spätestens nach vier Wochen benachrichtigt,
                        oder wenn 20 weitere Personen dieses Produkt mit der ReplacePlastic-App gescannt haben.
                    </p>
                    <a class="form__button">
                        Ein weiteres Produkt scannen
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Api from '@/api';
import config from '@/config';
import BounceLoader from 'vue-spinner/src/BounceLoader.vue';
import KgpError from '@/components/shared/KgpError/KgpError';

export default {
    name: 'kgp-submit',
    data() {
        return {
            loading: true
        }
    },
    beforeCreate() {
        this.$store.dispatch('setStep', 4);
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        barcode() {
            return this.$store.getters.barcode;
        },
        error() {
            return this.$store.getters.error;
        }
    },
    mounted() {
        this.submitEntry()
    },
    methods: {
        submitEntry(){
            Api.create(Object.assign(this.user, {
                barcode: this.barcode
            })).then(res => {
                this.loading = false;
            }).catch(err => {
                this.$store.dispatch('setError', err.hasOwnProperty('response') && err.response.data.hasOwnProperty('code') ? err.response.data.code : 4711);
                this.loading = false;
            })
        }
    },
    components: {
        BounceLoader,
        KgpError
    }
};
</script>

<style lang="scss">
.product {

}
</style>
