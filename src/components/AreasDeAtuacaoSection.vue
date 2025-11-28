  >
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto title-block">
        <h2 class="text-4xl font-bold text-gold">Áreas de Atuação</h2>
        <p class="mt-4 text-lg text-gray-300">
          Ofereço assessoria jurídica especializada para proteger seus interesses e impulsionar seus projetos, com foco principal em Direito do Consumidor, atendendo tanto pessoas físicas quanto empresas.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item border-2 border-transparent hover:scale-105 hover:border-gold  relative hover:z-10 transform-gpu hover:shadow-2xl">
          <h3 class="text-xl font-bold text-gold">Direito do Consumidor</h3>
          <p class="mt-3 text-gray-400">
            Atuação firme na defesa do consumidor (práticas abusivas, falhas em serviços, cobranças) e na consultoria estratégica para empresas se adequarem ao CDC.
          </p>
        </div>

        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item border-2 border-transparent hover:scale-105 hover:border-gold  relative hover:z-10 transform-gpu hover:shadow-2xl">
          <h3 class="text-xl font-bold">Gestão & Empreendedorismo</h3>
          <p class="mt-3 text-gray-400">
            Estruturação de contratos, planejamento societário e consultoria estratégica para startups e empresas consolidadas.
          </p>
        </div>

        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item border-2 border-transparent hover:scale-105 hover:border-gold  relative hover:z-10 transform-gpu hover:shadow-2xl">
          <h3 class="text-xl font-bold">Direito Trabalhista</h3>
          <p class="mt-3 text-gray-400">
            Defesa em reclamações trabalhistas e consultoria preventiva para garantir que sua empresa esteja em conformidade com a legislação.
          </p>
        </div>

        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item border-2 border-transparent hover:scale-105 hover:border-gold  relative hover:z-10 transform-gpu hover:shadow-2xl">
          <h3 class="text-xl font-bold">Direito Cível</h3>
          <p class="mt-3 text-gray-400">
            Atuação em casos de obrigações, contratos, responsabilidade civil e questões de família e sucessões.
          </p>
        </div>

        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item border-2 border-transparent hover:scale-105 hover:border-gold  relative hover:z-10 transform-gpu hover:shadow-2xl">
          <h3 class="text-xl font-bold">Direito Urbanístico</h3>
          <p class="mt-3 text-gray-400">
            Assessoria em regularização de imóveis, loteamentos, zoneamento e conformidade com o plano diretor municipal.
          </p>
        </div>

        <div class="bg-black p-6 rounded-lg border border-gray-700 card-item border-2 border-transparent hover:scale-105 hover:border-gold  relative hover:z-10 transform-gpu hover:shadow-2xl">
          <h3 class="text-xl font-bold">Consultoria Estratégica</h3>
          <p class="mt-3 text-gray-400">
            Análise de riscos e oportunidades, unindo a visão jurídica e de negócios para tomadas de decisão mais eficientes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Bloco do Título (Animação de Entrada) */
.title-block {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), 
              transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.is-visible .title-block {
  opacity: 1;
  transform: translateY(0);
}

/* Cards (Animação de Entrada E Hover com Definições Explícitas) */
.card-item {
  opacity: 0;
  transform: translateY(50px) scale(1); /* Estado inicial */
  transform-origin: center center;
  transition: opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), 
              transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), 
              border-color 0.2s ease-in-out, 
              box-shadow 0.2s ease-in-out;
  will-change: transform, opacity;
}
.is-visible .card-item {
  opacity: 1;
  transform: translateY(0) scale(1); /* Estado final da entrada */
}

/* ESTADO HOVER EXPLÍCITO */
.is-visible .card-item:hover {
  transform: translateY(0) scale(1.05); /* Aplica scale mantendo translateY */
  transition: transform 0.2s ease-in-out, 
              border-color 0.2s ease-in-out, 
              box-shadow 0.2s ease-in-out; /* Transição rápida no hover */
}

/* Staggering (Atrasos para a entrada) */
.is-visible .card-item:nth-child(1) { transition-delay: 300ms; }
.is-visible .card-item:nth-child(2) { transition-delay: 400ms; }
.is-visible .card-item:nth-child(3) { transition-delay: 500ms; }
.is-visible .card-item:nth-child(4) { transition-delay: 600ms; }
.is-visible .card-item:nth-child(5) { transition-delay: 700ms; }
.is-visible .card-item:nth-child(6) { transition-delay: 800ms; }
</style>