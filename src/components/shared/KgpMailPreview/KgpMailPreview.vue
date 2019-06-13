<template>
    <div>
        <a class="item-list__mail-link" @click.prevent="toggleMail">{{ showMail ? '▲' : '►' }} Beispiel E-Mail {{ showMail ? 'ausblenden' : 'ansehen' }}</a>
        <div v-on:click.prevent="toggleMail" class="letter" v-bind:class="{ 'letter--open' : showMail }">
            <div class="letter__inner">
                <h2 class="headline">
                    <span class="headline__inner">
                        Diese E-Mail wird der Anbieter erhalten:
                    </span>
                </h2>
                <h3 class="headline headline--tertiary">Sehr geehrte Damen und Herren,</h3>
                <p>
                    wir wenden uns heute an Sie, weil Sie
                    <span v-if="products && products.length">
                        <span v-if="products.length === 1">das Produkt</span><span v-if="products.length > 1">die Produkte</span>"<strong v-for="product in products" v-bind:key="product.name"> {{ product.name }}
                            <span v-if="product.detailname">: {{ product.detailname }}</span>
                        </strong>"
                    </span>
                    <span v-if="!products || !products.length">
                        Das Produkt mit dem Barcode {{ barcode }}
                    </span> anbieten.
                </p>
                <h3 class="headline">
                        20 Verbraucher haben über unsere App ReplacePlastic angegeben, dass sie sich
                        <span v-if="products && products.length">
                            <span v-if="products.length === 1">
                                das Produkt
                            </span>
                            <span v-if="products.length > 1">
                                die Produkte
                            </span>
                        </span>
                        <span v-if="!products || products.length === 0">Ihr Produkt</span>
                        in einer Verpackung ohne Plastik/mit weniger Plastik wünschen.
                </h3>
                <p>
                    Plastikmüll in den Meeren stellt ein großes Problem dar, weshalb immer mehr Verbraucher ein
                    Bewusstsein für dieses Thema zeigen. Viele Menschen wünschen sich plastikfreie Verpackungen.
                    Aus diesem Grund senden wir Ihnen heute die Wünsche der Verbraucher zu Ihrem Produkt.
                </p>
                <p>
                    Wir hoffen, dass diese Information über die Wünsche und Werte Ihrer Zielgruppen für
                    Sie hilfreich ist, um bessere Lösungen für Ihre Kunden zu verwirklichen.
                </p>
                <p>
                    Für mehr Informationen zu unserem Projekt besuchen Sie gern unsere Website <u>ReplacePlastic.de.</u><br><br>
                    <i>Mit freundlichen Grüßen, das Team vom Verein Küste gegen Plastik e.V.</i><br><br>
                </p>
                <p>
                    Küste gegen Plastik e.V.<br>
                    Eiderweg 33<br>
                    25826 St. Peter-Ording<br>
                    Mail: <i><a href="mailto:post@kueste-gegen-plastik.de">post@kueste-gegen-plastik.de</a></i>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'kgp-mail-preview',
    data() {
        return {
            showMail: false
        }
    },
    computed : {
        products() {
            return this.$store.getters.products;
        },
        barcode() {
            return this.$store.getters.barcode;
        },
    },
    methods: {
        toggleMail() {
            this.showMail = !this.showMail;
        },
    }
};
</script>
<style lang="scss">
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

