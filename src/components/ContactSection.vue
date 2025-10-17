<script setup lang="ts">
// Importamos 'ref' do Vue para criar variáveis reativas.
// Uma variável reativa é aquela que, quando seu valor muda, a interface do usuário é atualizada automaticamente.
import { ref } from 'vue';

// Criamos variáveis reativas para cada campo do nosso formulário.
// 'ref('')' inicializa a variável com uma string vazia.
// O TypeScript infere que estas são referências de string: Ref<string>.
const nome = ref('');
const emailOuTelefone = ref('');
const mensagem = ref('');

// Esta é a função que será chamada quando o formulário for enviado.
// Por enquanto, ela apenas exibirá os dados no console do navegador e limpará os campos.
// No futuro, é aqui que conectaríamos a um backend ou serviço de e-mail (como Formspree, Netlify Forms, etc.).
function handleSubmit() {
  // Verificação básica para não enviar formulário vazio.
  if (!nome.value || !mensagem.value) {
    alert('Por favor, preencha pelo menos o nome e a mensagem.');
    return;
  }

  // Monta o objeto com os dados do formulário.
  const dadosDoFormulario = {
    nome: nome.value,
    contato: emailOuTelefone.value,
    mensagem: mensagem.value,
  };

  // Exibe os dados no console do desenvolvedor (pressione F12 no navegador para ver).
  console.log('Dados do formulário a serem enviados:', dadosDoFormulario);
  alert('Mensagem enviada com sucesso! (Simulação)');

  // Limpa os campos do formulário após o envio.
  nome.value = '';
  emailOuTelefone.value = '';
  mensagem.value = '';
}
</script>

<template>
  <section id="contato" class="w-full bg-black text-white py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-[#B08D57]">Dê o Próximo Passo</h2>
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
              href="#"  
              class="inline-block bg-[#B08D57] text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-colors"
            >
              Iniciar Conversa via WhatsApp
            </a>
          </div>
        </div>

        <div>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="nome" class="block text-sm font-medium text-gray-300">Seu Nome</label>
              <input v-model="nome" type="text" id="nome" required
                     class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B08D57]">
            </div>

            <div>
              <label for="contato" class="block text-sm font-medium text-gray-300">Seu E-mail ou Telefone</label>
              <input v-model="emailOuTelefone" type="text" id="contato"
                     class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B08D57]">
            </div>

            <div>
              <label for="mensagem" class="block text-sm font-bold text-gray-300">Descreva seu caso e eu retornarei com uma estratégia para a solução</label>
              <textarea v-model="mensagem" id="mensagem" rows="5" required
                        class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B08D57]"></textarea>
            </div>

            <div>
              <button type="submit"
                      class="w-full bg-[#B08D57] text-black font-bold py-3 px-6 rounded-lg text-lg hover:bg-opacity-90 transition-colors">
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
/* Nenhum estilo extra necessário. */
</style>