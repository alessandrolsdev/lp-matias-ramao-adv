<script setup lang="ts">
/**
 * Componente FadeIn - Efeito de Animação por Scroll.
 * 
 * Este componente wrapper adiciona animação de entrada (fade-in) aos elementos
 * quando eles entram na viewport durante o scroll da página.
 * 
 * Uso:
 * ```vue
 * <FadeIn>
 *   <div>Conteúdo que será animado</div>
 * </FadeIn>
 * ```
 * 
 * A animação é controlada por CSS e a classe 'is-visible' é adicionada
 * via JavaScript quando o elemento entra na viewport.
 * 
 * @component
 */
</script>

<template>
  <!-- Container com animação fade-in controlada por scroll -->
  <div class="fade-in-section">
    <slot />
  </div>
</template>

<style scoped>
/**
 * Estado inicial: elemento invisível e deslocado para baixo.
 * A transição suave é aplicada a todas as propriedades afetadas.
 */
.fade-in-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/**
 * Estado final: quando a classe 'is-visible' é adicionada via JavaScript,
 * o elemento se torna visível e retorna à posição original.
 */
.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>