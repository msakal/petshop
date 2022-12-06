import { useParams } from "react-router-dom";
import ListaCategorias from "../../components/ListaCategorias/ListaCategorias";
import ListaPosts from "../../components/ListaPosts/ListaPosts";
import estilos from "./Categoria.module.css";

/* Objetivo deste componente é exibir o ListaPosts filtrados pela categoria escolhida no menu ListaCategorias. */

function Categoria() {
  const { nome } = useParams();
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Categorias</h2>

      <ListaCategorias />

      {/* <ListaPosts url={`posts?categoria=${nome}`} /> */}
      <ListaPosts categoria={nome} />
    </section>
  );
}

export default Categoria;
