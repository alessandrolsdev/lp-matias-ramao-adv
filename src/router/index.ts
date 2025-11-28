// src/router/index.ts (CORRIGIDO)
import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '../views/LandingPage.vue';
import ThankYouPage from '../views/ThankYouPage.vue';

/**
 * Definição das rotas da aplicação.
 */
const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage // Página inicial
  },
  {
    path: '/obrigado',
    name: 'ThankYou',
    component: ThankYouPage // Página de agradecimento
  }
];

/**
 * Criação e configuração do roteador.
 * Utiliza o modo de histórico da web (HTML5) para URLs limpas.
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;