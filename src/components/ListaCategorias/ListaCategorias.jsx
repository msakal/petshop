import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import servidorApi from "../../api/servidor-api";

import estilos from "./ListaCategorias.module.css";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${servidorApi}/categorias`);
        const dados = await resposta.json();
        setCategorias(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim " + error.message);
      }
    }
    /* teste de state de categorias
    console.log(categorias) */

    getCategorias();
  }, []);

  if (loading) {
    return <LoadingDesenho />;
  }

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => (
          <li key={id}>
            <Link to={`/categorias/${nome}`}>{nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCategorias;
