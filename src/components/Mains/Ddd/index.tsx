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
  ddd: string;
};

type DataDdd = {
  cities: [string];
  state: string;
};

const MainDDD = () => {
  const [ddd, setDdd] = useState("");
  const [responseDdd, setResponseDdd] = useState<DataDdd | null>(null);

  const handleClick = () => {
    setResponseDdd(null);
    setDdd("");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setDdd(data.ddd);
    reset();
  };

  useEffect(() => {
    axios
      .get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
      .then((response) => {
        setResponseDdd(response.data);
        toast.success("DDD encontrado");
      })
      .catch((error) => {
        console.error(error);
        if (error.response.data.message == "DDD não encontrado") {
          toast.error("DDD não encontrado...");
        }
      });
  }, [ddd]);

  return (
    <StyledDivCep>
      <h2>Consulta de DDD</h2>

      <h3>Digite aqui o DDD desejado</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="DDD desejado..."
          {...register("ddd")}
        />
        {errors.ddd && <span>Esse campo é necessário...</span>}
        <button type="submit">
          <img src={send} alt="Enviar" />
        </button>
      </form>

      <ToastContainer autoClose={2000} />
      {responseDdd == null ? (
        <LottieDiv>
          <Lottie animationData={search} />
        </LottieDiv>
      ) : (
        <ResponseDiv>
          <h4>Dados</h4>

          <DivDDD>
            <h4>Estado: {responseDdd.state}</h4>

            <div>
              {responseDdd.cities.map((elem) => (
                <span>{elem} -</span>
              ))}
            </div>
          </DivDDD>

          <img src={lixo} alt="Lixeira" onClick={handleClick} />
        </ResponseDiv>
      )}
    </StyledDivCep>
  );
};

export default MainDDD;
