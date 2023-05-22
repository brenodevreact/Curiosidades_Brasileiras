import { useForm, SubmitHandler } from "react-hook-form";
import { StyledDivCep } from "./style";
import send from "../../../assets/send.png";
import { useEffect, useState } from "react";
import axios from "axios";

type Inputs = {
  cep: string;
  replace: any;
};

const MainCep = () => {
  const [cep, setCep] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setCep(data.cep);
  };

  useEffect(() => {
    const responseCep = axios
      .get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(cep);
  }, [cep]);

  return (
    <StyledDivCep>
      <h2>Consulta de CEP</h2>

      <h3>Digite aqui o CEP desejado</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Cep desejado..." {...register("cep")} />
        {errors.cep && <span>Esse campo é necessário...</span>}
        <button type="submit">
          <img src={send} alt="Enviar" />
        </button>
      </form>

      {/* <div>
        <h4>Dados</h4>
      </div> */}
    </StyledDivCep>
  );
};

export default MainCep;
