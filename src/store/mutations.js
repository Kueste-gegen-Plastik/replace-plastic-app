export const mutations = {
    PRODUCTS(state, products) {
       state.products = products;
    },
    RESETPRODUCTS(state) {
       state.products = [];
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
    RESETBARCODE(state) {
        state.barcode = '';
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
    },
    LASTROUTE(state, route) {
        state.lastRoute = route;
    },
    SETHISTORY(state, history) {
        state.history = history;
    },
    ADDHISTORY(state, entries) {
        state.history = entries;
    },
    RESETHISTORY(state, route) {
        state.history = [];
    },
    NAGSCREEN(state, isOpen) {
        state.nagscreen = isOpen;
    },
    REMOVEHISTORY(state, entry) {
        state.history = state.history.filter((itm) => {
            return itm.barcode !== entry.barcode;
        });
    }
};
