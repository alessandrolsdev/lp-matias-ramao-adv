      aria-label="Voltar ao topo"
      class="fixed bottom-6 right-6 z-[70] bg-[#B08D57] text-black p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-opacity-80"
    >
      <VueFeather type="arrow-up" size="24"></VueFeather>
    </button>
  </transition>
</template>

<style scoped>
/* Definimos as classes para a nossa transição "fade".
  O Vue aplica isso automaticamente com base no v-show.
*/

/* Estado inicial (antes de entrar) */
.fade-enter-from,
/* Estado final (quando sai) */
.fade-leave-to {
  opacity: 0;
}

/* Como a transição deve se comportar (ativa durante entrada/saída) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

/* Garantia extra para o hover do SVG (igual ao footer).
  Certifica que o ícone interno pegue a cor do botão.
*/
button svg {
  stroke: currentColor;
}
</style>