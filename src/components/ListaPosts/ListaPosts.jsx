import servidorApi from "../../api/servidor-api";
import estilos from "./ListaPosts.module.css";
import Artigo from "../Artigo";

const ListaPosts = () => {
  // console.log(servidorApi);
  /* Escluido o array com os post interno para mudarmos a chamada para recuperar as informações da API */
  /* Temporário, para não dar erro na página inicial (array vazio) */
  const postsTemp = [];

  const getPosts = async () => {
    try {
      const resposta = await fetch(`${servidorApi}/posts`);
      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.log("Deu ruim " + error.message);
    }
  };

  getPosts();

  return (
    <div className={estilos.lista_posts}>
      {postsTemp.map(({ id, titulo, subtitulo }) => (
        <Artigo key={id} titulo={titulo} subtitulo={subtitulo}></Artigo>
      ))}
    </div>
  );
};

export default ListaPosts;
