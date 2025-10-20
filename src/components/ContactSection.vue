<script setup lang="ts">
// Nenhuma lógica de formulário é necessária aqui.
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
              href="https://wa.me/5567981376840" target="_blank" rel="noopener noreferrer"  
              class="inline-block bg-gold text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              Iniciar Conversa via WhatsApp
            </a>
          </div>
        </div>

        <div>
          <form name="contato" data-netlify="true" data-netlify-honeypot="bot-field">
            
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

            <div class="mt-6">
              <label for="contato" class="block text-sm font-medium text-gray-300">Seu E-mail ou Telefone</label>
              <input type="text" id="contato" name="contato"
                     class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-gold">
            </div>

            <div class="mt-6">
              <label for="mensagem" class="block text-sm font-bold text-gray-300">Descreva seu caso e eu retornarei com uma estratégia para a solução</label>
              <textarea id="mensagem" name="mensagem" rows="5" required
                        class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"></textarea>
            </div>

            <div class="mt-6">
              <button type="submit"
                      class="w-full bg-gold text-black font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105">
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
/* Nenhum estilo precisa ser mudado */
</style>