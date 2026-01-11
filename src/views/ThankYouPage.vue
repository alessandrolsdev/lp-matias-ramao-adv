<script setup lang="ts">
/**
 * View da Página de Agradecimento.
 * 
 * Esta página é exibida após o envio bem-sucedido do formulário de contato.
 * Rota: /obrigado
 * 
 * Funcionalidades:
 * - Mensagem de confirmação com ícone de sucesso
 * - Informação sobre prazo de resposta (24 horas úteis)
 * - Botão para retornar à página inicial
 * - Links para redes sociais (Instagram e LinkedIn)
 * 
 * A página é configurada como action do formulário Netlify Forms
 * no ContactSection.vue.
 * 
 * @component
 */
import VueFeather from 'vue-feather';
</script>

<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
    <!-- Ícone de sucesso -->
    <VueFeather type="check-circle" size="64" class="text-green-500 mb-6"></VueFeather>

    <h1 class="text-4xl font-bold text-gold mb-4">Mensagem Enviada com Sucesso!</h1>
    <p class="text-lg text-gray-300 mb-8 max-w-xl">
      Obrigado por entrar em contato. Analisarei seu caso com atenção e retornarei o mais breve possível, geralmente em até 24 horas úteis.
    </p>

    <!-- Botão para voltar à home -->
    <div class="mb-8"> <router-link
        to="/"
        class="inline-block bg-[#B08D57] text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105"
      >
        Voltar para a Página Inicial
      </router-link>
    </div>

    <!-- Links sociais -->
    <div class="flex gap-6">
      <a
        href="https://www.instagram.com/matiasramao" target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para o Instagram do Dr. Matias Ramão"
        class="text-gray-400 transition-colors duration-300 hover:text-gold"
      >
        <vue-feather type="instagram" size="24"></vue-feather>
      </a>

      <a
        href="https://www.linkedin.com/in/matias-ramão-083883144" target="_blank"
          rel="noopener noreferrer"
        aria-label="Link para o LinkedIn do Dr. Matias Ramão"
        class="text-gray-400 transition-colors duration-300 hover:text-gold"
      >
        <vue-feather type="linkedin" size="24"></vue-feather>
      </a>
    </div>
    
  </div>
</template>

<style scoped>
/* Estilos específicos, se necessário */
/* Garante que o hover funcione nos SVGs (igual ao footer) */
a:hover svg {
  stroke: currentColor;
}
</style>