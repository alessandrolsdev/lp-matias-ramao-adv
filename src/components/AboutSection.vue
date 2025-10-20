<script setup lang="ts">
// Importa a imagem do Matias para a seção 'Sobre'.
import matiasProfileImage from '../assets/images/matias-perfil.jpg'; 
</script>

<template>
  <section class="w-full bg-gray-900 text-white py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="flex justify-center">
          <img
            :src="matiasProfileImage"
            alt="Foto de perfil do advogado Matias Ramão"
            class="w-80 h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <div>
          <h2 class="text-4xl font-bold text-[#B08D57]">Minha Jornada</h2>
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

</style>