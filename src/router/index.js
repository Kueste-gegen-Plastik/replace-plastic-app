import Vue from 'vue';
import Router from 'vue-router';
import KgpMain from '@/components/KgpMain';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: KgpMain,
    },
  ],
});
