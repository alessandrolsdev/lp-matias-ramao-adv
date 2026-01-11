<script setup lang="ts">
/**
 * View da Página Inicial (Landing Page).
 * 
 * Esta view agrega todas as seções principais do site em ordem sequencial:
 * 1. HeroSection: Cabeçalho com CTA principal
 * 2. AboutSection: História e trajetória profissional
 * 3. DiferencialSection: Proposta de valor única
 * 4. AreasDeAtuacaoSection: Especialidades jurídicas
 * 5. ContactSection: Formulário e WhatsApp
 * 6. FooterSection: Copyright e redes sociais
 * 7. ScrollToTopButton: Botão flutuante de scroll
 * 
 * @component
 */
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import DiferencialSection from '../components/DiferencialSection.vue';
import AreasDeAtuacaoSection from '../components/AreasDeAtuacaoSection.vue';
import ContactSection from '../components/ContactSection.vue';
import FooterSection from '../components/FooterSection.vue';
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