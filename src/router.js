import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import(/* webpackChunkName: "home" */ './views/ServicesPage.vue'),
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: () => import(/* webpackChunkName: "home" */ './views/FacilitiesPage.vue'),
    },
  ],
});
