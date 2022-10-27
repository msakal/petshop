/* Quando a função começa com 'useXXX' conhecida -> Hooks do React */
import { useState, useEffect } from "react";

import servidorApi from "../../api/servidor-api";
import estilos from "./ListaPosts.module.css";
import Artigo from "../Artigo";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";

const ListaPosts = ({ url }) => {
  /* Iniciamos o state do componente com um array vazio, para posteriormente "preenche-lo" com os dados da API.
  Esta atribuição será feita com auxilio do setPosts. */
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(servidorApi);
  /* Escluido o array com os post interno para mudarmos a chamada para recuperar as informações da API */
  /* Temporário, para não dar erro na página inicial (array vazio) */
  /* const postsTemp = []; */

  /* Sobre o useEffect.:
  Este hook visa permitir um maior controle sobre *efeitos colaterais* na execução do componente.
  
  Recebe dois parâmetros:
  1) função callback com o que será executado.
  2) lista de dependências qie indicarão ao useEffect quando ele deverá funcionar

  -Se não passar a lista (ou seja, se deixar sem []), useEffect executará toda vez que o componente for renderizado. Portanto, 
  o callback se torna um loop infinito.
  -Se passar a lista vazia (ou seja, se deixar [] vazio), useEffect executará somente no momento que o componente é rendeizado 
  a primeira vez evitando o loop infinito do callback.
  */
  useEffect(() => {
    async function getPosts() {
      try {
        /* const resposta = await fetch(`${servidorApi}/posts`); */
        const resposta = await fetch(`${servidorApi}/${url || "posts"}`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim " + error.message);
      }
    }
    getPosts();
    /* É necessário indicar a url como dependência pos ela muda toda vez em que uma categoria é clicada
    
    Desta forma, o useEffect "entende" que ele deve executar novamente as suas ações (neste caso, executar novamente o fetch na API)
    */
  }, [url]);

  // return <mark style={{ backgroundColor: "red" }}>carregando...</mark>;
  if (loading) {
    return <LoadingDesenho />;
  }

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <Artigo key={id} id={id} titulo={titulo} subtitulo={subtitulo}></Artigo>
      ))}
    </div>
  );
};

export default ListaPosts;
