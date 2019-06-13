<template>
    <div class="step step--3" id="step_3">


        <h2 class="headline headline--primary" >
            <span class="headline__inner headline__inner--primary">
                Unterstützung nötig!
            </span>
        </h2>

        <div class="step__inner">
            <hr class="waves">
            <form class="form" v-on:submit.prevent="doSubmit">
                <fieldset class="form__fieldset">
                    <div class="form__description">
                        <p>
                            Dieses Produkt ist in unserer Datenbank noch nicht erfasst.
                            Du kannst uns helfen, indem du uns Informationen dazu sendest.
                            Wenn du das nicht möchtest, können wir selber versuchen, das Produkt über die Barcode-Nummer zu finden.
                            Falls das gelingt, wird dein Wunsch an den Anbieter gesendet.
                        </p>
                    </div>
                    <div class="form__formrow">
                        <label v-bind:class="{ 'form__label' : true, 'form__label--filled' : draft.text_marke.length }" for="text_marke">Marke / Hersteller<sup title="Pflichtfeld">*</sup></label>
                        <input class="form__input" type="text" required="required" id="text_marke" :value="draft.text_marke" @input="draft.text_marke = $event.target.value" />
                    </div>
                    <div class="form__formrow">
                        <label v-bind:class="{ 'form__label' : true, 'form__label--filled' : draft.text_product.length }" for="text_product">Art des Produkts<sup title="Pflichtfeld">*</sup></label>
                        <input class="form__input" type="text" required="required" id="text_product" :value="draft.text_product" @input="draft.text_product = $event.target.value" />
                        <span :class="{ 'form__hint' : true, 'form__hint--filled' : draft.text_product.length }">z.B. Käse</span>
                    </div>
                    <div class="form__formrow">
                        <label v-bind:class="{ 'form__label' : true, 'form__label--filled' : draft.text_productdetails.length }" for="text_product">Produktname<sup title="Pflichtfeld">*</sup></label>
                        <input class="form__input" type="text" required="required" id="text_productdetails" :value="draft.text_productdetails" @input="draft.text_productdetails = $event.target.value" />
                        <span :class="{ 'form__hint' : true, 'form__hint--filled' : draft.text_productdetails.length }">Produktname wie auf der Verpackung angegeben</span>
                    </div>
                    <div class="form__formrow">
                        <label v-bind:class="{ 'form__label' : true, 'form__label--filled' : draft.text_amount.length }" for="text_product">Menge<sup title="Pflichtfeld">*</sup></label>
                        <input class="form__input" type="text" id="text_amount" :value="draft.text_amount" @input="draft.text_amount = $event.target.value" />
                        <span :class="{ 'form__hint' : true, 'form__hint--filled' : draft.text_amount.length }">z.B. „200g“</span>
                    </div>
                    <div class="form__formrow">
                        <label v-bind:class="{ 'form__label' : true, 'form__label--filled' : draft.text_descr.length }" for="text_descr">Kommentar / Hinweise</label>
                        <textarea class="form__input form__input--textarea" type="text" id="text_descr" @input="draft.text_descr = $event.target.value" :value="draft.text_descr"></textarea>
                        <span :class="{ 'form__hint' : true, 'form__hint--filled' : draft.text_descr.length }">z.B. Bei Obst/Gemüse: „Gefunden in Supermarkt XYZ“ (nur die Kette, keine genauere Ortsangabe).</span>
                    </div>
                    <button class="form__button" type="submit">
                        Produktdaten senden
                    </button>
                    <button  v-on:click.prevent="doRedirect" class="form__button form__button--delete" type="reset">
                        Nur Barcode senden
                    </button>
                </fieldset>
            </form>
        </div>
    </div>
</template>


<script>
import api from '@/api';
import BounceLoader from 'vue-spinner/src/BounceLoader';
import KgpError from '@/components/shared/KgpError/KgpError';
import KgpMailPreview from '@/components/shared/KgpMailPreview/KgpMailPreview';
import { handleError } from '@/mixins/handleError';
import { messages } from '@/config/constants';
import { mapState } from 'vuex';

export default {
    name: 'kgp-product',
    data() {
        return {
            msg: '',
            draft: {
                text_marke: '',
                text_product: '',
                text_productdetails: '',
                text_amount: '',
                text_descr: ''
            }
        }
    },
    beforeCreate() {
        this.$store.dispatch('setStep', 2);
    },
    computed : {
        products() {
            return this.$store.getters.products;
        },
        barcode() {
            return this.$store.getters.barcode;
        },
        error() {
            return this.$store.getters.error;
        }
    },
    methods: {
        doSubmit() {
            this.$store.dispatch('setProducts', [{
                barcode: this.$store.getters.barcode,
                vendor: 'Unbekannt',
                name: 'Unbekannt',
                descr: 'Unbekannt',
            }]);
            this.$store.dispatch('setDraft', this.draft);
            this.$router.push('/send');
        },
        doRedirect() {
            this.$router.push('/send');
        }
    },
    components: {
        BounceLoader,
        KgpError,
        KgpMailPreview
    },
    computed: mapState([
        'showDraftForm',
        'products',
        'barcode'
    ]),
    mixins: [handleError]
};
</script>
