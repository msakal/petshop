import { Link } from "react-router-dom";
import estilos from "../components/ListaPosts/ListaPosts.module.css";

const Artigo = ({ id, titulo, subtitulo }) => {
  return (
    <article className={estilos.post}>
      <Link to={`/posts/${id}`}>
        <h3>{titulo}</h3>
        <p>{subtitulo}</p>
      </Link>
    </article>
  );
};

export default Artigo;
