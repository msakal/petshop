import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import serverApi from "../../api/servidor-api";

import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import LoadingDesenho from "../../components/LoadingDesenho/LoadingDesenho";

const Post = () => {
  /* useParams() -> hook do react-router que permite acesso/manipulação de parâmetros vindos da URL */
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPost() {
      try {
        const resposta = await fetch(`${serverApi}/posts/${id}`);
        const dados = await resposta.json();
        setPost(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim na busca do post: " + console.error.message);
      }
    }
    getPost();
  }, [id]); /* id é uma dependência para o useEffect */

  if (loading) {
    return <LoadingDesenho />;
  }

  return (
    <section>
      <h2 className={estilos.titulo_secao}>{post.titulo}</h2>
      <Caixa>
        <h3>{post.subtitulo}</h3>
        <p>{post.descricao}</p>
      </Caixa>
    </section>
  );
};

export default Post;
