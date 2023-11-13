# Guia Harry Potter

[![Capa do Projeto](https://i.imgur.com/QYJ9QUM.jpg)](https://github.com/FelipeSantos92Dev/harry-potter)

Este é o repositório de um projeto abrangente que combina o desenvolvimento de uma API e um site público dedicado aos amantes do universo de Harry Potter. O projeto, construído com tecnologias avançadas como Next.js, TypeScript, Tailwind CSS e PostgreSQL, tem como objetivo oferecer aos fãs um guia interativo e informativo que abranja todos os aspectos do mundo mágico de Harry Potter. O guia fornece detalhes abrangentes sobre os personagens da série, explorando suas origens, habilidades e impacto na trama, proporcionando uma experiência imersiva e enriquecedora para os entusiastas do bruxinho.

## Visão Geral

O projeto possui as seguintes características principais:

- **Frontend em Next.js**: A interface do usuário foi desenvolvida utilizando Next.js, um framework React para renderização no lado do servidor, tornando-o altamente eficiente.

- **Estilização com Tailwind CSS**: O projeto utiliza o Tailwind CSS para a estilização, facilitando a criação de interfaces atraentes e responsivas.

- **Banco de Dados PostgreSQL**: Os dados relacionados ao Harry Potter são armazenados em um banco de dados PostgreSQL para consulta e análise.

- **Escrito em TypeScript**: O código é escrito em TypeScript para maior segurança e facilidade de manutenção.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

- Node.js
- PostgreSQL

## Configuração do Banco de Dados

Certifique-se de configurar o PostgreSQL e ajustar as configurações de conexão no arquivo de configuração.

```sh
# Exemplo de configuração do banco de dados
DATABASE_URL=postgres://seu_usuario:senha@localhost/seu_banco_de_dados
```

## Instalação e Uso

Siga estas etapas para executar o projeto em sua máquina:

1. Clone o repositório

```sh
git clone https://github.com/FelipeSantos92Dev/harry-potter.git
```

2. Navegue para o diretório do projeto:

```sh
cd harry-potter
```

3. Instale as dependências:

```sh
yarn
```

4. Execute o projeto:

```sh
yarn dev
```

Acesse o aplicativo em seu navegador em http://localhost:3000.

## Desenvolvimento de Novas Features

- [x] Criação de pasta na nuvem para armazenamento de imagens
- [x] Conexão com o banco de dados
- [x] Criação do model de personagens
- [x] Criação dos endpoints de personagens
- [ ] Criação do model de lugares
- [ ] Criação dos endpoints de lugares
- [ ] Criação do design do site utilizando o Figma
- [ ] Desenvolvimento de páginas de lista dos personagens
- [ ] Desenvolvimento de páginas de detalhes dos personagens
- [ ] Desenvolvimento de páginas de lista dos lugares
- [ ] Desenvolvimento de páginas de detalhes dos lugares
- [ ] Desenvolvimento da página inicial
- [ ] Adição de funcionalidade de pesquisa
- [ ] Implementação da autenticação de usuário
- [ ] Implementação de um painel de administração

Sinta-se à vontade para adicionar mais etapas de desenvolvimento de acordo com as necessidades do projeto.

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir issues e pull requests. Ficaremos felizes em receber contribuições!

## Licença

Este projeto é licenciado sob a MIT License - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

Desenvolvido por [Felipe Santos](https://github.com/FelipeSantos92Dev) e [Caique Naimi](https://github.com/caiquenaimi).
