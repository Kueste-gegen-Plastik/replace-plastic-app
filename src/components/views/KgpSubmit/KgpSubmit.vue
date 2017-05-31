<template>
    <div class="step step--4" id="step_4">
        <h2 class="headline headline--primary">Geschafft</h2>
        <div class="step__inner">
            <div class="product">
                <div v-if="loading" class="product__loading">
                    Beitrag wird eingereicht...
                </div>
                <div v-if="!loading && error" class="product__error">
                    {{ error }}
                </div>
                <div v-if="!loading && !error" class="product__content">
                    <h3 class="headline headline--tertiary">Danke für Dein Feedback!</h3>
                    <div class="form__description">
                        <p>
                            Gemeinsam schaffen wir eine spürbare Nachfrage nach plastikfreien Verpackungen, die auch bei den Herstellern ankommt. Wir
                            geben Deinen Wunsch an den Hersteller weiter. Der Hersteller wird spätestens nach vier Wochen benachrichtigt,
                            oder wenn 20 weitere Personen dieses Produkt mit der ReplacePlastic-App gescannt haben.
                        </p>
                    </div>
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

export default {
    name: 'kgp-submit',
    data() {
        return {
            error: false,
            loading: true
        }
    },
    beforeCreate() {
        this.$store.dispatch('setStep', 4);
    },
    methods: {
        submitEntry(ean){

        }
    }
};
</script>

<style lang="scss">
.product {

}
</style>
