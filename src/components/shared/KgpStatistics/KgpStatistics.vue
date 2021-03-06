<template>
    <div class="step__inner">
        <div class="kgp-statistics">
            <h2 class="headline headline--primary">
                <span class="headline__inner headline__inner--primary">
                    Zahlen, Daten, Fakten
                </span>
            </h2>
            <kgp-total-numbers :entry-count="entry_count"
                :mails-sent="mails_sent"
                :product-count="product_count"
                :vendor-count="vendor_count">
            </kgp-total-numbers>

            <div class="stats-container" v-if="vendorData.length">
                <hr class="waves" />
                <h2 class="headline headline--secondary headline--centered">An diese Anbieter wird viel Feedback gesendet:</h2>
                <kgp-word-cloud :data="vendorData"></kgp-word-cloud>
            </div>

            <div class="stats-container">
                <hr class="waves" />
                <h2 class="headline headline--secondary headline--centered">Kürzlich eingereichte Produkte</h2>
                <kgp-latest-products :products="latest_products"></kgp-latest-products>
            </div>

            <div class="stats-container">
                <hr class="waves" />
                <h2 class="headline headline--secondary headline--centered">Kürzlich versandte Mails</h2>
                <kgp-latest-mails :mails="mails_details"></kgp-latest-mails>
            </div>
            <div v-if="loading" class="stats-loading">
                <bounce-loader :loading="loading" color="#fff"></bounce-loader>
            </div>
        </div>
    </div>
</template>

<script>
import Api from '@/api'
import KgpTotalNumbers from './KgpTotalNumbers/KgpTotalNumbers'
import KgpDoughnut from './charts/KgpDoughnut/KgpDoughnut'
import KgpWordCloud from './KgpWordCloud/KgpWordCloud'
import KgpLatestProducts from './KgpLatestProducts/KgpLatestProducts'
import KgpLatestMails from './KgpLatestMails/KgpLatestMails'
import BounceLoader from 'vue-spinner/src/BounceLoader';
import { handleError } from '@/mixins/handleError'

export default {
    name: 'kgp-statistics',
    data() {
        return {
            entry_count: 0,
            mails_sent: 0,
            product_count: 0,
            vendor_count: 0,
            latest_products: [],
            mails_details: [],
            top_vendors: null,
            loading: true,
            chartOptions: {
                legend: {
                    position: 'bottom',
                    labels: {
                        fontColor: '#fff',
                        fontFamily: "'Lato', sans-serif",
                        fontSize: 14
                    }
                }
            }
        }
    },
    computed: {
        vendorData() {
            if(this.top_vendors === null) return [];
            return this.top_vendors.map(vendor => {
                return [vendor.data, Math.round(parseInt(vendor.count)*0.01)];
            })
        }
    },
    beforeMount() {
        Api.getStats().then(res => {
            this.entry_count = isNaN(parseInt(res.entry_count)) ? 0 : parseInt(res.entry_count);
            this.mails_sent = isNaN(parseInt(res.mails_sent)) ? 0 :  parseInt(res.mails_sent);
            this.product_count =  isNaN(parseInt(res.product_count)) ? 0 : parseInt(res.product_count);
            this.vendor_count = isNaN(parseInt(res.vendor_count)) ? 0 : parseInt(res.vendor_count);
            this.top_vendors = res.top_vendors.slice(0,16).filter(itm => itm != '--');
            let tmpProducts = [];
            this.latest_products = res.latest_products && res.latest_products.length ? res.latest_products.filter(function(item, pos, self) {
                if(tmpProducts.indexOf(item.barcode)>-1) {
                    return false;
                }
                tmpProducts.push(item.barcode)
                return true;
            }).slice(0,5) : [];
            this.mails_details = res.mails_details && res.mails_details.length ? res.mails_details.slice(0,5) : [];
            this.loading = false;
        }).catch( err => {
            this.handleError(err)
            this.loading = false;
        });
    },
    components: {
        KgpDoughnut,
        KgpLatestProducts,
        KgpTotalNumbers,
        KgpLatestMails,
        KgpWordCloud,
        BounceLoader
    },
    mixins:[handleError]
};
</script>
<style>
.kgp-statistics {
    position: relative;
}
.stats-container {
    margin-bottom: 40px;
}
.stats-loading {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,.2);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
