export const mutations = {
    PRODUCTS(state, products) {
        state.products = products
    },
    RESETPRODUCTS(state) {
        state.products = []
    },
    ERROR(state, error) {
        state.error = error
    },
    RESETERROR(state) {
        state.error = false
    },
    BARCODE(state, barcode) {
        state.barcode = barcode
    },
    RESETBARCODE(state) {
        state.barcode = ''
    },
    SEENTOUR(state, seenTour) {
        state.seenTour = seenTour;
    },
    STEP(state, step) {
        state.step = step
    },
    
    USERKEY(state, val) {
        if (typeof val === 'object' && val.hasOwnProperty('type')) {
            state.user[val.type] = val.val
        }
    },
    RESETUSERSET(state) {
        state.userSet = false;
    },
    USER(state, val) {
        state.user = val
    },
    TOKEN(state, token) {
        state.token = token
    },
    MENUOPEN(state, isOpen) {
        state.menuOpen = isOpen
    },
    LASTROUTE(state, route) {
        state.lastRoute = route
    },
    SETHISTORY(state, history) {
        state.history = history
    },
    ADDHISTORY(state, entries) {
        state.history = entries
    },
    RESETHISTORY(state) {
        state.history = []
    },
    NAGSCREEN(state, isOpen) {
        state.nagscreen = isOpen
    },
    REMOVEHISTORY(state, entry) {
        state.history = state.history.filter(
            itm => itm.barcode !== entry.barcode
        )
    },
    SETLIGHTBOXCONTENT(state, content) {
        state.lightboxContent = content;
    },
    RESETLIGHTBOXCONTENT(state) {
        state.lightboxContent = '';
    },
    TOGGLE_DRAFT_FORM(state) {
        state.showDraftForm = !state.showDraftForm;
    },
    DRAFT(state, draft) {
        state.draft = draft;
    },
    RESETDRAFT(state) {
        state.draft = {
            text_marke: '',
            text_product: '',
            text_productdetails: '',
            text_amount: '',
            text_descr: ''
        };
    },
    LOADING(state, isLoading) {
        state.isLoading = isLoading;
    },
};
