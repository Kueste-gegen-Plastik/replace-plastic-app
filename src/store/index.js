import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    products: [],
    errors: [],
    barcode: '',
    token: '',
    user: {
        firstname: '',
        name: '',
        email: '',
        zip: '',
        password: ''
    },
    step: 1
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    PRODUCTS(state, products) {
       console.log("PRODUCTS", products);
       state.products = products;
    },
    ERRORS(state, errors) {
        state.errors = errors;
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
    }
};

const actions = {
    setProducts: ({ commit }, products) => {
        commit('PRODUCTS', products);
    },
    setErrors: ({ commit }, errors) => {
        commit('ERRORS', errors);
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
    }
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
    errors: (state) => {
        return state.errors;
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
