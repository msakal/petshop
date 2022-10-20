# React: Projeto PetShop

Projeto iniciado através do [CRA - Create React App](https://github.com/facebook/create-react-app).

Obs.: Este projeto poderia ser criado também a partir do Vite.

## Execução do app

Na 1ª vez, é necessário `npm install` para gerar node_modules (com dependências etc).
E para executar, sempre use `npm start` e acesso `localhost:3000`.

## Dica: desabilitar o Compact Folders do VSCode em Configurações/Settings.

## Sobre Módulos CSS

O uso de módulos CSS garante escopo de estilos, ou seja, o CSS criado em módulos só é aplicado no componente em qie o módulo foi importado.

Arquivos de módulo devem ser nomeados como `Componente.module.css`.

A importação de módulos CSS deve ser feita com `import "nome" form "caminho-do-modulo"`.

## Sobre Media Query

### Mobile First:

Telas a partir de X tamanho (min-width)

### Desktop First:

Telas de até o tamanho X (max-width)

## Emoji - getemoji.com

Usando a seguinte classe.: titulo_secao::before { content: "imagem" }
