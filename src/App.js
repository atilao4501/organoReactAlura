import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "TOP",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "MID",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "ADC",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Suporte",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "Jungle",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <div className="fundo">
        <Banner></Banner>
        <Formulario
          NomeTimes={times.map((time) => time.nome)}
          aoColaboradorCadastrado={(colaborador) =>
            aoNovoColaboradorAdicionado(colaborador)
          }
        ></Formulario>
      </div>
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        ></Time>
      ))}
    </div>
  );
}

export default App;
