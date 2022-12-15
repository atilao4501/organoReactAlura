import "./formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        ></CampoTexto>
        <CampoTexto
          obrigatorio={true}
          label="Função"
          placeholder="Digite sua Função"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
        ></CampoTexto>
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        ></CampoTexto>
        <ListaSuspensa
          label="Cargo"
          itens={props.NomeTimes}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        ></ListaSuspensa>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
