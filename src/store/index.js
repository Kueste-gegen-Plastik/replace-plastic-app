import Vue from 'vue';
import Vuex from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

Vue.use(Vuex);

const state = {
    products: [],
    error: false,
    barcode: '',
    token: '',
    user: {
        firstname: '',
        name: '',
        email: '',
        zip: ''
    },
    step: 1,
    history: [],
    userSet: false,
    menuOpen: false,
    lastRoute: ''
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
