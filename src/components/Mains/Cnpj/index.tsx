import { useForm, SubmitHandler } from "react-hook-form";
import { DivDDD, LottieDiv, ResponseDiv, StyledDivCep } from "./style";
import send from "../../../assets/send.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import search from "../../../assets/search.json";
import lixo from "../../../assets/lixo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  cnpj: string;
};

type DataCnpj = {
  descricao_identificador_matriz_filial: string;
  descricao_situacao_cadastral: string;
  logradouro: string;
  bairro: string;
  numero: string;
  ddd_telefone_1: string;
  razao_social: string;
  fantasia: string;
  cep: string;
  municipio: string;
};

const MainCnpj = () => {
  const [cnpj, setCnpj] = useState("");
  const [responseCnpj, setResponseCnpj] = useState<DataCnpj | null>(null);

  const handleClick = () => {
    setResponseCnpj(null);
    setCnpj("");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setCnpj(data.cnpj);
    reset();
  };

  useEffect(() => {
    axios
      .get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
      .then((response) => {
        setResponseCnpj(response.data);
        toast.success("DDD encontrado");
      })
      .catch((error) => {
        console.error(error);
        if (error.message == "Request failed with status code 400") {
          toast.error("CNPJ inválido...");
        }
      });
  }, [cnpj]);

  return (
    <StyledDivCep>
      <h2>Consulta de CNPJ</h2>

      <h3>Digite aqui o CNPJ desejado</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="Cnpj desejado..."
          {...register("cnpj")}
        />
        {errors.cnpj && <span>Esse campo é necessário...</span>}
        <button type="submit">
          <img src={send} alt="Enviar" />
        </button>
      </form>

      <ToastContainer autoClose={2000} />
      {responseCnpj == null ? (
        <LottieDiv>
          <Lottie animationData={search} />
        </LottieDiv>
      ) : (
        <ResponseDiv>
          <h4>Dados</h4>

          <DivDDD>
            <span>
              Matriz: {responseCnpj.descricao_identificador_matriz_filial}{" "}
            </span>
            <span>Situação: {responseCnpj.descricao_situacao_cadastral} </span>
            <span>Logradouro: {responseCnpj.logradouro} </span>
            <span>Bairro: {responseCnpj.bairro} </span>
            <span>Número: {responseCnpj.numero} </span>
            <span>Telefone: {responseCnpj.ddd_telefone_1} </span>
            <span>Razão: {responseCnpj.razao_social} </span>
            <span>Fantasia: {responseCnpj.fantasia} </span>
            <span>Cep: {responseCnpj.cep} </span>
            <span>Município: {responseCnpj.municipio} </span>
          </DivDDD>

          <img src={lixo} alt="Lixeira" onClick={handleClick} />
        </ResponseDiv>
      )}
    </StyledDivCep>
  );
};

export default MainCnpj;
