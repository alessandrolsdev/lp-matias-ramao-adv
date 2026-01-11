<script setup lang="ts">
/**
 * Componente Raiz da Aplicação.
 * 
 * Este é o componente principal que envolve toda a aplicação.
 * Serve como container para o sistema de roteamento do Vue Router.
 * 
 * O <router-view> é responsável por renderizar o componente correspondente
 * à rota atual, permitindo navegação SPA (Single Page Application) sem
 * recarregar a página.
 * 
 * Componentes renderizados:
 * - LandingPage (rota: /)
 * - ThankYouPage (rota: /obrigado)
 * 
 * @component
 */
</script>

<template>
  <!-- RouterView renderiza dinamicamente o componente da rota atual -->
  <router-view /> 
</template>

<style>
/**
 * Estilos globais da aplicação.
 * Estilos específicos são definidos nos componentes individuais.
 */
</style>