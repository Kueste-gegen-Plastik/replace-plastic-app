import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import KgpForm from '@/components/views/KgpForm/KgpForm';
import KgpScan from '@/components/views/KgpScan/KgpScan';
import KgpProduct from '@/components/views/KgpProduct/KgpProduct';
import KgpSubmit from '@/components/views/KgpSubmit/KgpSubmit';
import KgpImprint from '@/components/views/Content/KgpImprint';
import KgpAbout from '@/components/views/Content/KgpAbout';
import KgpPrivacy from '@/components/views/Content/KgpPrivacy';

Vue.use(Router);


const router = new Router({
  routes: [
    {
      path: '/form',
      name: 'Form',
      component: KgpForm,
    },
    {
      path: '/scan',
      name: 'Scan',
      component: KgpScan,
    },
    {
      path: '/product',
      name: 'Product',
      component: KgpProduct,
    },
    {
      path: '/send',
      name: 'Send',
      component: KgpSubmit,
    },
    {
      path: '/meta/impressum',
      name: 'Impressum',
      component: KgpImprint,
    },
    {
      path: '/meta/privacy',
      name: 'Datenschutz',
      component: KgpPrivacy,
    },
    {
      path: '/meta/about',
      name: 'Ueber',
      component: KgpAbout,
    },
    {
        path: '*',
        redirect: localStorage.getItem('kgp_user') ? '/scan' : '/form'
    }
  ],
});
router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0)
    switch(to.name) {
        case 'Product':
            if(!store.getters.barcode) {
                next({ name : localStorage.getItem('kgp_user') ? '/scan' : '/form' });
                break;
            };
            next();
            break;
        case 'Send':
            if(!store.getters.isUserValid || !store.getters.barcode || !store.getters.products.length) {
                next({ path : localStorage.getItem('kgp_user') ? '/scan' : '/form' });
                break;
            };
            next();
            break;
        default:
            next();
            break;
    }
});

export default router;
