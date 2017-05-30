// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('typeface-slabo-13px');
require('typeface-slabo-27px');
require('typeface-lato');

import Vue from 'vue';

import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);

import KgpApp from './KgpApp';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
const ReplacePlasticApp = new Vue({
  components: { KgpApp },
  template: '<KgpApp/>',
  el: '#app',
  store,
  router
});

export default ReplacePlasticApp;
