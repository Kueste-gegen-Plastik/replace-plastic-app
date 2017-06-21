export const getters = {
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
    history: (state) => {
        return state.history;
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
    },
    lastRoute: (state) => {
        return state.lastRoute;
    },
    nagscreen: (state) => {
        return state.nagscreen;
    },
};
