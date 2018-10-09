<template>
    <div class="kgp-stats">
        <div class="count-items">
            <div class="count-items__item">
                <div class="count-items__inner">
                    <div>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                        <g transform="translate(0,-952.36218)">
                            <path fill="#FFFFFF" d="M4.937,959.026c-0.958,0-1.747,0.789-1.747,1.747v15.721c0,0.959,0.789,1.748,1.747,1.748h22.128
                                c0.958,0,1.746-0.789,1.746-1.748v-15.721c0-0.958-0.788-1.747-1.746-1.747H4.937z M4.937,960.19h22.128
                                c0.332,0,0.582,0.25,0.582,0.583v15.721c0,0.332-0.25,0.583-0.582,0.583H4.937c-0.333,0-0.583-0.251-0.583-0.583v-15.721
                                C4.354,960.44,4.604,960.19,4.937,960.19z M6.629,961.937c-0.3,0.029-0.528,0.281-0.527,0.582v4.659
                                c0,0.321,0.261,0.582,0.583,0.582h4.076c0.321,0,0.582-0.261,0.582-0.582v-4.659c0-0.321-0.261-0.582-0.582-0.582H6.684
                                C6.666,961.936,6.647,961.936,6.629,961.937z M7.266,963.102h2.911v3.494H7.266V963.102z M14.199,967.178
                                c-0.322,0.015-0.57,0.288-0.555,0.61c0.015,0.322,0.288,0.568,0.609,0.554h5.241c0.323,0.005,0.587-0.252,0.592-0.573
                                c0.004-0.322-0.253-0.586-0.576-0.59c-0.004,0-0.011,0-0.016,0h-5.241C14.236,967.177,14.217,967.177,14.199,967.178z
                                M14.199,969.508c-0.322,0.015-0.57,0.287-0.555,0.609c0.015,0.321,0.288,0.57,0.609,0.555h11.063
                                c0.323,0.004,0.587-0.252,0.592-0.572c0.004-0.323-0.252-0.588-0.573-0.592c-0.007,0-0.012,0-0.019,0H14.253
                                C14.236,969.507,14.217,969.507,14.199,969.508z M14.199,971.838c-0.322,0.014-0.57,0.287-0.555,0.608
                                c0.015,0.321,0.288,0.57,0.609,0.556h11.063c0.323,0.004,0.587-0.253,0.592-0.576c0.004-0.319-0.252-0.584-0.573-0.588
                                c-0.007-0.002-0.012-0.002-0.019,0H14.253C14.236,971.836,14.217,971.836,14.199,971.838z M14.199,974.165
                                c-0.322,0.016-0.57,0.289-0.555,0.61c0.015,0.321,0.288,0.57,0.609,0.555l0,0h11.063c0.323,0.005,0.587-0.252,0.592-0.573
                                c0.004-0.322-0.252-0.586-0.573-0.592c-0.007,0-0.012,0-0.019,0H14.253C14.236,974.164,14.217,974.164,14.199,974.165z"/>
                        </g>
                        </svg>
                        <div class="count-items__headline">Einsendungen:</div>
                        <ICountUp
                            :startVal="0"
                            :endVal="entryCount"
                            :decimals="0"
                            :duration="3"
                            :options="defaultOptions" />
                    </div>
                </div>
            </div>
            <div class="count-items__item">
                <div class="count-items__inner">
                    <div>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                            <g>
                                <path fill="#FFFFFF" d="M27.02,7.507H4.981c-1.189,0-2.128,0.971-2.128,2.129v13.835c0,1.189,0.97,2.129,2.128,2.129H27.02
                                    c1.189,0,2.128-0.971,2.128-2.129V9.637C29.147,8.446,28.178,7.507,27.02,7.507z M26.61,8.76l-9.201,9.203
                                    c-0.784,0.782-2.036,0.782-2.818,0L5.388,8.76H26.61z M4.136,23.629c0-0.063-0.032-0.094-0.032-0.157V9.637
                                    c0-0.125,0.032-0.22,0.062-0.345l0.031,0.031l7.106,7.106L4.136,23.629z M5.169,24.348l7.043-7.043l1.534,1.535
                                    c0.626,0.625,1.44,0.939,2.285,0.939c0.846,0,1.66-0.314,2.286-0.939l1.439-1.44l6.951,6.948H5.169z M27.896,23.472
                                    c0,0.094-0.031,0.188-0.063,0.282l-7.229-7.231l7.198-7.2l0.031-0.031c0.032,0.094,0.063,0.22,0.063,0.345V23.472z"/>
                            </g>
                        </svg>

                        <div class="count-items__headline">Mails versendet:</div>
                        <ICountUp
                            :startVal="0"
                            :endVal="mailsSent"
                            :decimals="0"
                            :duration="2.5"
                            :options="defaultOptions" />
                    </div>
                </div>
            </div>
            <div class="count-items__item">
                <div class="count-items__inner">
                    <div>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                            <path fill="#ffffff" d="M24.132,13.149H8.045c-0.345,0-0.625-0.28-0.625-0.624V9.683c0-0.637,0.518-1.156,1.155-1.156h15.026
                                c0.638,0,1.156,0.519,1.156,1.156v2.843C24.758,12.869,24.477,13.149,24.132,13.149z M8.575,11.994h15.026V9.683H8.575V11.994z"/>
                            <path fill="#ffffff" d="M16.088,29.91c-2.23,0-4.046-1.816-4.046-4.047v-7.871l-4.477-5.037l0.864-0.768l4.769,5.366v8.31
                                c0,1.594,1.297,2.89,2.89,2.89c1.593,0,2.89-1.296,2.89-2.89v-8.31l4.769-5.366l0.864,0.768l-4.478,5.037v7.871
                                C20.134,28.094,18.319,29.91,16.088,29.91z"/>
                            <rect fill="#ffffff" x="15.511" y="20.663" width="1.155" height="3.467"/>
                            <rec fill="#ffffff" x="8.575" y="6.215" width="1.156" height="1.156"/>
                            <rect fill="#ffffff" x="10.887" y="6.215" width="1.155" height="1.156"/>
                            <rect fill="#ffffff" x="13.199" y="6.215" width="1.156" height="1.156"/>
                            <rect fill="#ffffff" x="15.511" y="6.215" width="1.155" height="1.156"/>
                            <rect fill="#ffffff" x="17.822" y="6.215" width="1.156" height="1.156"/>
                            <rect fill="#ffffff" x="20.134" y="6.215" width="1.155" height="1.156"/>
                            <rect fill="#ffffff" x="22.445" y="6.215" width="1.156" height="1.156"/>
                            <rect fill="#ffffff" x="8.575" y="2.169" width="1.156" height="2.312"/>
                            <rect fill="#ffffff" x="10.887" y="2.169" width="1.155" height="2.312"/>
                            <rect fill="#ffffff" x="13.199" y="2.169" width="1.156" height="2.312"/>
                            <rect fill="#ffffff" x="15.511" y="2.169" width="1.155" height="2.312"/>
                            <rect fill="#ffffff" x="17.822" y="2.169" width="1.156" height="2.312"/>
                            <rect fill="#ffffff" x="20.134" y="2.169" width="1.155" height="2.312"/>
                            <rect fill="#ffffff" x="22.445" y="2.169" width="1.156" height="2.312"/>
                            <rect fill="#ffffff" x="6.842" y="5.637" width="18.493" height="1.156"/>
                        </svg>
                        <div class="count-items__headline">Produkte gescannt:</div>
                        <ICountUp
                            :startVal="0"
                            :endVal="productCount"
                            :decimals="0"
                            :duration="2"
                            :options="defaultOptions" />
                    </div>
                </div>
            </div>
            <div class="count-items__item">
                <div class="count-items__inner">
                    <div>
                        <svg version="1.1" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                            <g transform="translate(0,-952.36218)">
                                <path d="M8.279,957.114v7.508l2.969,1.596v-3.165c-0.006-0.407,0.5-0.722,0.863-0.538l7.451,3.731v-3.193
                                    c-0.006-0.407,0.5-0.722,0.863-0.538l8.314,4.158c0.198,0.1,0.329,0.317,0.326,0.539v11.284c-0.001,0.311-0.283,0.596-0.595,0.596
                                    H3.527c-0.311,0-0.594-0.285-0.594-0.596v-21.381c0-0.311,0.283-0.593,0.594-0.593h4.158
                                    C8.018,956.524,8.271,956.847,8.279,957.114L8.279,957.114z M7.091,957.708H4.122v20.193h23.756v-10.319l-7.127-3.563v3.192
                                    c0,0.403-0.503,0.711-0.863,0.529l-7.452-3.721v3.192c-0.003,0.405-0.514,0.709-0.872,0.52l-4.158-2.228
                                    c-0.188-0.1-0.313-0.306-0.315-0.519V957.708z M25.205,970.477c0.311,0,0.594,0.283,0.594,0.594v2.969
                                    c0,0.312-0.283,0.596-0.594,0.596h-4.157c-0.311,0-0.595-0.283-0.595-0.596v-2.969c0-0.311,0.284-0.594,0.595-0.594H25.205z
                                    M18.078,970.477c0.311,0,0.594,0.283,0.594,0.594v2.969c0,0.312-0.283,0.596-0.594,0.596h-4.157c-0.311,0-0.594-0.283-0.594-0.596
                                    v-2.969c0-0.311,0.283-0.594,0.594-0.594H18.078z M10.952,970.477c0.311,0,0.593,0.283,0.594,0.594v2.969
                                    c0,0.312-0.283,0.596-0.594,0.596H6.794c-0.311,0-0.595-0.283-0.595-0.596v-2.969c0-0.311,0.284-0.594,0.595-0.594H10.952z
                                    M24.611,971.665h-2.97v1.781h2.97V971.665z M17.484,971.665h-2.969v1.781h2.969V971.665z M10.357,971.665H7.388v1.781h2.969
                                    V971.665z"/>
                            </g>
                        </svg>
                        <div class="count-items__headline">Anbieter verzeichnet:</div>
                        <ICountUp
                            :startVal="0"
                            :endVal="vendorCount"
                            :decimals="0"
                            :duration="1.5"
                            :options="defaultOptions" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ICountUp from 'vue-countup-v2'

export default {
    name: 'kgp-total-numbers',
    props: ['productCount', 'entryCount', 'mailsSent', 'vendorCount'],
    data: () => {
        return {
            defaultOptions: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            }
        }
    },
    components: {
        ICountUp
    }
}
</script>
<style lang="scss">
.kgp-stats {
    display: block;
    margin-bottom: 40px;
}
.count-items {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    &__item {
        width: 50%;
        padding-top: 50%;
        position: relative;
    }
    &__inner {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, .2);
    }
    &__entrys {
        width: 100%;
    }
    &__headline {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        @include fluid-type(16px, 22px);
    }
    span {
        font-size: 25px;
    }
}
</style>
