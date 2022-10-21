import Caixa from "../../components/Caixa/Caixa";

import estilos from "./Produtos.module.css";

const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Conheça nossos produtos</h2>
      <Caixa className={estilos.produtos} id="produtos">
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            iure officia voluptatum quae doloremque aliquid ratione ducimus
            dolorem. Perspiciatis tenetur adipisci voluptatem cumque quasi dolor
            enim, saepe temporibus laudantium fugiat?
          </p>
        </article>

        <article>
          <h3>Produto 2</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            iure officia voluptatum quae doloremque aliquid ratione ducimus
            dolorem. Perspiciatis tenetur adipisci voluptatem cumque quasi dolor
            enim, saepe temporibus laudantium fugiat?
          </p>
        </article>

        <article>
          <h3>Produto 3</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            iure officia voluptatum quae doloremque aliquid ratione ducimus
            dolorem. Perspiciatis tenetur adipisci voluptatem cumque quasi dolor
            enim, saepe temporibus laudantium fugiat?
          </p>
        </article>
      </Caixa>
    </section>
  );
};

export default Produtos;
