import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
/**
 * Configuração do Vite.
 * Define os plugins utilizados, como o plugin do Vue.
 */
export default defineConfig({
  plugins: [vue()],
})
