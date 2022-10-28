import { Button, TextField } from "@mui/material";
import { useState } from "react";
import serverApi from "../../api/servidor-api";

import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";

const Contato = () => {
  /* Eventos/Funções para captura da digitação nos campos */
  const inputNome = (event) => {
    setNome(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputMensagem = (event) => {
    setMensagem(event.target.value);
  };

  const enviarContato = async (event) => {
    event.preventDefault();
    /* console.log(nome, email, mensagem); */
    /* Script para envio dos dados para a API */
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      await fetch(`${serverApi}/contatos`, opcoes);
      alert("Dados enviados!");
    } catch (error) {
      console.log("Deu ruim: " + error.message);
    }
  };

  /* Hook useState para manipular os estados dos dados do componente */
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>
      <Caixa>
        <form
          onSubmit={enviarContato}
          className={estilos.formulario}
          method="post"
        >
          <div>
            <TextField
              onChange={inputNome}
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText="Você deve digitar o nome"
            />
          </div>

          <div>
            <TextField
              onChange={inputEmail}
              type="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              required
              helperText="Informe um e-mail para contato"
            />
          </div>

          <div>
            <TextField
              onChange={inputMensagem}
              type="text"
              label="Mensagem"
              variant="outlined"
              fullWidth
              required
              helperText="Fale o que você quiser"
              multiline
              rows={6}
            />
          </div>

          <div>
            <Button type="submit" variant="contained">
              Enviar mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
