// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'polyfill-array-includes'
import 'array-findindex-polyfill'
import 'array-from-polyfill'

require('typeface-slabo-13px')
require('typeface-slabo-27px')
require('typeface-lato')

if (process.env.VUE_APP_TARGET_OS === 'web') {
    import('./registerServiceWorker')
} else {
    document.addEventListener(
        'deviceready',
        () => {
            if (
                typeof window.cordova !== 'undefined' &&
                Object.prototype.hasOwnProperty.call(
                    window.cordova.plugins,
                    'InAppBrowser'
                )
            ) {
                window.open = window.cordova.InAppBrowser.open
            }
        },
        false
    )
}

import Vue from 'vue'

if (process.env.NODE_ENV === 'production') {
    Vue.config.productionTip = false
}

import VueScrollTo from 'vue-scrollto'
import VueMq from 'vue-mq'
import VueTour from 'vue-tour'
import Toasted from 'vue-toasted'
import 'vue-tour/dist/vue-tour.css'

Vue.use(VueScrollTo)
Vue.use(Toasted)
Vue.use(VueTour)
Vue.use(VueMq, {
    breakpoints: {
        small: 468,
        medium: 980,
        large: 1280,
        xlarge: Infinity
    }
})

import KgpApp from './KgpApp'
import router from './router'
import store from './store'

/* eslint-disable no-new */
const ReplacePlasticApp = new Vue({
    components: {
        KgpApp
    },
    template: '<KgpApp/>',
    el: '#app',
    store,
    router
})

export default ReplacePlasticApp
