<script setup lang="ts">
/**
 * Componente do Rodapé (Footer).
 * 
 * Este componente exibe o rodapé da página com:
 * - Copyright com ano atual calculado dinamicamente
 * - Links para redes sociais (Instagram e LinkedIn)
 * - Design responsivo e acessível
 * 
 * O ano é calculado automaticamente para não precisar atualização manual.
 * 
 * @component
 */
import { computed } from 'vue';
import VueFeather from 'vue-feather';

/**
 * Computed: Retorna o ano atual dinamicamente
 * @returns {number} Ano corrente (ex: 2026)
 */
const anoAtual = computed(() => new Date().getFullYear());
</script>

<template>
  <!-- Rodapé: Copyright e links sociais -->
  <footer class="w-full bg-black text-white py-8 border-t border-gray-800">
    <div class="container mx-auto px-4 flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
      <div class="text-center md:text-left text-gray-400">
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
/**
 * Garante que os ícones SVG (vue-feather) herdem a cor do link parent no hover,
 * aplicando a cor ao stroke (traço) do ícone.
 */
a:hover svg {
  stroke: currentColor;
}
</style>