# Landing Page - Matias Ramão Advocacia

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.4.21-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)](https://vitejs.dev/)

Bem-vindo ao repositório da Landing Page do advogado Matias Ramão. Este projeto foi desenvolvido para apresentar os serviços jurídicos, a trajetória profissional e os diferenciais do escritório, oferecendo uma experiência moderna, responsiva e de alta performance para os visitantes.

## 📋 Sobre o Projeto

Esta Landing Page tem como objetivo principal converter visitantes em clientes, fornecendo informações claras sobre as áreas de atuação (Direito do Consumidor, Trabalhista, Cível, Urbanístico) e facilitando o contato através de formulário integrado e WhatsApp

.

O design foi cuidadosamente elaborado para transmitir profissionalismo, seriedade e acessibilidade, utilizando uma paleta de cores "Gold" (#B08D57) e "Black" para evocar sofisticação e confiança.

## ✨ Funcionalidades

### Seções da Landing Page

- **Hero Section**: Cabeçalho impactante com proposta de valor e CTA principal para WhatsApp
- **About Section**: História pessoal e profissional com animações de entrada suaves
- **Diferenciais**: Cards animados destacando a visão 360°, advocacia estratégica e comunicação clara
- **Áreas de Atuação**: Grade responsiva com 6 especialidades jurídicas
- **Contato**: Formulário integrado com Netlify Forms + link direto para WhatsApp
- **Footer**: Copyright dinâmico e links para redes sociais

### Funcionalidades Técnicas

- ✅ **Validação de Email em Tempo Real**: Feedback visual com ícones verde/vermelho
- ✅ **Contador de Caracteres**: Limite de 500 caracteres para mensagem do formulário
- ✅ **Máscara de Telefone**: Formatação automática (XX) XXXXX-XXXX
- ✅ **Botão Scroll to Top**: Aparece após 300px de scroll com animação suave
- ✅ **Animações de Scroll**: Fade-in automático ao entrar na viewport
- ✅ **Ano Dinâmico no Footer**: Atualização automática do copyright
- ✅ **Proteção Anti-Spam**: Honeypot no formulário Netlify
- ✅ **SEO Otimizado**: Meta tags completas (Open Graph, Twitter Cards)
- ✅ **Responsivo**: Layout adaptável para mobile, tablet e desktop

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias modernas:

-   **[Vue.js 3.4.21](https://vuejs.org/)**: Framework JavaScript progressivo com Composition API
-   **[TypeScript 5.2.2](https://www.typescriptlang.org/)**: Superset do JavaScript com tipagem estática
-   **[Vite 5.2.0](https://vitejs.dev/)**: Build tool de próxima geração com HMR ultrarrápido
-   **[Tailwind CSS 3.4.4](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida
-   **[Vue Router 4.6.3](https://router.vuejs.org/)**: Roteador oficial do Vue.js para SPA
-   **[VueUse 13.9.0](https://vueuse.org/)**: Composables essenciais para Vue 3
-   **[Vue Feather 2.0.0](https://github.com/egoist/vue-feather)**: Componente para ícones Feather Icons
-   **[v-mask 1.0.0](https://github.com/probil/v-mask)**: Diretiva para máscaras de input

## 📂 Estrutura do Projeto

```
lp-matias-ramao-adv/
├── public/                     # Arquivos estáticos públicos
│   └── favicon.png            # Favicon do site
├── src/
│   ├── assets/                # Recursos estáticos (imagens)
│   │   └── images/            # Fotos do advogado
│   ├── components/            # Componentes Vue reutilizáveis
│   │   ├── common/            # Componentes genéricos
│   │   │   ├── FadeIn.vue    # Wrapper de animação fade-in
│   │   │   └── ScrollToTopButton.vue
│   │   ├── AboutSection.vue
│   │   ├── AreasDeAtuacaoSection.vue
│   │   ├── ContactSection.vue
│   │   ├── DiferencialSection.vue
│   │   ├── FooterSection.vue
│   │   └── HeroSection.vue
│   ├── router/                # Configuração de rotas
│   │   └── index.ts          # Definição das rotas SPA
│   ├── styles/                # Estilos centralizados
│   │   └── animations.css    # Animações reutilizáveis
│   ├── views/                 # Páginas principais
│   │   ├── LandingPage.vue   # Página inicial (/)
│   │   └── ThankYouPage.vue  # Página de confirmação (/obrigado)
│   ├── App.vue                # Componente raiz
│   ├── main.ts                # Ponto de entrada da aplicação
│   └── style.css              # Estilos globais + Tailwind directives
├── index.html                 # HTML principal com meta tags SEO
├── package.json               # Dependências e scripts
├── tsconfig.json              # Configuração TypeScript
├── vite.config.ts             # Configuração Vite
└── tailwind.config.js         # Configuração Tailwind CSS
```

## 🔧 Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 16.x ou superior
- npm (incluído com Node.js)

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/alessandrolsdev/lp-matias-ramao-adv.git
    cd lp-matias-ramao-adv
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará acessível em `http://localhost:5173` (ou outra porta indicada no terminal).

### Build de Produção

Para gerar a versão otimizada de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## 🎨 Boas Práticas Implementadas

### Código e Arquitetura

- ✅ **Componentização**: Separação lógica em componentes reutilizáveis
- ✅ **TypeScript Strict**: Tipagem estática em todos os arquivos
- ✅ **Composition API**: Uso de `<script setup>` para código mais limpo
- ✅ **CSS Centralizado**: Animações reutilizáveis em arquivo único
- ✅ **DRY Principle**: Eliminação de código duplicado
- ✅ **Documentação JSDoc**: Todos os componentes e funções documentados em PT-BR
- ✅ **Single Responsibility**: Cada componente com responsabilidade única
- ✅ **Código Limpo**: Comentários profissionais, sem conversação

### Performance

- ✅ **Code Splitting**: Lazy loading com Vue Router
- ✅ **Tree Shaking**: Tailwind CSS purge para remover CSS não utilizado
- ✅ **Otimização de Imagens**: Imagens otimizadas para web
- ✅ **HMR**: Hot Module Replacement com Vite
- ✅ **Will-change CSS**: Otimização de animações com GPU
- ✅ **Transition Delay Staggered**: Animações escalonadas eficientes

### SEO e Acessibilidade

- ✅ **Meta Tags Completas**: Description, Keywords, Open Graph, Twitter Cards
- ✅ **Semantic HTML**: Uso de tags semânticas (`<header>`, `<section>`, `<footer>`)
- ✅ **ARIA Labels**: Rótulos de acessibilidade em botões e links
- ✅ **Alt Text**: Descrições em todas as imagens
- ✅ **Canonical URL**: Tag canonical para evitar conteúdo duplicado
- ✅ **Language Attribute**: lang="pt-BR" no HTML

### Segurança

- ✅ **Honeypot Anti-Spam**: Proteção contra bots no formulário
- ✅ **noopener noreferrer**: Links externos seguros
- ✅ **Validação Client-Side**: Validação de email antes do envio
- ✅ **Sanitização de Inputs**: Campos limitados e validados

## 🛠️ Troubleshooting

### Erro: "Cannot find module 'vue-router'"

**Solução**: Execute `npm install` para instalar todas as dependências.

### Erro: Tailwind classes não aplicadas

**Solução**: Verifique se `style.css` está importado em `main.ts` e se o Tailwind está configurado corretamente em `tailwind.config.js`.

### Servidor de desenvolvimento não inicia

**Solução**: 
1. Verifique se a porta 5173 está livre
2. Limpe o cache: `rm -rf node_modules` e `npm install`
3. Verifique se o Node.js está atualizado: `node --version` (deve ser 16+)

### Build falha com erro TypeScript

**Solução**: Execute `npm run build` novamente. Se persistir, verifique os erros TypeScript com `npx vue-tsc --noEmit`.

## 📊 Auditoria de Código Realizada

Este projeto passou por uma auditoria completa de código em **Janeiro de 2026**, onde foram identificados e corrigidos:

### Problemas Críticos Resolvidos

- ✅ **6 Componentes Vue Corrompidos**: Estrutura incompleta (falta de tags `<script>` e `<template>`)
- ✅ **Link WhatsApp Quebrado**: href="#" corrigido para número real
- ✅ **Falta de Meta Tags SEO**: Adicionadas 20+ meta tags para SEO

### Melhorias de Qualidade

- ✅ **CSS Duplicado Eliminado**: 200+ linhas de CSS refatoradas para arquivo centralizado
- ✅ **Scripts TypeScript Faltantes**: 9 componentes sem lógica agora implementados
- ✅ **Comentários Conversacionais**: Removidos e substituídos por JSDoc profissional
- ✅ **Validações Implementadas**: Email, contador de caracteres, máscara de telefone
- ✅ **Ano Dinâmico**: Footer com copyright automático
- ✅ **Scroll to Top**: Botão flutuante funcional com animações

### Documentação

- ✅ **100% do Código Documentado**: JSDoc em PT-BR em todos os arquivos
- ✅ **README Profissional**: Este arquivo com badges, seções organizadas e troubleshooting
- ✅ **Comentários Padronizados**: Estilo consistente em todo o projeto

## 📝 Documentação do Código

Todo o código fonte foi documentado com comentários em Português (PT-BR) para facilitar o entendimento da lógica, dos componentes e das configurações.

-   **Configurações**: Arquivos como `vite.config.ts` e `tailwind.config.js` possuem explicações detalhadas
-   **Componentes**: Cada componente Vue possui JSDoc descrevendo propósito e funcionalidades
-   **Lógica**: Funções e blocos complexos estão documentados com comentários explicativos

## 🤝 Contribuição

Contribuições são bem-vindas! Se você encontrar bugs ou tiver sugestões de melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

**Padrões de Código**:
- Use TypeScript strict mode
- Documente novos componentes/funções com JSDoc em PT-BR
- Siga a estrutura de componentes existente
- Execute `npm run build` antes de enviar PR

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

**Desenvolvido com dedicação para Matias Ramão Advocacia** | 2026

