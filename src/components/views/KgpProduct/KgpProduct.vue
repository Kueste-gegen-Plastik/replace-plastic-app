<template>
    <div class="step step--3" id="step_3">
        <h2 class="headline headline--primary" v-if="loading">
            <span class="headline__inner headline__inner--primary">
                Einen kleinen Moment Geduld:
            </span>
        </h2>
        <h2 class="headline headline--primary" v-if="!loading && products.length && !error">
            <span class="headline__inner headline__inner--primary">
                Wir haben folgend<span v-if="products.length>1">e</span> Produkte in unserer Datenbank gefunden:
            </span>
        </h2>
        <div v-if="!loading && !products.length && !error">
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
                <kgp-error v-on:reset="loadProduct"></kgp-error>
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
                <div v-if="!loading && !products.length && !error" class="product__content">
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
                <div  v-if="!loading && !error">
                    <h2 class="headline headline--secondary">
                        Diese Mail wird der Hersteller erhalten:
                    </h2>
                    <h3 class="headline headline--tertiary">Sehr geehrte Damen und Herren,</h3>
                    <p>
                        wir wenden uns heute an Sie, weil die das Produkt "(PRODUKTNAME)" herstellen.<br />
                        (ANZAHL DER EINSENDUNGEN) Verbraucher haben über unsere App ReplacePlastic angegeben, dass sie sich Ihr Produkt "(PRODUKTNAME)" in einer Verpackung ohne Plastik/mit w eniger Plastik wünschen.
                        Plastikmüll in den Meeren stellt ein großes Problem dar, weshalb immer mehr Verbraucher ein Bewusstsein für dieses Thema zeigen. Viele Menschen wünschen sich plastikfreie Verpackungen. Aus diesem Grund sendn wir Ihnen heute die Wünsche der Verbraucher zu Ihrem Produkt.
                        Wir hoffen, dass Ihnen diese Informationen über die Wünsche und Werte Ihrer Zielgruppen hilft, für Ihre Kunden bessere Lösungen zu verwirklichen.
                        Für mehr Informationen zu unserem Projekt besuchen Sie gern unsere Website ReplacePlastic.de
                        Sie möchten sich Anregungen für gute Verpackungen holen? In unserem Blog kueste-gegen-plastik.de/blog berichten wir auch über gute Besipiele.<br /><br />
                        Mit freundlichen Grüßen,<br />
                        <i>das Team vom Verein Küste gegen Plastik e.V.</i>
                    </p>
                </div>
                <button v-if="!loading && !error" v-on:click.prevent="doSubmit" class="form__button">
                    Verbesserungswunsch senden
                </button>
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
        loadProduct(){
            this.msg = 'Melde mich am Server an...';
            this.$store.dispatch('resetProducts');
            return Api.login({
                username: config.username,
                password: config.password
            }).then(res => {
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
                var msg = err.hasOwnProperty('response') && err.response && err.response.hasOwnProperty('data') && err.response.data.hasOwnProperty('code') ? err.response.data.code : 4711;
                this.$store.dispatch('setError', msg);
                this.loading = false;
            });
        },
        doSubmit() {
            this.$router.push('/send');
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
    &__loading {
        text-align: center;
        .v-bounce {
            margin: 0 auto;
        }
        .v-spinner {
            margin-bottom: 10px;
        }
    }
}
</style>
