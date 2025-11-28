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
/* As animações de entrada (fade-in) */
.image-col {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.text-col {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-delay: 200ms; 
}

.is-visible .image-col,
.is-visible .text-col {
  opacity: 1;
  transform: translateX(0);
}

/* O "Padrão Ouro": Face Dourada, Borda Preta */
.text-shadow-custom {
  color: #B08D57;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
  paint-order: stroke fill;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);
}
</style>