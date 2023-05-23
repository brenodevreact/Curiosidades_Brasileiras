import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import send from "../../../assets/send.png";
import { LottieDiv, ResponseDiv } from "./style";
import Lottie from "lottie-react";
import search from "../../../assets/search.json";
import lixo from "../../../assets/lixo.png";

type DataAno = {
  date: string;
  name: string;
};

type FormsData = {
  ano: string;
};

const MainFeriado = () => {
  const [ano, setAno] = useState("");
  const [responseAno, setResponseAno] = useState<DataAno[]>([]);

  const handleClick = () => {
    setResponseAno([]);
    setAno("");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormsData>();
  const onSubmit: SubmitHandler<FormsData> = (data) => {
    setAno(data.ano);
    reset();
  };

  useEffect(() => {
    axios
      .get(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
      .then((response) => {
        setResponseAno(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ano]);

  return (
    <>
      <h2>Feriados Nacionais</h2>
      <h3>Digite o ano que você quer ver os feriados</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="Ano desejado..."
          {...register("ano")}
        />
        {errors.ano && <span>Esse campo é necessário...</span>}

        <button type="submit">
          <img src={send} alt="Enviar" />
        </button>
      </form>

      {responseAno == null ? (
        <LottieDiv>
          <Lottie animationData={search} />
        </LottieDiv>
      ) : (
        <ResponseDiv>
          <h4>Dados</h4>

          <ul>
            {responseAno.map((elem) => (
              <li key={elem.date}>
                Data: {elem.date} Nome: {elem.name}
              </li>
            ))}
          </ul>

          <img src={lixo} alt="Lixeira" onClick={handleClick} />
        </ResponseDiv>
      )}
    </>
  );
};

export default MainFeriado;
