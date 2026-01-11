/**
 * Configuração do Tailwind CSS - Framework Utility-First.
 * 
 * Este arquivo define:
 * - Paths dos arquivos para purge de CSS não utilizado
 * - Customizações do tema padrão (cores, fonte, etc)
 * - Plugins adicionais do Tailwind
 * 
 * Content Array:
 * O Tailwind escaneia estes arquivos em produção para identificar
 * quais classes CSS estão sendo usadas, removendo o resto para
 * otimizar o tamanho final do bundle.
 * 
 * Theme Extend:
 * Adiciona customizações sem sobrescrever o tema padrão.
 * - gold (#B08D57): Cor dourada personalizada usada para destacar
 *   elementos importantes e manter identidade visual do escritório.
 * 
 * @type {import('tailwindcss').Config}
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#B08D57',
      }
    },
  },
  plugins: [],
}