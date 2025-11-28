/** @type {import('tailwindcss').Config} */
/**
 * Configuração do Tailwind CSS.
 * Define os caminhos dos arquivos que contêm classes do Tailwind,
 * estende o tema padrão (adicionando a cor 'gold') e configura plugins.
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#B08D57', // Cor personalizada dourada
      }
    },
  },
  plugins: [],
}