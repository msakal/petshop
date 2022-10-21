import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Sempre colocar o caminho exato da chamada.. './pasta/componente(s)' */
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Pagina404 from "./pages/Pagina404/Pagina404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <main className="limitador">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/produtos">
              <Produtos />
            </Route>

            <Route path="/sobre">
              <Sobre />
            </Route>

            <Route path="/contato">
              <Contato />
            </Route>

            <Route path="*">
              <Pagina404 />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
