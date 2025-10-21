<script setup lang="ts">
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
    <HeroSection />
    <AboutSection />
    <DiferencialSection />
    <AreasDeAtuacaoSection />
    <ContactSection />
  </main>
  <FooterSection />

  <ScrollToTopButton />
</template>

<style scoped>
/* Estilos específicos da landing page, se houver */
</style>