import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import KgpForm from '@/components/views/KgpForm/KgpForm'
import KgpScan from '@/components/views/KgpScan/KgpScan'
import KgpProduct from '@/components/views/KgpProduct/KgpProduct'
import KgpSubmit from '@/components/views/KgpSubmit/KgpSubmit'
import KgpHistory from '@/components/views/KgpHistory/KgpHistory'
import KgpImprint from '@/components/views/Content/KgpImprint'
import KgpAbout from '@/components/views/Content/KgpAbout'
import KgpStats from '@/components/views/KgpStats/KgpStats'
import KgpThankYou from '@/components/views/Content/KgpThankYou'
import KgpPrivacy from '@/components/views/Content/KgpPrivacy'
import KgpEmptyProduct from '@/components/views/KgpEmptyProduct/KgpEmptyProduct'

Vue.use(Router)

export const isUserValid = usr => {
    let isValid = false
    do {
        if (!usr.firstname || usr.firstname == '' || usr.firstname.length < 2) break
        if (!usr.name || usr.name == '' || usr.name.length < 2) break
        if (!usr.zip || usr.zip == '' || (usr.zip + '').length < 4) break
        isValid = true
    } while (false)
    return isValid
}

const router = new Router({
    routes: [{
            path: '/form',
            name: 'Form',
            component: KgpForm
        },
        {
            path: '/scan',
            name: 'Scan',
            component: KgpScan
        },
        {
            path: '/product',
            name: 'Product',
            component: KgpProduct
        },
        {
            path: '/empty-product',
            name: 'EmptyProduct',
            component: KgpEmptyProduct
        },
        {
            path: '/send',
            name: 'Send',
            component: KgpSubmit
        },
        {
            path: '/stats',
            name: 'Statistiken',
            component: KgpStats
        },
        {
            path: '/meta/impressum',
            name: 'Impressum',
            component: KgpImprint
        },
        {
            path: '/meta/privacy',
            name: 'Datenschutz',
            component: KgpPrivacy
        },
        {
            path: '/meta/about',
            name: 'Ueber',
            component: KgpAbout
        },
        {
            path: '/history',
            name: 'History',
            component: KgpHistory
        },
        {
            path: '/thankyou',
            name: 'Thankyou',
            component: KgpThankYou
        },
        {
            path: '*',
            redirect: '/scan'
        }
    ]
})

router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0)
    switch (to.name) {
        case 'Product':
            if (!store.getters.barcode) {
                next({
                    name: localStorage.getItem('kgp_user') && store.getters.isUserValid ? '/scan' : '/form'
                })
                break
            }
            next()
            break
        case 'Send':
            if (!store.getters.isUserValid || !store.getters.barcode) {
                next({
                    path: localStorage.getItem('kgp_user') && store.getters.isUserValid ? '/scan' : '/form'
                })
                break
            }
            next()
            break
        default:
            next()
            break
    }
});

export default router
