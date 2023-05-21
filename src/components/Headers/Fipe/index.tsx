import { Link } from "react-router-dom";
import { NavFipe } from "./style.ts";

const HeaderFipe = () => {
  return (
    <>
      <NavFipe>
        <nav>
          <p>
            <Link to={"/"}>Home</Link>
          </p>
          <p>
            <Link to={"/consultacep"}>Consultar Cep</Link>
          </p>
          <p>
            <Link to={"/feriados"}>Feriados</Link>
          </p>
          <p>
            <Link to={"/consultaddd"}>Descobrir DDD</Link>
          </p>
          <p>
            <Link to={"/consultacnpj"}>Consultar CNPJ</Link>
          </p>
        </nav>
      </NavFipe>
    </>
  );
};

export default HeaderFipe;
