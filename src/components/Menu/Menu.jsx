import { NavLink } from "react-router-dom";

import estilos from "./Menu.module.css";
const Menu = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName={estilos.ativo}>
        Blog
      </NavLink>
      <NavLink to="/Produtos" activeClassName={estilos.ativo}>
        Produtos
      </NavLink>
      <NavLink to="/Sobre" activeClassName={estilos.ativo}>
        Sobre
      </NavLink>
      <NavLink to="/Contato" activeClassName={estilos.ativo}>
        Contato
      </NavLink>
    </nav>
  );
};

export default Menu;
