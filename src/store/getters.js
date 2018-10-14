export const getters = {
    user: state => state.user,
    isUserValid: state => {
        let isValid = false,
            usr = state.user
        do {
            if (!usr.firstname || usr.firstname == '' || usr.firstname.length < 2) break
            if (!usr.name || usr.name == '' || usr.name.length < 2) break
            if (!usr.zip || usr.zip == '' || (usr.zip + '').length < 4) break
            isValid = true
        } while (false)
        return isValid
    },
    products: state => state.products,
    history: state => state.history,
    error: state => state.error,
    barcode: state => state.barcode,
    step: state => state.step,
    token: state => state.token,
    lastRoute: state => state.lastRoute,
    nagscreen: state => state.nagscreen,
    seenTour: state => state.seenTour
};
