import imagemLoading from "../../assets/images/loading.svg";
import Caixa from "../Caixa/Caixa";
import estilos from "./LoadingDesenho.module.css";

/* function LoadingDesenho() {
  return (
    <Caixa>
      <h2>Carregando...</h2>
      <img src={imagemLoading} alt="" />
    </Caixa>
  );
} */

function LoadingDesenho({ ldNome }) {
  return (
    <div className={estilos.loading}>
      <h2>{ldNome}</h2>
      <img src={imagemLoading} alt="" />
    </div>
  );
}
export default LoadingDesenho;
