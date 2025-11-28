<script setup lang="ts">
/**
 * View da Página Inicial (Landing Page).
 * Agrupa todas as seções principais do site.
 */
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import DiferencialSection from '../components/DiferencialSection.vue';
import AreasDeAtuacaoSection from '../components/AreasDeAtuacaoSection.vue';
import ContactSection from '../components/ContactSection.vue';
import FooterSection from '../components/FooterSection.vue';

// 1. IMPORTAÇÃO NOVA
import ScrollToTopButton from '../components/common/ScrollToTopButton.vue';
</script>

<template>
  <main>
    <!-- Seção Hero (Topo) -->
    <HeroSection />
    <!-- Seção Sobre -->
    <AboutSection />
    <!-- Seção Diferenciais -->
    <DiferencialSection />
    <!-- Seção Áreas de Atuação -->
    <AreasDeAtuacaoSection />
    <!-- Seção de Contato -->
    <ContactSection />
  </main>
  <!-- Rodapé -->
  <FooterSection />

  <!-- Botão de voltar ao topo -->
  <ScrollToTopButton />
</template>

<style scoped>
/* Estilos específicos da landing page, se houver */
</style>