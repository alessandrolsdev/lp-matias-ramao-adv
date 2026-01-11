/**
 * Ponto de Entrada da Aplicação Vue.
 * 
 * Este arquivo inicializa a aplicação Vue 3 e configura todos os plugins necessários:
 * - Vue Router: Gerenciamento de rotas SPA
 * - VMask: Diretiva para máscaras de input (telefone, CPF, etc)
 * 
 * Ordem de inicialização:
 * 1. Importação de dependências (Vue, App, plugins, estilos)
 * 2. Criação da instância da aplicação
 * 3. Registro de plugins (VMask, Router)
 * 4. Montagem no DOM element #app
 * 
 * @module main
 */

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import VMask from '@ssibrahimbas/v-mask'
import router from './router';

/**
 * Cria a instância da aplicação Vue com o componente raiz App.
 */
const app = createApp(App)

/**
 * Registra o plugin de máscara de input para formatação de campos.
 * Permite usar v-mask em qualquer input da aplicação.
 */
app.use(VMask)

/**
 * Registra o Vue Router para gerenciamento de rotas.
 * Habilita navegação SPA entre diferentes páginas.
 */
app.use(router);

/**
 * Monta a aplicação no elemento DOM com id 'app'.
 * A partir deste ponto, a aplicação está ativa e interativa.
 */
app.mount('#app')