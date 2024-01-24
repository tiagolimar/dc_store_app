# DC Store App
Confira a aplicação em funcionamento: [DripStore Live Demo](https://dc-store-app.vercel.app/)

![Live Demo](https://uploaddeimagens.com.br/imagens/navjuNM)

## Visão Geral
O DC Store App é uma aplicação web moderna projetada para e-commerce, essa aplicação foi projetada para fins educacionais. Construída com as mais recentes tecnologias web, oferece uma experiência de usuário fluida e responsiva.

## Tecnologias Utilizadas

### Front End
- **[React](https://reactjs.org/)**: Para uma interface de usuário dinâmica e interativa.
- **[Bootstrap](https://getbootstrap.com/)**: Para um design responsivo e moderno.
- **[React Router](https://reactrouter.com/)**: Para navegação eficiente entre páginas.
- **[Axios](https://axios-http.com/)**: Para gerenciamento de requisições HTTP.
- **[Vite](https://vitejs.dev/)**: Como ferramenta de build otimizada para desenvolvimento moderno.

### [Back End](https://github.com/tiagolimar/dc_store_api)
- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript no servidor, ideal para construir aplicações escaláveis e eficientes.
- **[Express](https://expressjs.com/)**: Framework web rápido, flexível e minimalista para Node.js, facilitando a criação de APIs e a gestão de rotas e requisições.
- **[Sequelize](https://sequelize.org/)**: ORM (Object-Relational Mapping) para Node.js, suporta bancos de dados SQL, facilitando a manipulação e consulta de dados.
- **[Cors](https://www.npmjs.com/package/cors)**: Middleware para habilitar CORS (Cross-Origin Resource Sharing), permitindo que recursos de um servidor sejam acessados por um domínio diferente.
- **[Dotenv](https://www.npmjs.com/package/dotenv)**: Módulo que carrega variáveis de ambiente de um arquivo .env para process.env, ajudando na gestão de configurações sensíveis e específicas do ambiente.
- **[Nodemon](https://www.npmjs.com/package/nodemon)**: Utilitário que monitora quaisquer mudanças nos arquivos do projeto e reinicia automaticamente o servidor, facilitando o desenvolvimento.
- **[PostgreSQL (PG)](https://www.npmjs.com/package/pg)**: Cliente PostgreSQL para Node.js, proporcionando uma conexão direta e eficiente com bancos de dados PostgreSQL.

### Principais Características:

1. **Front-End Reactivo**: Utiliza a biblioteca React para construir uma interface de usuário reativa e eficiente.

1. **Roteamento com React Router**: Implementa roteamento de página para navegação fluida entre diferentes partes do aplicativo.

1. **Bootstrap para Estilo**: Utiliza o Bootstrap para um design responsivo e uma experiência de usuário visualmente atraente.

1. **Comunicação com Back-End**: Estabelece comunicação eficiente com o back-end por meio de solicitações HTTP usando a biblioteca Axios.

1. **Back-End Node.js e Express**: Desenvolvido com Node.js e Express, proporcionando um servidor robusto para manipulação de solicitações e respostas.

1. **Persistência de Dados com Sequelize**: Utiliza o Sequelize como ORM para interagir com o banco de dados, facilitando a manipulação dos dados.

1. **Banco de Dados Neon Tech**: Integração com o banco de dados fornecido pela Neon Tech, oferecendo uma solução confiável para armazenamento de dados.

1. **Hospedagem na Vercel e Render**: Demonstração de como implantar a aplicação no Vercel para o front-end e no Render para o back-end.

## Funcionalidades
A aplicação inclui várias funcionalidades-chave essenciais para uma plataforma de e-commerce:

- **Home**: Uma página de boas-vindas que apresenta os usuários à loja.
- **Produtos**: Uma página dedicada para a navegação e visualização de produtos.
- **Categorias**: Permite aos usuários visualizar produtos por categorias.
- **Meus Pedidos**: Os usuários podem visualizar seus pedidos na página 'Meus Pedidos'.

## Instalação e Configuração
Para executar o projeto em sua máquina local, siga estes passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/tiagolimar/dc_store_app.git
   ```

1. Instale as dependências:
    ```bash
    npm install
    ```

1. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

## Banco de Dados

O banco de dados é fornecido pela [Neon Tech](https://neon.tech/). É possível também configurar um banco de dados local para teste, neste caso configure as variáveis de ambiente necessárias no arquivo `.env` (ver repositório [backend](https://github.com/tiagolimar/dc_store_api)).

## Hospedagem
- Front End: [Vercel](https://vercel.com/)
- Back End: [Render](https://dashboard.render.com/)

## Contribuição
Se deseja contribuir para este projeto, fico feliz em receber sua participação! Este projeto é voltado principalmente para fins educacionais, proporcionando uma oportunidade de prática e aprendizado em desenvolvimento full-stack.

Aceitamos contribuições que visem aprimorar as práticas de codificação, tornar o código mais claro e educativo, e incorporar melhores práticas. Seja bem-vindo para propor melhorias no código, documentação ou qualquer outra sugestão que contribua para a qualidade e a experiência educacional deste projeto.