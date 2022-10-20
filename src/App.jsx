/* Sempre colocar o caminho exato da chamada.. './pasta/componente(s)' */
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Cabecalho />
      <main className="limitador">
        <Home />
        <Produtos />
        <Sobre />
        <Contato />
      </main>
    </>
  );
};

export default App;
