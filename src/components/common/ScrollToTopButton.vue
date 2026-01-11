<script setup lang="ts">
/**
 * Componente do Botão "Voltar ao Topo".
 * 
 * Este botão flutuante aparece quando o usuário rola a página para baixo
 * e permite retornar ao topo com um scroll suave.
 * 
 * Funcionalidades:
 * - Visibilidade controlada por scroll (aparece após 300px)
 * - Scroll suave ao clicar
 * - Transição de opacidade ao aparecer/desaparecer
 * - Fixado no canto inferior direito
 * 
 * @component
 */
import { ref, onMounted, onUnmounted } from 'vue';
import VueFeather from 'vue-feather';

/**
 * Estado de visibilidade do botão.
 * True quando o usuário rolou mais de 300px para baixo.
 */
const isVisible = ref(false);

/**
 * Manipulador do evento de scroll.
 * Atualiza a visibilidade do botão baseado na posição do scroll.
 */
const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

/**
 * Função que realiza scroll suave até o topo da página.
 * Utiliza a API nativa scrollTo com comportamento smooth.
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Adiciona listener de scroll quando o componente é montado
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Remove listener de scroll quando o componente é desmontado
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Botão flutuante com transição fade controlada por v-show -->
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
/**
 * Estados de transição fade para o botão.
 * Define opacidade 0 quando o botão está entrando/saindo.
 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/**
 * Configuração da transição para entrada e saída do botão.
 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

/**
 * Garante que o ícone SVG interno herde a cor do botão.
 */
button svg {
  stroke: currentColor;
}
</style>