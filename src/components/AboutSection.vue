<script setup lang="ts">
/**
 * Componente da Seção Sobre (About).
 * 
 * Esta seção apresenta a jornada pessoal e profissional do advogado:
 * - Foto de perfil profissional
 * - História de superação e valores
 * - Formação acadêmica e experiência profissional
 * - Animações de entrada ao scrollar (fade-in lateral)
 * 
 * @component
 */
import { onMounted } from 'vue';
import matiasProfileImage from '../assets/images/matias-perfil.jpg';
import { useIntersectionObserver } from '../composables/useIntersectionObserver';

/**
 * Ao montar o componente, ativa o observador de interseção
 * para animar os elementos quando entrarem na viewport.
 */
onMounted(() => {
  useIntersectionObserver('#sobre');
});
</script>

<template>
  <!-- Seção Sobre: Apresentação da trajetória profissional -->
  <section 
    id="sobre"
    class="relative w-full bg-black text-white py-16 md:py-24"
  >
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div class="flex justify-center image-col md:-mt-44">
          <img
            :src="matiasProfileImage"
            alt="Foto de perfil do advogado Matias Ramão"
            class="w-80 h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <div class="mt-8 md:mt-0 relative z-10">
          
          <h2 class="text-4xl font-bold md:-mt-[7.75rem] text-shadow-custom">
            Minha Jornada
          </h2>

          <p class="mt-6 text-lg text-gray-300 leading-relaxed">
            Minha história começa na periferia, em uma família sem muitos recursos, mas com grandes sonhos. Há 10 anos, um encontro com Jesus Cristo transformou radicalmente minha perspectiva e me deu um propósito claro: lutar por justiça e servir com integridade.
          </p>
          <p class="mt-4 text-lg text-gray-300 leading-relaxed">
            Essa jornada me levou da graduação em Direito na UFMS e um MBA em Negócios à experiência como analista no SEBRAE. Hoje, como advogado, não ofereço apenas conhecimento técnico. Ofereço a resiliência de quem superou obstáculos e a visão de quem entende os desafios do empreendedor, sempre pautado por princípios que não se negociam.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/**
 * Estilos específicos da seção Sobre.
 * 
 * As animações de entrada (image-col) estão centralizadas em src/styles/animations.css.
 * Este arquivo contém apenas estilos únicos desta seção.
 */

/**
 * Efeito de texto dourado com contorno preto ("Padrão Ouro").
 * Cria profundidade visual no título da seção.
 */
.text-shadow-custom {
  color: #B08D57;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
  paint-order: stroke fill;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);
}
</style>