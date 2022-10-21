import Caixa from "../../components/Caixa/Caixa";

import estilos from "./Sobre.module.css";

const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Sobre nosso PetShop</h2>
      <Caixa id="sobre">
        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          corrupti, soluta possimus neque sit porro ea autem aut optio dolorem
          non reiciendis accusantium fuga dolor, eos ipsa esse qui perferendis.
        </p>

        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          corrupti, soluta possimus neque sit porro ea autem aut optio dolorem
          non reiciendis accusantium fuga dolor, eos ipsa esse qui perferendis.
        </p>
        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          corrupti, soluta possimus neque sit porro ea autem aut optio dolorem
          non reiciendis accusantium fuga dolor, eos ipsa esse qui perferendis.
        </p>
      </Caixa>
    </section>
  );
};

export default Sobre;
