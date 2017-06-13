<template>
    <div class="step step--3" id="step_3">
        <h2 class="headline headline--primary" v-if="loading">
            <span class="headline__inner headline__inner--primary">
                Einen kleinen Moment Geduld:
            </span>
        </h2>
        <h2 class="headline headline--primary" v-if="!loading && products.length && !error">
            <span class="headline__inner headline__inner--primary">
                Wir haben Produkte in unserer Datenbank gefunden:
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
                    <p>
                        <em>"Ich wünsche mir diese<span v-if="products.length<2">s</span> Produkt<span v-if="products.length>1">e</span> in einer Verpackung ohne Plastik / mit weniger Plastik":</em>
                    </p>
                    <transition-group name="product-list" tag="ul" class="product-list">
                        <li class="product-list__item" v-for="product in products" v-bind:key="product.barcode">
                            <strong>Name:</strong> {{ product.name }}<span v-if="product.detailname">: {{ product.detailname }}</span><br />
                            <strong>Hersteller:</strong> {{ product.vendor }}<br />
                            <strong>Barcode:</strong> {{ barcode }}
                        </li>
                    </transition-group>
                </div>
                <div v-if="!loading &&  !error && !products.length">
                    <h3 class="headline headline--tertiary">Das macht aber nichts...</h3>
                    <p>
                        Du kannst uns helfen, die Daten zu verbessern, indem Du deinen Verbesserungswunsch trotzdem sendest. Über die Barcode-Nummer <strong>{{ barcode }}</strong>
                        können wir das Produkt finden.
                    </p>
                    <p>
                        Dein Wunsch wird natürlich trotzdem an den Hersteller gesendet.
                    </p>
                </div>
                <a v-if="!loading && !error" class="product-list__mail-link" @click.prevent="toggleMail">{{ showMail ? '▲' : '►' }} Beispiel E-Mail {{ showMail ? 'ausblenden' : 'ansehen' }}</a>

                <div v-on:click.prevent="toggleMail" class="letter" v-bind:class="{ 'letter--open' : showMail }" v-if="!loading && !error">
                    <div class="letter__inner">
                        <h3 class="headline headline--tertiary">Sehr geehrte Damen und Herren,</h3>
                        <p>
                            wir wenden uns heute an Sie, weil Sie
                            <span v-if="products && products.length">
                                <span v-if="products.length === 1">das Produkt</span><span v-if="products.length > 1">die Produkte</span>"<strong v-for="product in products"> {{ product.name }}
                                    <span v-if="product.detailname">: {{ product.detailname }}</span>
                                </strong>"
                            </span>
                            <span v-if="!products || !products.length">
                                Das Produkt mit dem Barcode {{ barcode }}
                            </span> anbieten.
                        </p>
                        <p>
                            Viele Verbraucher haben über unsere App ReplacePlastic angegeben, dass sie sich
                            <span v-if="products && products.length">
                                <span v-if="products.length === 1">
                                    das Produkt
                                </span>
                                <span v-if="products.length > 1">
                                    die Produkte
                                </span>
                            </span><span v-if="!products">Ihr Produkt</span> in einer Verpackung ohne Plastik/mit weniger Plastik wünschen.
                        </p>
                        <p>
                            Plastikmüll in den Meeren stellt ein großes Problem dar, weshalb immer mehr Verbraucher ein
                            Bewusstsein für dieses Thema zeigen. Viele Menschen wünschen sich plastikfreie Verpackungen.
                            Aus diesem Grund senden wir Ihnen heute die Wünsche der Verbraucher zu Ihrem Produkt.
                        </p>
                        <p>
                            Wir hoffen, dass diese Information über die Wünsche und Werte Ihrer Zielgruppen
                            Sie hilfreich ist, um bessere Lösungen für Ihre Kunden zu verwirklichen.
                        </p>
                        <p>
                            Für mehr Informationen zu unserem Projekt besuchen Sie gern unsere Website <u>ReplacePlastic.de.</u><br /><br />
                            <i>Mit freundlichen Grüßen, das Team vom Verein Küste gegen Plastik e.V.</i><br /><br />
                        </p>
                        <p>
                            Küste gegen Plastik e.V.<br />
                            Reimersbude 12<br />
                            25889 Witzwort<br />
                            Tel.:  0176 68280364 (Jennifer Timrott, Vorsitzende)<br />
                            Mail: <i>post@kueste-gegen-plastik.de</i>
                        </p>
                    </div>
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
            showMail: false,
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
        toggleMail() {
            this.showMail = !this.showMail;
        },
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
            if(!this.$store.getters.products.length) {
                this.$store.dispatch('setProducts', [
                    {
                        barcode: this.$store.getters.barcode,
                        vendor: 'Unbekannt',
                        name: 'Unbekannt',
                        descr: 'Unbekannt',
                    }
                ]);
            }
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
            position: relative;
            background: rgba(0,99,176,.29);
            color: #fff;
            border: 1px solid rgba(255,255,255,.5);
            padding: 1rem;
            margin-bottom: .5rem;
            box-shadow: 0 0 5px rgba(0,0,0,.3);
            &-enter-active, &-leave-active {
                transition: all .5s;
            }
            &-enter, &-leave-to {
                opacity: 0;
                transform: translateY(30px);
            }
        }
        &__delete {
            position: absolute;
            right: 0;
            top: 0;
            color: #033c6a;
            font-size: 13px;
            background: rgba(#fff,.7);
            border: none;
            width: 24px;
            height: 24px;
        }
        &__mail-link {
            text-align: right;
            background: rgba(#000, .05);
            padding: 3px 5px;
            display: inline-block;
            font-size: 13px;
        }
    }
    &__content {
        margin-bottom: 20px;
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
.letter {
    $context: &;
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    margin: 26px auto 0;
    padding: 0;
    position: relative;
    color: #033c6a;
    margin: 0 10px;
    font-style: italic;
    font-size: 14px;
    max-height: 0;
    transition: max-height .2s ease-in;

    &:before,
    &:after {
        content: "";
        height: 98%;
        position: absolute;
        width: 100%;
        z-index: 0;
    }
    &:before {
        background: #fafafa;
        box-shadow: 0 0 8px rgba(0,0,0,0.2);
        left: 5px;
        top: 2px;
        transform: rotate(-1.5deg);
    }
    &:after {
        background: #f6f6f6;
        box-shadow: 0 0 3px rgba(0,0,0,0.2);
        right: -3px;
        top: 1px;
        transform: rotate(1.4deg);
    }

    &--open {
        padding: 24px;
        max-height: 2000px;
    }
    &__preview {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        line-height: 90px;
        font-size: 18px;
        color: #d00;
        z-index: 2;
        text-align: center;
        #{$context}--open & {
            opacity: 0;
        }
    }
    &__inner {
        opacity: .2;
        position: relative;
        z-index: 2;
        overflow: hidden;
        max-height: 0;
        #{$context}--open & {
            opacity: 1;
            max-height: 2000px;
        }
    }
    &--open {
        max-height: 1500px;
    }

}
</style>
