import estilos from "./Categoria.module.css";

/* Objetivo deste componente é exibir o ListaPosts filtrados pela categoria escolhida no menu ListaCategorias. */

function Categoria() {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pet Notícias</h2>
    </section>
  );
}

export default Categoria;
