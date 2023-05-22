import { useForm, SubmitHandler } from "react-hook-form";
import { StyledDivCep } from "./style";

type Inputs = {
  cep: string;
};

const MainCep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <StyledDivCep>
      <h2>Consulta de CEP</h2>

      <h3>Digite aqui o CEP desejado</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Cep desejado..." {...register("cep")} />
        {errors.cep && <span>Esse campo é necessário...</span>}
        <input type="submit" />
      </form>
    </StyledDivCep>
  );
};

export default MainCep;
