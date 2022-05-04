# NextJs + Chakra UI Boilerplate

## Introdução

O código armazenado neste repositório tem como objetivo principal fornecer um ambiente de desenvolvimento de FrontEnd pré-configurado e exemplos do uso da Clean Archtecture.
O boilerplate aqui hospedado possui as seguintes características:

- Utilização do tema do Chakra, juntamente com os presets da Voltz
- Utilização de linters para evitar poluição no código, assim como commits que fogem do padrão e pushs que falham testes
- Exemplo de consumo à uma API

## Configuração do ambiente local

Para que este projeto possa ser executado localmente, será necessário utilizar um sistema que tenha os programas abaixo instalados.

- NodeJS
- NPM

Uma vez que estes requisitos sejam satisfeitos, utilize o comando abaixo para instalar as dependências do projeto.

```bash
npm install
```

Após este passo, inicie a execução local do app com o comando.

```bash
npm run dev
```

## Deploy

Para utilizar as features do framework é necessário fazer o deploy pelo Vercel ou usar o Cloud Run, já que hospedar uma aplicação Next em um ambiente não preparado para ela resulta em funcionalidades como o SSR, SSG e afins sendo perdidas

## Tech Stack

### NextJS

#### Introdução

O NextJS é um framework JavaScript/TypeScript para o desenvolvimento de FrontEnd com base em React.
Neste projeto ele é utilizado pela série de benefícios que ele contém, principalmente as diferentes formas de renderizar a página.

#### Como usar NextJS?

O roteamento de páginas ocorre por meio da pasta src/pages, de acordo com o nome do arquivo.

O roteamento dinâmico ocorre nomeando a váriavel entre colchetes, criando um arquivo `[example].tsx`, onde a variável nesse caso se chama example.

O uso de SSR, SSG, SSR e ISG só pode ser feito na pasta src/pages e basta chamar a função específica para o uso desejado, elas podem ser encontradas [aqui](https://nextjs.org/docs/basic-features/data-fetching/overview).

O Next pode ser usado como uma API ao criar arquivos na pasta src/pages/api.

O arquivo \_app.tsx é a raiz do projeto, e envelopa toda a aplicação, podendo ser usado para alterar algum funcionamento padrão ou injetar dependências.

O arquivo \_document.ts é usado para customizar tags ao Header e ao Body de todas as páginas.

A pasta public é usada para armazenas mídias/arquivos estáticos.

O arquivo next.config.js é usado para customizar configuração da aplicação, como variáveis de ambiente, rota base, rewrite e redirect de rotas e configurações de webpacks.

### Chakra UI

#### Introdução

O Chakra UI é uma lib JavaScript/TypeScript com componentes pré estilizados e editáveis para o desenvolvimento de FrontEnd com base em React.
Neste projeto ele é utilizado pela variedade, flexibilidade e fácil usabilidade dos seus componentes.

#### Como usar Chakra UI?

O uso de cada componente é bem similar ao uso de um componente próprio do projeto, basta importar o componente desejado e usá-lo no código como é feito com React.

As estilizações ocorrem por meio de props e é possível utilizar valores pré estabelecidos no tema indicando o caminho até ele.

#### Referências

- [NextJs - Docs](https://nextjs.org/docs/getting-started)
- [Chakra UI - Docs](https://chakra-ui.com/guides/first-steps)
- [FontAwesome Icons - Docs](https://fontawesome.com/docs)
