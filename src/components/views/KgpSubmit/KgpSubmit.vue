<template>
    <div class="step step--4" id="step_4">
        <svg class="symbols"  x="0px" y="0px" viewBox="0 0 64 80" style="enable-background:new 0 0 64 64;">
            <symbol id="scancomplete" x="0px" y="0px" width="100" height="125" viewBox="0 0 100 125" xml:space="preserve">
<path d="M68.604,36.099L43.513,61.19L32.396,50.073c-0.781-0.781-2.048-0.781-2.828,0  c-0.781,0.781-0.781,2.047,0,2.828l12.531,12.532c0.375,0.375,0.884,0.585,1.414,0.585s1.039-0.21,1.414-0.585l26.506-26.506  c0.781-0.781,0.781-2.047,0-2.828S69.385,35.317,68.604,36.099z"/><path  d="M50,8C27.234,8,8,27.233,8,50s19.234,42,42,42s42-19.233,42-42S72.766,8,50,8z M50,88  c-20.598,0-38-17.402-38-38s17.402-38,38-38s38,17.402,38,38S70.598,88,50,88z"/>
            </symbol>
        </svg>
        <h2 class="headline headline--primary">
            <span class="headline__inner headline__inner--primary">
                {{ !loading && !error ? 'Danke für Dein Feedback!' : 'Fast Geschafft...' }}
            </span>
        </h2>
        <div class="step__inner">
            <hr class="waves" />
            <div class="product">
                <div v-if="loading" class="product__loading">
                    <bounce-loader :loading="loading" color="#fff"></bounce-loader>
                    Danke für dein Feedback!
                </div>
                <kgp-error v-on:reset="submitEntry"></kgp-error>
                <div v-if="!loading && !error" class="product__content">
                    <div class="submit__icon-outer">
                        <svg class="submit__icon" x="0px" y="0px" width="100" height="125" viewBox="0 0 100 125">
                            <use xlink:href="#scancomplete"></use>
                        </svg>
                    </div>
                    <p>
                        Gemeinsam schaffen wir eine spürbare Nachfrage nach plastikfreien Verpackungen, die auch bei den Anbietern und Herstellern ankommt. Wir geben deinen Wunsch an den Anbieter weiter. Er wird in der Regel nach vier Wochen benachrichtigt, oder wenn 20 weitere Personen dieses Produkt mit der ReplacePlastic-App eingesendet haben.
                    </p>
                    <button type="button" v-on:click.prevent="restartApp" class="form__button">
                        Ein weiteres Produkt scannen
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import api from '@/api';
import BounceLoader from 'vue-spinner/src/BounceLoader';
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
        draft() {
            return this.$store.state.draft;
        },
        barcode() {
            return this.$store.getters.barcode;
        },
        error() {
            return this.$store.getters.error;
        }
    },
    mounted() {
        this.submit()
    },
    methods: {
        submit() {
            if(this.$store.getters.isDraftValid) {
                this.submitEntry().then(res => {
                    return this.submitDraft();
                }).then(res => {
                    this.loading = false;
                })
            } else {
                this.submitEntry().then(res => {
                    this.loading = false;
                })
            }
        },
        submitEntry(){
            return api.create(Object.assign(this.user, {
                barcode: this.barcode
            })).then(res => {
                this.$store.dispatch('addHistory', this.$store.getters.products);
                this.$store.dispatch('resetProducts');
                if(!this.$store.getters.isDraftValid) {
                    this.$store.dispatch('resetBarcode');
                }
                return res;
            }).catch((err) => this.handleError)
        },
        submitDraft() {
            let data = Object.assign({}, this.draft);
            data.barcode = this.barcode;
            return api.submitDraft(data).then(res => {
                this.$store.dispatch('resetBarcode');
                this.$store.dispatch('resetDraft');
                return res;
            }).catch((err) => this.handleError)
        },
        restartApp() {
            this.$store.dispatch('resetState');
            this.$router.push('/');
        }
    },
    components: {
        BounceLoader,
        KgpError
    }
};
</script>

<style lang="scss">
.submit {
    &__icon {
        width: 20vw;
        height: auto;
        margin: 0 auto;
        fill: #fff;
        &-outer {
            text-align: center;
            position: relative;
            top: 20px;
        }
    }
}
</style>
