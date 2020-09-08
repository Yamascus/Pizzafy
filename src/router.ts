import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/Main.vue';
import OrderForm from '@/views/OrderForm.vue';

Vue.use(Router);

export const routeNames = {
  Index: 'main',
  OrderForm: 'order-form',
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: routeNames.Index,
      component: Main,
    },
    {
      path: '/order-form/:id',
      name: routeNames.OrderForm,
      component: OrderForm,
    },
  ],
});
