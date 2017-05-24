<template>
    <div class="step step--3" id="step_3">
        <div class="step__number">
            3
        </div>
        <div class="step__line"></div>
        <h2 class="headline headline--primary" v-if="loading">
           Einen kleinen Moment Geduld:
        </h2>
        <h2 class="headline headline--primary" v-if="!loading && products.length && !error">
            Wir haben folgend<span v-if="products.length>1">e</span> Produkte in unserer Datenbank gefunden:
        </h2>
        <h2 class="headline headline--primary" v-if="!loading && !products.length && !errors.length">
            Dieses Produkt ist leider noch nicht in der Datenbank
        </h2>

        <div class="step__inner">
            <div class="product">
                <div v-if="loading" class="product__loading">
                    <bounce-loader :loading="loading" color="#fff"></bounce-loader>
                    {{ msg }}
                </div>
                <div v-if="!loading && errors.length" class="product__error">
                    {{ errors }}
                </div>
                <div v-if="!loading && products.length && !error" class="product__content">
                     <ul class="product-list">
                        <li class="product-list__item" v-for="product in products">
                            <strong>Name:</strong> {{ product.name }}<span v-if="product.detailname">: {{ product.detailname }}</span><br />
                            <strong>Hersteller:</strong> {{ product.vendor }}<br />
                            <strong>Barcode:</strong> {{ barcode }}
                        </li>
                    </ul>
                    <p>
                        Ich wünsche mir dieses Produkt in einer Verpackung ohne Plastik / mit weniger Plastik.
                    </p>
                    <a class="form__button">
                        Verbesserungswunsch senden
                    </a>
                </div>
                <div v-if="!loading && !products.length && !errors.length" class="product__content">
                    <div class="form__description">
                        <p>
                            Du kannst uns helfen, die Daten zu verbessern, indem Du deinen Verbesserungswunsch trotzdem sendest. Über die Barcode-Nummer
                            können wir das Produkt finden. Dein Wunsch wird trotzdem an den Hersteller gesendet.
                        </p>
                        <p>
                            Barcode-Nummer: {{ barcode }}
                        </p>
                    </div>
                    <a class="form__button">
                        Verbesserungswunsch senden
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Api from '../../api';
import config from '../../config/env.js';
import BounceLoader from 'vue-spinner/src/BounceLoader.vue';

export default {
    name: 'kgp-product',
    data() {
        return {
            loading: true,
            msg: ''
        }
    },
    mounted() {
        this.loadProduct();
    },
    computed : {
        products() {
            return this.$store.getters.products;
        },
        errors() {
            return this.$store.getters.errors;
        },
        barcode() {
            return this.$store.getters.barcode;
        }
    },
    methods: {
        loadProduct(){
            this.msg = 'Melde mich am Server an...';
            return Api.login(this.$store.state.user).then(res => {
                this.$store.dispatch('setToken', res.data.token);
                this.msg = 'Durchsuche die Produktdatenbank...';
                return Api.searchEan(this.$store.state.barcode);
            }).then(res => {
                this.loading = false;
                let retVal = [];
                for(var key in res) {
                    retVal.push(res[key]);
                }
                this.$store.dispatch('setProducts', retVal);
            }).catch(err => {
                this.loading = false;
                this.error = err;
            });
        }
    },
    components: {
        BounceLoader
    }
};
</script>

<style lang="scss">
.product {

}
.product-list {
    list-style: none;
    border-top: 1px solid rgba(255,255,255,.5);
    margin: 0;
    padding: 0;
    &__item {
        color: rgba(#033c6a, .9);
        border-bottom: 1px solid rgba(255,255,255,.5);
        padding: 2rem 0;
    }
}
</style>
