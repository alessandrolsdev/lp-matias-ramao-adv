  >
    <slot />
  </div>
</template>

<style scoped>
/*
  Esta é a nova lógica de CSS.
*/

/* 1. O estado INICIAL (invisível e movido para baixo) */
.fade-in-section {
  opacity: 0;
  transform: translateY(50px);
  /* A transição suave que queremos */
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* 2. O estado FINAL (quando a classe 'is-visible' é adicionada) */
.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>