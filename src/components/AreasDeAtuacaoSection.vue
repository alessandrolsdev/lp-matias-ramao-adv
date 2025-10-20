<script setup lang="ts">
// IMPORTAMOS A MESMA LÓGICA DE ANIMAÇÃO
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
  // Dispara um pouco mais cedo (5% visível) para o escalonamento começar
  { threshold: 0.05 }
);
</script>

<template>
  <section ref="sectionRef" :class="{ 'is-visible': isVisible }" class="w-full bg-gray-900 text-white py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold text-[#B08D57]">Áreas de Atuação</h2>
        <p class="mt-4 text-lg text-gray-300">
          Ofereço assessoria jurídica especializada...
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div class="bg-black p-6 rounded-lg border-2 border-[#B08D57] shadow-lg card-item transition-all duration-300 ease-in-out border-2 border-transparent hover:scale-105 hover:border-[#B08D57] hover:shadow-2xl">
          <h3 class="text-xl font-bold text-[#B08D57] text-[#B08D57]">Direito Urbanístico</h3>
          <p class="mt-3 text-gray-400">
            Assessoria completa em regularização de imóveis, loteamentos, zoneamento e legislação urbana para viabilizar
            e proteger seus empreendimentos.
          </p>
        </div>

        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item hover:scale-105 hover:border-[#B08D57] hover:shadow-2xl">
          <h3 class="text-xl font-bold text-[#B08D57]">Gestão & Empreendedorismo</h3>
          <p class="mt-3 text-gray-400">
            Estruturação de contratos, planejamento societário e consultoria estratégica para startups e empresas
            consolidadas.
          </p>
        </div>

        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item hover:scale-105 hover:border-[#B08D57] hover:shadow-2xl">
          <h3 class="text-xl font-bold text-[#B08D57]">Direito Trabalhista</h3>
          <p class="mt-3 text-gray-400">
            Defesa em reclamações trabalhistas e consultoria preventiva para garantir que sua empresa esteja em
            conformidade com a legislação.
          </p>
        </div>

        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item hover:scale-105 hover:border-[#B08D57] hover:shadow-2xl">
          <h3 class="text-xl font-bold text-[#B08D57]">Direito Cível</h3>
          <p class="mt-3 text-gray-400">
            Atuação em casos de obrigações, contratos, responsabilidade civil e questões de família e sucessões.
          </p>
        </div>

        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item hover:scale-105 hover:border-[#B08D57] hover:shadow-2xl">
          <h3 class="text-xl font-bold text-[#B08D57]">Direito Ambiental</h3>
          <p class="mt-3 text-gray-400">
            Consultoria para licenciamento ambiental e defesa em processos administrativos e judiciais relacionados ao
            meio ambiente.
          </p>
        </div>

        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item hover:scale-105 hover:border-[#B08D57] hover:shadow-2xl">
          <h3 class="text-xl font-bold text-[#B08D57]">Consultoria Estratégica</h3>
          <p class="mt-3 text-gray-400">
            Análise de riscos e oportunidades, unindo a visão jurídica e de negócios para tomadas de decisão mais
            eficientes.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* A MÁGICA DO ESCALONAMENTO (STAGGER) */

/* 1. Estado INICIAL de TODOS os cards (invisíveis e para baixo) */
.card-item {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* 2. Estado FINAL (quando 'is-visible' é adicionado na <section>) */
.is-visible .card-item {
  opacity: 1;
  transform: translateY(0);
}

/* 3. O SEGREDO: Usamos o seletor :nth-child() para adicionar
     um ATRASO (transition-delay) diferente para cada card.
*/
.is-visible .card-item:nth-child(1) {
  transition-delay: 100ms;
}

.is-visible .card-item:nth-child(2) {
  transition-delay: 200ms;
}

.is-visible .card-item:nth-child(3) {
  transition-delay: 300ms;
}

.is-visible .card-item:nth-child(4) {
  transition-delay: 400ms;
}

.is-visible .card-item:nth-child(5) {
  transition-delay: 500ms;
}

.is-visible .card-item:nth-child(6) {
  transition-delay: 600ms;
}
</style>