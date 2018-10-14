<template>
    <div class="step step--3" id="step_3">
        <h2 class="headline headline--primary">
            <span v-if="history.length" class="headline__inner headline__inner--primary">
               Du hast bereits {{ history.length }} Produkt{{ history.length > 1 ? 'e' : '' }} eingesendet:
            </span>
            <span v-if="!history.length" class="headline__inner headline__inner--primary">
                Du hast bisher noch keine Produkte eingesendet.
            </span>
        </h2>
        <div class="step__inner">
            <hr class="waves">
            <div class="product">
                <div v-if="history.length" class="product__content">
                     <ul class="item-list">
                        <li class="item-list__item" v-for="product in history" v-bind:key="product.barcode">
                            <button title="Eintrag löschen" class="item-list__delete" type="button" @click.prevent="deleteEntry(product)">X</button>
                            <strong>Name:</strong> {{ product.name }}<span v-if="product.detailname">: {{ product.detailname }}</span><br>
                            <strong>Anbieter:</strong> {{ product.vendor }}<br>
                            <strong>Barcode:</strong> {{ product.barcode }}
                        </li>
                    </ul>
                </div>
            </div>

            <div v-if="!history.length">
                <p>
                    Sobald du Produkte gescannt und eingesendet hast, tauchen Sie hier auf.
                </p>
                <button type="button" v-on:click.prevent="goHome" class="form__button">
                    Jetzt loslegen und {{ history.length ? 'weitere Produkte' : 'Produkte' }} scannen
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import Api from '@/api';
import KgpError from '@/components/shared/KgpError/KgpError';

export default {
    name: 'kgp-history',
    data() {
        return {
            loading: true,
            msg: ''
        }
    },
    computed : {
        history() {
            return this.$store.getters.history;
        }
    },
    methods: {
        deleteEntry(product){
            this.$store.dispatch('removeHistory', product);
        },
        doSubmit() {
            this.$router.push('/send');
        },
        goHome() {
            this.$router.push('/');
        }
    },
    components: {
        KgpError
    }
};
</script>
