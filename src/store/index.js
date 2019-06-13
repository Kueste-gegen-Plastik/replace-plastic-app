import Vue from 'vue';
import Vuex from 'vuex';
import {
    actions
} from './actions';
import {
    mutations
} from './mutations';
import {
    getters
} from './getters';

Vue.use(Vuex);

const state = {
    products: [],
    error: false,
    barcode: '',
    token: '',
    user: {
        firstname: '',
        name: '',
        zip: ''
    },
    step: 1,
    history: [],
    userSet: false,
    menuOpen: false,
    nagscreen: false,
    seenTour: false,
    lastRoute: '',
    lightboxContent: '',
    isLoading: true,
    draft: {
        text_marke: '',
        text_product: '',
        text_productdetails: '',
        text_amount: '',
        text_descr: ''
    },
    sentDraft: false
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
