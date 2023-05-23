import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import send from "../../../assets/send.png";
import { LottieDiv, ResponseDiv } from "./style";
import Lottie from "lottie-react";
import search from "../../../assets/search.json";
import lixo from "../../../assets/lixo.png";
import { StyledDivCep } from "../Cep/style";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";

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
        toast.success("Ano encontrado.");
      })
      .catch((error) => {
        console.error(error);
        if (
          error.response.data.message ==
          "Ano fora do intervalo suportado entre 1900 e 2199."
        ) {
          toast.error("Ano fora do intervalo suportado entre 1900 e 2199.");
        }
      });
  }, [ano]);

  return (
    <StyledDivCep>
      <ToastContainer autoClose={2000} />
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

      {responseAno[0] == undefined ? (
        <LottieDiv>
          <Lottie animationData={search} />
        </LottieDiv>
      ) : (
        <ResponseDiv>
          <h4>Dados</h4>

          <ul>
            {responseAno.map((elem) => (
              <li key={elem.date}>
                Data: {format(new Date(elem.date), "dd/MM/yyyy")} - Nome:{" "}
                {elem.name}
              </li>
            ))}
          </ul>

          <img src={lixo} alt="Lixeira" onClick={handleClick} />
        </ResponseDiv>
      )}
    </StyledDivCep>
  );
};

export default MainFeriado;
