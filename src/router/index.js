import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import KgpForm from '@/components/views/KgpForm';
import KgpScan from '@/components/views/KgpScan';
import KgpProduct from '@/components/views/KgpProduct';
import KgpSubmit from '@/components/views/KgpSubmit';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
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
      path: '/submit',
      name: 'Submit',
      component: KgpSubmit,
    },
  ],
});

router.beforeEach(function(to, from, next) {
    switch(to.name) {
        case 'Scan':
            if(!store.getters.isUserValid) {
                next({ name : 'Main' });
                break;
            };
            next();
        break;
        case 'Product':
            if(!store.getters.isUserValid || !store.getters.barcode) {
                next({ name : 'Scan' });
                break;
            };
            next();
            break;
        case 'Submit':
            if(!store.getters.isUserValid || !store.getters.barcode || !store.getters.products.length || !store.getters.products.isLoggedIn) {
                next({ name : 'Product' });
                break;
            };
            next();
            break;
        default:
            next();
    }
})

export default router;
