<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import portrait from "../assets/images/matias-perfil.jpg";
import speaking from "../assets/images/matias-hero.jpg";
import ContactSection from "../components/ContactSection.vue";
import "./b3zl.css";
const menuOpen = ref(false);
const year = new Date().getFullYear();
const areas = [
  [
    "Direito do Consumidor",
    "Defesa do consumidor e orientação para empresas nas relações de consumo.",
  ],
  [
    "Gestão & Empreendedorismo",
    "Contratos, planejamento societário e consultoria para negócios.",
  ],
  ["Direito Trabalhista", "Atuação em reclamações e consultoria preventiva."],
  [
    "Direito Cível",
    "Obrigações, contratos, responsabilidade civil, família e sucessões.",
  ],
  [
    "Direito Urbanístico",
    "Regularização de imóveis, loteamentos e questões de zoneamento.",
  ],
  [
    "Consultoria Estratégica",
    "Análise de riscos e oportunidades com visão jurídica e de negócios.",
  ],
];
let observer: IntersectionObserver | undefined;
onMounted(() => {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  )
    return;
  observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer?.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(".matias-page [data-reveal]")
    .forEach((el) => observer?.observe(el));
});
onUnmounted(() => observer?.disconnect());
</script>

<template>
  <div class="matias-page">
    <a class="skip" href="#conteudo">Pular para o conteúdo</a>
    <header class="masthead wrap">
      <a class="wordmark" href="#inicio"
        >Matias Ramão<span>ADVOCACIA · DIREITO & NEGÓCIOS</span></a
      >
      <button
        class="menu-toggle"
        :aria-expanded="menuOpen"
        aria-controls="navegacao"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? "Fechar" : "Menu" }}
      </button>
      <nav
        id="navegacao"
        :class="{ open: menuOpen }"
        aria-label="Navegação principal"
      >
        <a href="#sobre" @click="menuOpen = false">A trajetória</a
        ><a href="#areas" @click="menuOpen = false">Atuação</a
        ><a href="#contato" @click="menuOpen = false">Contato ↗</a>
      </nav>
    </header>
    <main id="conteudo">
      <section id="inicio" class="legal-hero wrap">
        <div class="hero-copy">
          <p class="eyebrow">ESTRATÉGIA JURÍDICA. PRINCÍPIOS HUMANOS.</p>
          <h1>
            Direito para<br />proteger.<br /><em>Visão para<br />construir.</em>
          </h1>
          <p class="intro">
            Assessoria jurídica para pessoas e negócios. Conhecimento técnico,
            escuta atenta e uma estratégia que começa pela sua história.
          </p>
          <a
            class="legal-button"
            href="https://wa.me/5567981376840"
            target="_blank"
            rel="noopener noreferrer"
            >Converse sobre seu caso <span aria-hidden="true">↗</span></a
          >
        </div>
        <figure class="hero-portrait">
          <img
            :src="portrait"
            alt="Matias Ramão, advogado"
            width="720"
            height="900"
            fetchpriority="high"
          />
          <figcaption>
            <span>Matias Ramão</span><span>Advogado · MBA em Negócios</span>
          </figcaption>
        </figure>
        <div class="hero-bottom">
          <span>Direito do Consumidor / Consultoria Estratégica</span
          ><a href="#sobre">Conheça a trajetória ↓</a>
        </div>
      </section>
      <section id="sobre" class="story-section">
        <div class="wrap story-grid" data-reveal>
          <p class="eyebrow">01 / A TRAJETÓRIA</p>
          <div>
            <h2>Antes da estratégia,<br /><em>existe uma história.</em></h2>
            <p>
              Minha história começa na periferia, em uma família sem muitos
              recursos, mas com grandes sonhos. Um encontro com Jesus Cristo
              transformou minha perspectiva e trouxe um propósito: lutar por
              justiça e servir com integridade.
            </p>
            <p>
              A graduação em Direito na UFMS, o MBA em Negócios e a experiência
              como analista no SEBRAE construíram uma visão que conecta o
              conhecimento jurídico aos desafios de quem empreende.
            </p>
          </div>
        </div>
        <div class="wrap story-image" data-reveal>
          <img
            :src="speaking"
            alt="Matias Ramão durante uma palestra"
            loading="lazy"
            width="1200"
            height="700"
          />
          <blockquote>
            “Princípios que orientam.<br />Estratégia que faz sentido.”
          </blockquote>
        </div>
      </section>
      <section id="areas" class="practice wrap">
        <div class="section-heading" data-reveal>
          <p class="eyebrow">02 / ÁREAS DE ATUAÇÃO</p>
          <h2>Cada desafio pede<br /><em>um olhar específico.</em></h2>
        </div>
        <div class="practice-list">
          <article v-for="(area, index) in areas" :key="area[0]" data-reveal>
            <span class="number">0{{ index + 1 }}</span>
            <h3>{{ area[0] }}</h3>
            <p>{{ area[1] }}</p>
            <a href="#contato" :aria-label="'Conversar sobre ' + area[0]">↗</a>
          </article>
        </div>
      </section>
      <section class="approach">
        <div class="wrap" data-reveal>
          <p class="eyebrow">03 / COMO COMEÇAMOS</p>
          <h2>Escutar. Compreender.<br /><em>Traçar o caminho.</em></h2>
          <div class="steps">
            <p><span>01</span>Uma conversa sobre o seu contexto.</p>
            <p><span>02</span>Uma análise cuidadosa do desafio.</p>
            <p><span>03</span>Orientação sobre os próximos passos.</p>
          </div>
        </div>
      </section>
      <div class="legal-contact"><ContactSection /></div>
    </main>
    <footer class="legal-footer wrap">
      <a class="wordmark" href="#inicio">Matias Ramão<span>ADVOCACIA</span></a
      ><a
        href="https://www.instagram.com/matiasramao"
        target="_blank"
        rel="noopener noreferrer"
        >Instagram ↗</a
      >
      <p>© {{ year }} Matias Ramão Advocacia.</p>
    </footer>
  </div>
</template>
