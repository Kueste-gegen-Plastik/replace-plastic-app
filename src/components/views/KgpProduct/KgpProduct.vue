<template>
    <div class="step step--3" id="step_3">
        <h2 class="headline headline--primary" v-if="loading">
            <span class="headline__inner headline__inner--primary">
                Einen kleinen Moment Geduld:
            </span>
        </h2>
        <h2 class="headline headline--primary" v-if="!loading && products.length && !errors.length">
            <span class="headline__inner headline__inner--primary">
                Wir haben folgend<span v-if="products.length>1">e</span> Produkte in unserer Datenbank gefunden:
            </span>
        </h2>
        <div v-if="!loading && !products.length && !errors.length">
            <h2 class="headline headline--primary" >
                <span class="headline__inner headline__inner--primary">
                    Dieses Produkt ist leider noch nicht in unserer Datenbank
                </span>
            </h2>
        </div>

        <div class="step__inner">
            <hr class="waves" />
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
                        Ich wünsche mir diese<span v-if="products.length<2">s</span> Produkt<span v-if="products.length>1">e</span> in einer Verpackung ohne Plastik / mit weniger Plastik.
                    </p>
                </div>
                <div v-if="!loading && !products.length && !errors.length" class="product__content">
                    <h3 class="headline headline--tertiary">Das macht aber nichts...</h3>
                    <div class="form__description">
                        <p>
                            Du kannst uns helfen, die Daten zu verbessern, indem Du deinen Verbesserungswunsch trotzdem sendest. Über die Barcode-Nummer <strong>{{ barcode }}</strong>
                            können wir das Produkt finden.
                        </p>
                        <p>
                            Dein Wunsch wird natürlich trotzdem an den Hersteller gesendet.
                        </p>
                    </div>
                </div>
                <router-link to="submit" v-if="!loading" class="form__button">
                    Verbesserungswunsch senden
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
import Api from '@/api';
import config from '@/config';
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
    beforeCreate() {
        this.$store.dispatch('setStep', 3);
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
    &-list {
        list-style: none;
        border-top: 1px solid rgba(255,255,255,.5);
        margin: 20px 0 0 0;
        padding: 0;
        &__item {
            background: rgba(0,99,176,.29);
            color: #fff;
            border: 1px solid rgba(255,255,255,.5);
            padding: 1rem;
            margin-bottom: .5rem;
            box-shadow: 0 0 5px rgba(0,0,0,.3);
        }
    }
    &__content {
        margin-bottom: 30px;
    }
}
</style>
