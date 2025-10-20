<script setup lang="ts">
// Importa a imagem do Matias que será usada no fundo ou ao lado do texto.
import matiasHeroImage from '../assets/images/matias-hero.jpg'; 
</script>

<template>
  <section class="w-full bg-black text-white min-h-screen relative overflow-hidden">
    <div class="absolute inset-0 bg-black opacity-70 z-0"></div>

    <div class="container mx-auto px-4 h-full relative z-10 flex items-center py-16 md:py-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div class="text-center md:text-left">
          <h1 class="text-5xl md:text-6xl font-bold leading-tight text-[#B08D57]">
            Direito, Negócios e Princípios.<br>
            A assessoria completa para sua visão.
          </h1>
          <p class="mt-6 text-lg md:text-xl text-gray-300">
            Unindo a expertise em Direito do Consumidor a uma visão de negócios de MBA, ofereço a estratégia jurídica ideal para a sua causa, seja você consumidor ou empresário.          
          </p>
          <div class="mt-8">
            <a
              href="https://wa.me/5567981376840" target="_blank" rel="noopener noreferrer"    
              class="inline-block bg-[#B08D57] text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out hover:scale-105"
            >
              Solicitar Análise Estratégica
            </a>
          </div>
        </div>

        <div class="hidden md:flex justify-center items-center h-full">
          <img
            :src="matiasHeroImage"
            alt="Matias Ramão palestrando para jovens"
            class="max-h-[70vh] w-auto object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Não precisamos de estilos adicionais, o Tailwind cuida de tudo. */
</style>