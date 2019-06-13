<template>
    <div class="step step--3" id="step_3">

        <h2 class="headline headline--primary" v-if="!loading && products.length && !error">
            <span class="headline__inner headline__inner--primary">
                Wir haben Produkte in unserer Datenbank gefunden:
            </span>
        </h2>

        <div class="step__inner">
            <hr class="waves">
            <div class="product">
                <div class="product__content">
                    <p>
                        <em>"Ich wünsche mir diese<span v-if="products.length<2">s</span> Produkt<span v-if="products.length>1">e</span> in einer Verpackung ohne Plastik / mit weniger Plastik":</em>
                    </p>
                    <transition-group name="item-list" tag="ul" class="item-list">
                        <li class="item-list__item" v-for="product in products" v-bind:key="product.barcode">
                            <strong>Name:</strong> {{ product.name }}<span v-if="product.detailname">: {{ product.detailname }}</span><br>
                            <strong>Anbieter:</strong> {{ product.vendor }}<br>
                            <strong>Barcode:</strong> {{ barcode }}
                            <span  v-if="product.additional_information">
                                <br />
                                <a class="item-list__info" v-on:click.prevent="openLightbox($event, product)">
                                    Wichtige Informationen zum Produkt
                                </a>
                            </span>
                            <div class="item-list__hint item-list__hint--info" v-if="product.vendor_wants_contact">
                                <h3 class="headline headline--tertiary">Hinweis:</h3>
                                Dieser Anbieter wünscht eine persönliche Kontaktaufnahme durch Kunden.<br />
                                Bitte melden Sie sich bei Interesse unter:<br />
                                <address class="item-list__address" v-html="product.vendor_contact_address">
                                </address>
                            </div>
                            <div class="item-list__hint item-list__hint--info" v-if="product.vendor_no_contact_allowed">
                                <h3 class="headline headline--tertiary">Hinweis:</h3>
                                <div class="item-list__address" v-html="decodeHTML(product.vendor_no_contact_allowed_text)">
                                </div>
                            </div>
                        </li>
                    </transition-group>
                </div>
                <kgp-mail-preview></kgp-mail-preview>
                <button v-if="!error" v-on:click.prevent="doSubmit" class="form__button">
                    Verbesserungswunsch senden
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import api from '@/api';
import BounceLoader from 'vue-spinner/src/BounceLoader';
import KgpError from '@/components/shared/KgpError/KgpError';
import KgpMailPreview from '@/components/shared/KgpMailPreview/KgpMailPreview';
import { messages } from '@/config/constants';

export default {
    name: 'kgp-product',
    data() {
        return {
            loading: true,
            msg: '',
            showDraftForm: false
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
        openLightbox($event, product) {
            this.$store.dispatch('setLightboxContent', product.additional_information);
        },
        doSubmit() {
            this.$router.push('/send');
        },
        decodeHTML(html) {
            var txt = document.createElement('textarea');
            txt.innerHTML = html;
            return txt.value;
        }

    },
    components: {
        BounceLoader,
        KgpError,
        KgpMailPreview
    }
};
</script>

<style lang="scss">
.item {
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
            &--date {
                display: flex;
                flex-wrap: nowrap;
            }
        }
        &__info {
            text-decoration: underline;
            background: #fff;
            color: rgb(12, 104, 154);
            padding: 2px 5px 5px 5px;
            display: inline-block;
            margin-top: 5px;
            cursor: pointer;
        }
        &__product {
            font-size: 1.2rem;
            margin-bottom: 5px;
        }
        &__icon {
            position: relative;
            top: 7px;
        }
        &__hint {
            background: #fff;
            padding: 5px 25px 10px 25px;
            margin-top: 25px;
            color: #0e6899;
        }
        &__address {
            font-style: normal;
        }
        &__date {
            width: 22%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: middle;
            text-align: center;
            background: rgba(255,255,255,.1);
            padding: 5px;
            margin-right: 5%;
            span {
                width: 100%;
                display: block;
            }
        }
        &__time {
            width: 100%;
            font-size: 1.5rem;
            font-weight: bold;
        }
        &__dmy {
            width: 100%;
            font-size: .75rem;
        }
        &__content {
            width: 83%;
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
        p {
            font-size: 14px;
        }
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
