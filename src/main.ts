// src/main.ts
import { createApp } from 'vue'
import App from './App.vue' 
import './style.css' 
import VMask from '@ssibrahimbas/v-mask'

// 1. IMPORTAÇÃO NOVA
import router from './router'; // Importa nosso arquivo de rotas

const app = createApp(App)

app.use(VMask)

// 2. USAR O ROTEADOR
app.use(router); // Diz ao Vue para usar o vue-router

app.mount('#app')