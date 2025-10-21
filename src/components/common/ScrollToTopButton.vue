<script setup lang="ts">
import { computed } from 'vue';
// 1. Importamos 'useWindowScroll' do VueUse para saber a posição do scroll
import { useWindowScroll } from '@vueuse/core';
// 2. Importamos o componente de ícone
import VueFeather from 'vue-feather';

// 3. Pegamos a posição Y (vertical) do scroll. 'y' é uma ref reativa.
const { y } = useWindowScroll();

// 4. Lógica de Visibilidade:
//    O botão só será visível se o scroll vertical (y.value) for maior que 300 pixels.
const isVisible = computed(() => y.value > 300);

// 5. Função para rolar suavemente de volta ao topo
function scrollToTop() {
  window.scrollTo({
    top: 0, // Posição 0 (topo)
    behavior: 'smooth' // Animação suave
  });
}
</script>

<template>
  <transition name="fade">
    <button
      v-show="isVisible"
      @click="scrollToTop"
      aria-label="Voltar ao topo"
      class="fixed bottom-6 right-6 z-[70] bg-[#B08D57] text-black p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-opacity-80"
    >
      <VueFeather type="arrow-up" size="24"></VueFeather>
    </button>
  </transition>
</template>

<style scoped>
/* Definimos as classes para a nossa transição "fade".
  O Vue aplica isso automaticamente com base no v-show.
*/

/* Estado inicial (antes de entrar) */
.fade-enter-from,
/* Estado final (quando sai) */
.fade-leave-to {
  opacity: 0;
}

/* Como a transição deve se comportar (ativa durante entrada/saída) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

/* Garantia extra para o hover do SVG (igual ao footer).
  Certifica que o ícone interno pegue a cor do botão.
*/
button svg {
  stroke: currentColor;
}
</style>