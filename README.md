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

## Atalho

rafce - > cria a const

## Componentes ->> Ex: <ListaPosts />

# Criando as rotas

- Criar branch 02-roteamento ou rota.

- Instalar a lib: react-router-dom@5 (npm install react-router-dom@5)

- Modifique o App.jsx para o uso dos recursos do react-router-dom

  1. Realizando a importação dos recursos da lib
     `import { BrowserRouter, Route, Switch } from "react-router-dom";`
  2. Envolver todo o conteúdo do App.jsx dentro do **BowserRouter**
  3. Cada componente qie funciona como "página ou tela" deve estar dentro de um **Route**
  4. Os `<Route>` devem estar dentro de um `<Switch>` para que aconteça a troca entre componentes ao navegar
     **Obs:** não coloque NADA além de `<Route>` no `<Switch>`.

- Modifique o componente Menu.jsx para que use a navegação do react-router-dom

# facilitador para passar o nome do component

Exemplo Versões componentes:
SEM: <Route exact path="/"> <Home /> </Route>
COM: <Route exact path="/" component={Home}> </Route>

# NavLink

- deixa a página assincroma, não fica recarregando a cada clique no componente.

### Criação de um componente de interface chamado Caixa

Em vez de usar uma <div> em cada página agrupando conteúdos diferentes, isolamos ela num componente genérico (Caixa), aplicamos o CSS uma única vez usando módulo do componente, e programamos através de `props` o carregamento dinâmico do conteúdo (**children**) e de classes adicionais (**listaDeClasses**).

**Dica.:** pode ser usado **destructuring** de objetos nas `props`.

### Versão usando map - ListaPosts.jsx

1.  return (
  <div className={estilos.lista_posts}>
    {posts.map(({ id, titulo, subtitulo }) => (
      <article key={id} className={estilos.post}>
      <h3>{titulo}</h3>
      <p>{subtitulo}</p>
    </article>
    ))}
  </div>
);

2.  return (
   <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
         <Artigo key={id} titulo={titulo} subtitulo={subtitulo}></Artigo>
      ))}
   </div>
);

---

# criando API

- json-server (pacote para instalação) precisa ser executado via prompt (node.js)
