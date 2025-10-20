<script setup lang="ts">
// 1. Importamos o componente principal do *novo* pacote
import VueFeather from 'vue-feather';

// 2. A variável do ano atual (continua a mesma)
const anoAtual = new Date().getFullYear();
</script>

<template>
  <footer class="w-full bg-black text-white py-8">
    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

      <div class="text-center md:text-left text-sm text-gray-400">
        <p>&copy; {{ anoAtual }} Matias Ramão Advocacia.</p>
        <p>Todos os direitos reservados.</p>
      </div>

      <div class="flex gap-6">
        <a
            href="https://www.instagram.com/matiasramao" target="_blank"
            rel="noopener noreferrer"
            aria-label="Link para o Instagram do Dr. Matias Ramão"
            class="text-gray-400 transition-colors duration-300 hover:text-gold">
            <vue-feather type="instagram" size="24"></vue-feather>
        </a>

        <a
          href="https://www.linkedin.com/in/matias-ramão-083883144" target="_blank"
          rel="noopener noreferrer"
          aria-label="Link para o LinkedIn do Dr. Matias Ramão"
          class="text-gray-400 transition-colors duration-300 hover:text-gold">
          <vue-feather type="linkedin" size="24"></vue-feather>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* O 'vue-feather-icons' é renderizado como SVG.
  Para garantir que o 'hover:text-gold' funcione perfeitamente,
  podemos forçar a cor do 'stroke' (o traço do ícone) para
  ser a cor do texto atual.
*/
a:hover svg {
  stroke: currentColor;
}
</style>