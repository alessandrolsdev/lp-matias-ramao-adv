// src/router/index.ts (CORRIGIDO)
import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '../views/LandingPage.vue'; 
import ThankYouPage from '../views/ThankYouPage.vue';

const routes = [
  {
    path: '/', 
    name: 'LandingPage',
    component: LandingPage 
  },
  {
    path: '/obrigado', 
    name: 'ThankYou',
    component: ThankYouPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;