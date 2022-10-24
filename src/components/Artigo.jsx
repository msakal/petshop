import estilos from "../components/ListaPosts/ListaPosts.module.css";
const Artigo = ({ titulo, subtitulo }) => {
  return (
    <article className={estilos.post}>
      <h3>{titulo}</h3>
      <p>{subtitulo}</p>
    </article>
  );
};

export default Artigo;
