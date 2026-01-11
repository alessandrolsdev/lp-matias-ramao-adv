<script setup lang="ts">
/**
 * Componente da Seção de Contato.
 * 
 * Esta seção oferece duas formas de contato com o advogado:
 * 1. Link direto para WhatsApp (mais rápido)
 * 2. Formulário de contato detalhado (integrado com Netlify Forms)
 * 
 * Funcionalidades implementadas:
 * - Validação visual de email em tempo real (ícones verde/vermelho)
 * - Contador de caracteres com limite para a mensagem
 * - Máscara de telefone brasileiro
 * - Honeypot para proteção contra spam
 * - Animações de entrada ao scrollar
 * 
 * @component
 */
import { ref, computed, onMounted } from 'vue';
import VueFeather from 'vue-feather';
import { useIntersectionObserver } from '../composables/useIntersectionObserver';

/**
 * Estado do campo de email digitado pelo usuário
 */
const email = ref('');

/**
 * Estado do campo de telefone (com máscara aplicada)
 */
const telefone = ref('');

/**
 * Estado do campo de mensagem
 */
const mensagem = ref('');

/**
 * Limite máximo de caracteres para a mensagem
 */
const maxMensagemLength = 500;

/**
 * Expressão regular para validação básica de email
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Computed: Indica se deve mostrar o ícone de validação verde (email válido)
 * @returns {boolean} True se o email for válido e tiver pelo menos 3 caracteres
 */
const showValidIcon = computed(() => {
  return email.value.length > 0 && emailRegex.test(email.value);
});

/**
 * Computed: Indica se deve mostrar o ícone de validação vermelho (email inválido)
 * @returns {boolean} True se o email tiver caracteres mas for inválido
 */
const showInvalidIcon = computed(() => {
  return email.value.length > 0 && !emailRegex.test(email.value);
});

onMounted(() => {
  useIntersectionObserver('#contato');
});
</script>

<template>
  <!-- Seção de Contato: Formulário e link direto para WhatsApp -->
  <section 
    id="contato"
    class="w-full bg-black text-white py-16 md:py-24"
  >
    <div class="container mx-auto px-4">
      <div class="text-center mb-12 title-block">
        <h2 class="text-4xl font-bold text-gold">Dê o Próximo Passo</h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Estou pronto para ouvir sobre seu desafio e construir uma estratégia jurídica sob medida para você.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div class="flex flex-col justify-center left-col">
          <h3 class="text-2xl font-bold">Prefere Agilidade?</h3>
          <p class="mt-4 text-gray-400">
            Clique no botão abaixo para iniciar uma conversa diretamente pelo WhatsApp...
          </p>
          <div class="mt-8">
            <a href="https://wa.me/5567981376840" target="_blank" rel="noopener noreferrer" class="inline-block bg-[#B08D57] text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105">
              Iniciar Conversa via WhatsApp
            </a>
          </div>
        </div>

        <div class="right-col">
          <form name="contato" action="/obrigado" data-netlify="true" data-netlify-honeypot="bot-field" class="space-y-6">

            <p class="hidden"><label>Não preencha: <input name="bot-field" /></label></p>

            <div>
              <label for="nome" class="block text-sm font-medium text-gray-300">Seu Nome</label>
              <input type="text" id="nome" name="nome" required class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-gold">
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Seu E-mail <span class="text-gray-500">(Opcional)</span></label>
              <div class="relative mt-1">
                <input type="email" id="email" name="email" v-model="email" placeholder="seuemail@dominio.com"
                       class="block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-gold pr-10">
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <vue-feather v-if="showValidIcon" type="check" size="20" class="text-green-500"></vue-feather>
                  <vue-feather v-if="showInvalidIcon" type="x" size="20" class="text-red-500"></vue-feather> 
                </div>
              </div>
            </div>

            <div>
              <label for="telefone" class="block text-sm font-medium text-gray-300">Seu Telefone <span class="text-gray-500">(Opcional)</span></label>
              <input type="tel" id="telefone" name="telefone" v-model="telefone" v-mask="'(##) #####-####'"
                     placeholder="(xx) xxxxx-xxxx" maxlength="15" 
                     class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>

            <div>
              <label for="mensagem" class="block text-sm font-bold text-gray-300">Descreva seu caso...</label>
              <textarea id="mensagem" name="mensagem" rows="5" required :maxlength="maxMensagemLength" v-model="mensagem"
                        class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"></textarea>
              <div class="mt-2 text-right text-sm text-gray-500">
                {{ mensagem.length }} / {{ maxMensagemLength }}
              </div>
            </div>

            <div>
              <button type="submit" class="w-full bg-[#B08D57] text-black font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105">
                Enviar para Análise
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/**
 * Estilos da seção de Contato.
 * 
 * Todas as animações (title-block, left-col, right-col) estão
 * centralizadas em src/styles/animations.css.
 * 
 * Esta seção não possui estilos customizados únicos.
 */
</style>