import { useForm, SubmitHandler } from "react-hook-form";
import { LottieDiv, ResponseDiv, StyledDivCep } from "./style";
import send from "../../../assets/send.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import search from "../../../assets/search.json";
import lixo from "../../../assets/lixo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  cep: string;
};

type CepData = {
  city: string;
  neighborhood: string;
  state: string;
  street: string;
};

const MainCep = () => {
  const [cep, setCep] = useState("");
  const [responseCep, setResponseCep] = useState<CepData | null>(null);

  const handleClick = () => {
    setResponseCep(null);
    setCep("");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setCep(data.cep);
    reset();
  };

  useEffect(() => {
    axios
      .get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
      .then((response) => {
        setResponseCep(response.data);
        toast.success("Cep encontrado");
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response.data.message);
        if (
          error.response.data.message ==
          "CEP deve conter exatamente 8 caracteres."
        ) {
          toast.error("CEP deve conter exatamente 8 caracteres...");
        }
        if (
          error.response.data.message ==
          "Todos os serviços de CEP retornaram erro."
        ) {
          toast.error("CEP inexistente.");
        }
      });

    console.log(cep);
    console.log(responseCep);
  }, [cep]);

  return (
    <StyledDivCep>
      <h2>Consulta de CEP</h2>

      <h3>Digite aqui o CEP desejado</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="Cep desejado..."
          {...register("cep")}
        />
        {errors.cep && <span>Esse campo é necessário...</span>}
        <button type="submit">
          <img src={send} alt="Enviar" />
        </button>
      </form>

      <ToastContainer autoClose={2000} />
      {responseCep == null ? (
        <LottieDiv>
          <Lottie animationData={search} />
        </LottieDiv>
      ) : (
        <ResponseDiv>
          <h4>Dados</h4>

          <div>
            <span>Cidade: {responseCep?.city}</span>
            <span>Bairro: {responseCep?.neighborhood}</span>
            <span>Estado: {responseCep?.state}</span>
            <span>Rua: {responseCep?.street}</span>
          </div>

          <img src={lixo} alt="Lixeira" onClick={handleClick} />
        </ResponseDiv>
      )}
    </StyledDivCep>
  );
};

export default MainCep;
