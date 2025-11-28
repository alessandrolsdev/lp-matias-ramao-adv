# Landing Page - Matias Ramão Advocacia

Bem-vindo ao repositório da Landing Page do advogado Matias Ramão. Este projeto foi desenvolvido para apresentar os serviços jurídicos, a trajetória e os diferenciais do escritório, oferecendo uma experiência moderna, responsiva e de alta performance para os visitantes.

## 📋 Sobre o Projeto

Esta Landing Page tem como objetivo principal converter visitantes em clientes, fornecendo informações claras sobre as áreas de atuação (Direito do Consumidor, Trabalhista, Cível, etc.) e facilitando o contato através de formulário e WhatsApp.

O design foi cuidadosamente elaborado para transmitir profissionalismo, seriedade e acessibilidade, utilizando uma paleta de cores "Gold" e "Black" para evocar sofisticação.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias modernas:

-   **[Vue.js 3](https://vuejs.org/)**: O framework JavaScript progressivo para construção de interfaces de usuário.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, garantindo maior segurança e escalabilidade ao código.
-   **[Vite](https://vitejs.dev/)**: Build tool de próxima geração que oferece um servidor de desenvolvimento extremamente rápido e builds otimizados.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida e responsiva.
-   **[Vue Router](https://router.vuejs.org/)**: Roteador oficial do Vue.js para navegação entre páginas (SPA).
-   **[VueUse](https://vueuse.org/)**: Coleção de utilitários de composição essenciais para Vue (usado para animações de scroll e interseção).
-   **[Vue Feather](https://github.com/egoist/vue-feather)**: Componente para ícones Feather Icons.
-   **[v-mask](https://github.com/probil/v-mask)**: Diretiva para máscaras de input (telefones, etc.).

## 📂 Estrutura do Projeto

A estrutura de pastas do projeto é organizada da seguinte forma:

```
lp-matias-ramao-adv/
├── public/              # Arquivos estáticos públicos
├── src/
│   ├── assets/          # Imagens e outros recursos estáticos
│   ├── components/      # Componentes Vue reutilizáveis
│   │   ├── common/      # Componentes genéricos (botões, efeitos)
│   │   └── ...          # Seções da Landing Page (Hero, About, Contact, etc.)
│   ├── router/          # Configuração das rotas (Vue Router)
│   ├── views/           # Páginas principais (LandingPage, ThankYouPage)
│   ├── App.vue          # Componente raiz da aplicação
│   ├── main.ts          # Ponto de entrada da aplicação
│   └── style.css        # Estilos globais e diretivas do Tailwind
├── index.html           # Arquivo HTML principal
├── package.json         # Dependências e scripts do projeto
├── tsconfig.json        # Configurações do TypeScript
├── vite.config.ts       # Configurações do Vite
└── tailwind.config.js   # Configurações do Tailwind CSS
```

## 🔧 Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/lp-matias-ramao-adv.git
    cd lp-matias-ramao-adv
    ```

2.  **Instale as dependências:**

    Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    O projeto estará acessível em `http://localhost:5173` (ou outra porta indicada no terminal).

4.  **Para gerar a versão de produção:**

    ```bash
    npm run build
    ```

    Os arquivos otimizados serão gerados na pasta `dist`.

## 📝 Documentação do Código

Todo o código fonte foi documentado com comentários em Português (Pt-Br) para facilitar o entendimento da lógica, dos componentes e das configurações.

-   **Configurações**: Arquivos como `vite.config.ts` e `tailwind.config.js` possuem explicações sobre suas definições.
-   **Componentes**: Cada componente Vue (`.vue`) possui uma descrição de seu propósito e funcionamento.
-   **Lógica**: Funções e blocos de código mais complexos (como observadores de interseção para animações) estão detalhados.

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

Desenvolvido com dedicação para Matias Ramão Advocacia.
