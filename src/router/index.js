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
        redirect: '/Scan'
    }
  ],
});

router.beforeEach(function(to, from, next) {
    switch(to.name) {
        case 'Product':
            if(!store.getters.barcode) {
                next({ name : 'Scan' });
                break;
            };
            next();
            break;
        case 'Submit':
            if(!store.getters.isUserValid || !store.getters.barcode || !store.getters.products.length) {
                next({ name : 'Form' });
                break;
            };
            next();
            break;
        default:
            next();
    }
})

export default router;
