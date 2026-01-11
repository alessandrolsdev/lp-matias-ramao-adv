/**
 * Configuração do Vite - Build Tool e Dev Server.
 * 
 * Vite é uma ferramenta de build moderna que oferece:
 * - Hot Module Replacement (HMR) extremamente rápido
 * - Builds de produção otimizadas com Rollup
 * - Suporte nativo a TypeScript e Vue 3
 * 
 * Plugins configurados:
 * - @vitejs/plugin-vue: Suporte completo para SFC (Single File Components)
 * 
 * @see https://vitejs.dev/config/
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
