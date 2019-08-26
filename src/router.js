import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ServicesPage from './views/ServicesPage.vue';
import FacilitiesPage from './views/FacilitiesPage.vue';
import ContactUsPage from './views/ContactUsPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage,
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: FacilitiesPage,
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUsPage,
    },
  ],
});
