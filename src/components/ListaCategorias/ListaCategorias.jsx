import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import servidorApi from "../../api/servidor-api";

import estilos from "./ListaCategorias.module.css";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        /* const resposta = await fetch(`${servidorApi}/categorias`); */
        const resposta = await fetch(`${servidorApi}/categorias.json`);

        const dados = await resposta.json();

        let listaCategorias = [];
        for (const categoria in dados) {
          const objetoCategoria = {
            id: categoria, // a chave/string gerada pelo firebase será como um id
            nome: dados[categoria].nome,
          };
          listaCategorias.push(objetoCategoria);
        }

        /* setCategorias(dados); */
        setCategorias(listaCategorias);

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
    return <LoadingDesenho ldNome="Categorias.." />;
  }

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => (
          <li key={id}>
            <NavLink to={`/categoria/${nome}`} activeClassName={estilos.ativo}>
              {nome}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCategorias;
