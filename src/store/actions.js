import {
    errors
} from '@/config/constants';

export const actions = {
    setProducts: ({
        commit
    }, products) => {
        commit('PRODUCTS', products)
    },
    resetProducts: ({
        commit
    }) => {
        commit('RESETPRODUCTS')
    },
    setError: ({
        commit
    }, code) => {
        commit('ERROR', errors['code_' + code])
    },
    resetError: ({
        commit
    }) => {
        commit('RESETERROR')
    },
    setUser: ({
        commit
    }, val) => {
        localStorage.setItem('kgp_user', JSON.stringify(val))
        commit('USER', val)
    },
    setUserKey: ({
        commit,
        state
    }, val) => {
        localStorage.setItem('kgp_user', JSON.stringify(state.user))
        commit('USERKEY', val)
    },
    removeUser: ({
        commit
    }) => {
        commit('USER', {
            firstname: '',
            name: '',
            zip: '',
            password: ''
        })
        localStorage.removeItem('kgp_user')
    },
    setHistory: ({
        commit
    }, history) => {
        commit('SETHISTORY', history)
    },
    resetHistory: ({
        commit
    }) => {
        commit('RESETHISTORY')
        localStorage.setItem('kgp_history', JSON.stringify([]))
    },
    addHistory: ({
        commit
    }, entry) => {
        var history = localStorage.getItem('kgp_history')
        if (history) {
            history = JSON.parse(history)
        } else {
            history = []
        }
        entry.forEach(itm => history.push(itm))
        localStorage.setItem('kgp_history', JSON.stringify(history))
        commit('ADDHISTORY', history)
    },
    removeHistory: ({
        commit
    }, entry) => {
        var history = localStorage.getItem('kgp_history')
        if (history) {
            history = JSON.parse(history)
            history = history.filter(itm => {
                return itm.barcode !== entry.barcode
            })
            localStorage.setItem('kgp_history', JSON.stringify(history))
        }
        commit('REMOVEHISTORY', entry)
    },
    resetState: ({
        state
    }) => {
        state.products = []
        state.error = false
        state.barcode = ''
        state.step = 1
        state.userSet = false
        state.menuOpen = false
        state.draft = {
            text_marke: '',
            text_product: '',
            text_productdetails: '',
            text_amount: '',
            text_descr: ''
        };
    },
    setDraft: ({
        commit
    }, draft) => {
        commit('DRAFT', draft)
    },
    setBarcode: ({
        commit
    }, barcode) => {
        commit('BARCODE', barcode)
    },
    resetBarcode: ({
        commit
    }) => {
        commit('RESETBARCODE')
    },
    setStep: ({
        commit
    }, step) => {
        commit('STEP', step)
    },
    setToken: ({
        commit
    }, token) => {
        localStorage.setItem('kgp_token', token)
        commit('TOKEN', token)
    },
    menuOpen: ({
        commit
    }, isOpen) => {
        commit('MENUOPEN', isOpen)
    },
    nagscreen: ({
        commit
    }, isOpen) => {
        commit('NAGSCREEN', isOpen)
    },
    setSeenTour: ({
        commit
    }, seenTour) => {
        commit('SEENTOUR', seenTour)
    },
    setLastRoute: ({
        commit
    }, route) => {
        commit('LASTROUTE', route)
    },
    setLightboxContent: ({
        commit
    }, content) => {
        commit('SETLIGHTBOXCONTENT', content)
    },
    resetLightboxContent: ({
        commit
    }) => {
        commit('RESETLIGHTBOXCONTENT')
    },
    setLoading: ({
        commit
    }, isLoading) => {
        commit('LOADING', isLoading);
    },
}
