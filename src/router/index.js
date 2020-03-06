import Vue from 'vue'
import VueRouter from 'vue-router'
import Cat from '../components/Cat.vue'
import Donkey from '../components/Donkey.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Cat',
    component: Cat
  },
  {
    path: '/donkey',
    name: 'Donkey',
    component: Donkey,
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
