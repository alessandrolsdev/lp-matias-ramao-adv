<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

// 1. 'target' é o <div> que vamos observar.
const target = ref(null);

// 2. 'isVisible' controla a *classe* que vamos adicionar. Começa como 'false'.
const isVisible = ref(false);

// 3. O observador do VueUse.
const { stop } = useIntersectionObserver(
  target,
  // 4. Callback: quando o 'target' interceptar...
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      // 5. ...marcamos como visível e paramos de observar.
      isVisible.value = true;
      stop();
    }
  },
  // 6. Dispara quando 10% do elemento estiver na tela.
  { threshold: 0.1 }
);
</script>

<template>
  <div
    ref="target"
    class="fade-in-section"
    :class="{ 'is-visible': isVisible }"
  >
    <slot />
  </div>
</template>

<style scoped>
/*
  Esta é a nova lógica de CSS.
*/

/* 1. O estado INICIAL (invisível e movido para baixo) */
.fade-in-section {
  opacity: 0;
  transform: translateY(50px);
  /* A transição suave que queremos */
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* 2. O estado FINAL (quando a classe 'is-visible' é adicionada) */
.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>