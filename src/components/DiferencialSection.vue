<script setup lang="ts">
/**
 * Componente da Seção Diferenciais.
 * 
 * Esta seção destaca os principais diferenciais do serviço:
 * - Visão 360° (Direito + Negócios)
 * - Advocacia Estratégica (consultoria preventiva e reparação justa)
 * - Comunicação Clara (tradução do "juridiquês")
 * 
 * Utiliza cards com animações staggered (escalonadas) ao scrollar para 
 * criar um efeito visual profissional e moderno.
 * 
 * @component
 */
import { onMounted } from 'vue';
import { useIntersectionObserver } from '../composables/useIntersectionObserver';

onMounted(() => {
  useIntersectionObserver('#diferenciais');
});
</script>

<template>
  <!-- Seção Diferenciais: Destacando a proposta única de valor -->
  <section 
    id="diferenciais"
    class="relative w-full bg-black text-white py-16 md:py-24"
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
/**
 * Estilos da seção Diferenciais.
 * 
 * Todas as animações (title-block, card-item e suas transições)  
 * estão centralizadas em src/styles/animations.css.
 * 
 * Os atrasos staggered (escalonados) para cada card são aplicados
 * através das pseudo-classes nth-child definidas abaixo.
 */

/**
 * Atrasos staggered para entrada dos cards.
 * Cada card aparece com 150ms de diferença, criando efeito cascata.
 */
.is-visible .card-item:nth-child(1) {
  transition-delay: 300ms;
}
.is-visible .card-item:nth-child(2) {
  transition-delay: 450ms;
}
.is-visible .card-item:nth-child(3) {
  transition-delay: 600ms;
}
</style>