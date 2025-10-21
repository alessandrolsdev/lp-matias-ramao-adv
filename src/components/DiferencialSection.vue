<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const sectionRef = ref(null);
const isVisible = ref(false);

const { stop } = useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true;
      stop();
    }
  },
  { threshold: 0.2 } // Ajustado para 20%
);
</script>

<template>
  <section
    ref="sectionRef"
    :class="{ 'is-visible': isVisible }"
    class="w-full bg-black text-white py-16 md:py-24"
  >
    <div class="container mx-auto px-4 text-center">
      <div class="title-block">
        <h2 class="text-4xl font-bold text-gold">Mais que um Advogado, um Estrategista</h2>
        <p class="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
          Minha formação em Direito e meu MBA em Negócios me permitem ir além da defesa legal. Eu entendo sua visão de mercado e trabalho para criar soluções jurídicas que impulsionam seus objetivos.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-gray-900 p-8 rounded-lg border border-gray-700 border-2 border-transparent hover:scale-105 hover:border-gold card-item relative hover:z-10 transform-gpu hover:shadow-2xl">
          <h3 class="text-2xl font-bold">Visão 360°</h3>
          <p class="mt-4 text-gray-400">
            Análise que integra a conformidade com o Código de Defesa do Consumidor (CDC) às metas de negócio da sua empresa, protegendo sua reputação e rentabilidade.
          </p>
        </div>

        <div class="bg-gray-900 p-8 rounded-lg border border-gray-700 border-2 border-transparent hover:scale-105 hover:border-gold card-item relative hover:z-10 transform-gpu hover:shadow-2xl">
          <h3 class="text-2xl font-bold">Advocacia Estratégica</h3>
          <p class="mt-4 text-gray-400">
            Para consumidores, busco a reparação justa de forma ágil. Para empresas, atuo na consultoria preventiva, adequando suas práticas para evitar litígios e fortalecer a relação com o cliente.
          </p>
        </div>

        <div class="bg-gray-900 p-8 rounded-lg border border-gray-700 border-2 border-transparent hover:scale-105 hover:border-gold card-item relative hover:z-10 transform-gpu hover:shadow-2xl">
          <h3 class="text-2xl font-bold">Comunicação Clara</h3>
          <p class="mt-4 text-gray-400">
            Tradução do "juridiquês" para uma linguagem objetiva, permitindo que você compreenda cada passo e tome as melhores decisões para sua causa.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Bloco do Título (Animação de Entrada) */
.title-block {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), 
              transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.is-visible .title-block {
  opacity: 1;
  transform: translateY(0);
}

/* Cards (Animação de Entrada E Hover com Definições Explícitas) */
.card-item {
  opacity: 0;
  transform: translateY(50px) scale(1); /* Estado inicial: Fora e tamanho normal */
  transform-origin: center center;
  /* Transições: Opacidade e Transform (entrada 0.6s), Borda e Sombra (hover 0.2s) */
  transition: opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), 
              transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), 
              border-color 0.2s ease-in-out, 
              box-shadow 0.2s ease-in-out;
  will-change: transform, opacity;
}
.is-visible .card-item {
  opacity: 1;
  transform: translateY(0) scale(1); /* Estado final da entrada: Dentro e tamanho normal */
}

/* ESTADO HOVER EXPLÍCITO */
.is-visible .card-item:hover {
   /* Aplica o scale E MANTÉM o translateY(0) para não saltar */
  transform: translateY(0) scale(1.05); 
  /* Define a transição RÁPIDA APENAS para o transform no hover */
  transition: transform 0.2s ease-in-out, 
              border-color 0.2s ease-in-out, 
              box-shadow 0.2s ease-in-out;
}

/* Staggering (Atrasos para a entrada) */
.is-visible .card-item:nth-child(1) { transition-delay: 300ms; }
.is-visible .card-item:nth-child(2) { transition-delay: 450ms; }
.is-visible .card-item:nth-child(3) { transition-delay: 600ms; }
</style>