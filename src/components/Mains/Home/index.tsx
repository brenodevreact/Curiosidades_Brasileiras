import { Link } from "react-router-dom";
import brasil from "../../../assets/brasil.png";
import { ColorBlue, ColorGreen, ColorYellow, StyledDivHome } from "./style";

const MainHome = () => {
  return (
    <StyledDivHome>
      <div>
        <h2>Descubra mais</h2>
        <h1>
          <ColorBlue>Sobre</ColorBlue>
          <ColorYellow>o</ColorYellow>
          <ColorGreen>Brasil</ColorGreen>
        </h1>
        <h2>Aqui nesse site</h2>

        <p>
          O curiosidades brasileiras é um site onde você pode se informar sobre
          alguns detalhes do Brasil. Você pode encontrar algum CEP, consultar os
          munícipios de algum DDD, ver os Feriados Nacionais de um ano
          específico e ainda verificar o clima da sua região!{" "}
        </p>
        <Link to={"/consultacep"}>
          <button>COMEÇAR</button>
        </Link>
      </div>

      <img src={brasil} alt="Bandeira do Brasil" />
    </StyledDivHome>
  );
};

export default MainHome;
