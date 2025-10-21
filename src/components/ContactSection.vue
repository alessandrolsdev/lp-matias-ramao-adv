<script setup lang="ts">
import { ref, computed } from 'vue';
import VueFeather from 'vue-feather';

// Refs de estado para os campos
const telefone = ref('');
const email = ref('');
// 1. MUDANÇA: Adicionamos uma ref para a mensagem
const mensagem = ref('');
// 2. MUDANÇA: Definimos o limite máximo como uma constante
const maxMensagemLength = 1000;

// Lógica de validação do E-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = computed(() => {
  return emailRegex.test(email.value);
});
const showValidIcon = computed(() => isEmailValid.value);
const showInvalidIcon = computed(() => {
  return !isEmailValid.value && email.value.length > 0;
});
</script>

<template>
  <section id="contato" class="w-full bg-black text-white py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gold">Dê o Próximo Passo</h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Estou pronto para ouvir sobre seu desafio e construir uma estratégia jurídica sob medida para você.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div class="flex flex-col justify-center">
          <h3 class="text-2xl font-bold">Prefere Agilidade?</h3>
          <p class="mt-4 text-gray-400">
            Clique no botão abaixo para iniciar uma conversa diretamente pelo WhatsApp e obter uma resposta rápida para suas dúvidas iniciais.
          </p>
          <div class="mt-8">
            <a
              href="https://wa.me/5567981376840" target="_blank" 
              rel="noopener noreferrer"
              class="inline-block bg-[#B08D57] text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              Iniciar Conversa via WhatsApp
            </a>
          </div>
        </div>

        <div>
          <form name="contato" 
            action="/obrigado" data-netlify="true" 
            data-netlify-honeypot="bot-field" 
            class="space-y-6">
            
            <p class="hidden">
              <label>
                Não preencha isto se você for humano: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label for="nome" class="block text-sm font-medium text-gray-300">Seu Nome</label>
              <input type="text" id="nome" name="nome" required
                     class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-gold">
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Seu E-mail <span class="text-gray-500">(Opcional)</span></label>
              <div class="relative mt-1">
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  v-model="email" 
                  placeholder="seuemail@dominio.com"
                  class="block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-gold pr-10"
                >
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <vue-feather 
                    v-if="showValidIcon"
                    type="check"
                    size="20"
                    class="text-green-500"
                  ></vue-feather>
                  <vue-feather 
                    v-if="showInvalidIcon"
                    type="x"
                    size="20"
                    class="text-red-500"
                  ></vue-feather>
                </div>
              </div>
            </div>

            <div>
              <label for="telefone" class="block text-sm font-medium text-gray-300">Seu Telefone <span class="text-gray-500">(Opcional)</span></label>
              <input 
                type="tel" 
                id="telefone"
                name="telefone"
                v-model="telefone"
                v-mask="'(##) #####-####'"
                placeholder="(xx) xxxxx-xxxx"
                maxlength="15" 
                class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <div>
              <label for="mensagem" class="block text-sm font-bold text-gray-300">Descreva seu caso e eu retornarei com uma estratégia para a solução</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows="5" 
                required
                :maxlength="maxMensagemLength"
                v-model="mensagem" class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"
              ></textarea>
              <div class="mt-2 text-right text-sm text-gray-500">
                {{ mensagem.length }} / {{ maxMensagemLength }}
              </div>
            </div>

            <div>
              <button type="submit"
                      class="w-full bg-[#B08D57] text-black font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105">
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

</style>