/**
 * Configuração do Vue Router.
 * 
 * Define as rotas da aplicação e configura o modo de histórico.
 * 
 * Rotas disponíveis:
 * - / (LandingPage): Página inicial com todas as seções
 * - /obrigado (ThankYouPage): Página de confirmação após envio de formulário
 * 
 * Modo de histórico: createWebHistory (HTML5 History Mode)
 * - URLs limpas sem # (ex: /obrigado em vez de /#/obrigado)
 * - Requer configuração no servidor para servir index.html em todas as rotas
 * 
 * @module router
 */

import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ThankYouPage from '../views/ThankYouPage.vue';

/**
 * Definição das rotas da aplicação.
 * 
 * Cada rota possui:
 * - path: URL da rota
 * - name: Identificador único para navegação programática
 * - component: Componente Vue a ser renderizado
 */
const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {
      title: 'Matias Ramão Advocacia - Direito, Negócios e Princípios'
    }
  },
  {
    path: '/obrigado',
    name: 'ThankYou',
    component: ThankYouPage,
    meta: {
      title: 'Obrigado - Matias Ramão Advocacia'
    }
  }
];

/**
 * Instância do roteador configurada com histórico HTML5.
 * Utiliza createWebHistory para URLs limpas sem hash.
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;