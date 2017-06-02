import Vue from 'vue';
import Vuex from 'vuex';
import { errors } from '@/config/constants';
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
    userSet: false,
    menuOpen: false,
    showBack: false
};

const mutations = {
    PRODUCTS(state, products) {
       state.products = products;
    },
    ERROR(state, error) {
        state.error = error;
    },
    RESETERROR(state, error) {
        state.error = false;
    },
    BARCODE(state, barcode) {
        state.barcode = barcode;
    },
    STEP(state, step) {
        state.step = step;
    },
    USERKEY(state, val) {
        if(typeof val === 'object' && val.hasOwnProperty('type')) {
            state.user[val.type] = val.val;
        }
    },
    USER(state, val) {
        state.user = val;
    },
    TOKEN(state, token) {
        state.token = token;
    },
    MENUOPEN(state, isOpen) {
        state.menuOpen = isOpen;
    }
};

const actions = {
    setProducts: ({ commit }, products) => {
        commit('PRODUCTS', products);
    },
    setError: ({ commit }, code) => {
        const text = errors.hasOwnProperty['code_' + code] ? errors['code_' + code] : errors['code_4711'];
        commit('ERROR', text);
    },
    resetErrors: ({ commit }) => {
        commit('RESETERROR');
    },
    setUser: ({ commit }, val) => {
        localStorage.setItem('kgp_user', JSON.stringify(val));
        commit('USER', val);
    },
    setUserKey: ({ commit, state }, val) => {
        localStorage.setItem('kgp_user', JSON.stringify(state.user));
        commit('USERKEY', val);
    },
    removeUser: ({ commit }) => {
        commit('USER', {
            firstname: '',
            name: '',
            email: '',
            zip: '',
            password: ''
        });
    },
    setBarcode: ({ commit }, barcode) => {
        commit('BARCODE', barcode);
    },
    setStep: ({ commit }, step) => {
        commit('STEP', step);
    },
    setToken: ({ commit }, token) => {
        localStorage.setItem('kgp_token', token);
        commit('TOKEN', token);
    },
    menuOpen: ({ commit }, isOpen) => {
        commit('MENUOPEN', isOpen);
    },
};

const getters = {
    user: (state) => {
        return state.user;
    },
    isUserValid: (state) => {
        let isValid = false,
        usr = state.user;
        do {
            if(!usr.firstname || usr.firstname == '' ||  usr.firstname.length < 2) break;
            if(!usr.name || usr.name == '' ||  usr.name.length < 2)  break;
            if(!usr.email || usr.email == '' ||  usr.email.indexOf('@') < 0)  break;
            if(!usr.zip || usr.zip == '' ||  (usr.zip + '').length < 4)  break;
            isValid = true;
        } while(false);
        return isValid;
    },
    products: (state) => {
        return state.products;
    },
    error: (state) => {
        return state.error;
    },
    barcode: (state) => {
        return state.barcode;
    },
    step: (state) => {
        return state.step;
    },
    token: (state) => {
        return state.token;
    }
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
