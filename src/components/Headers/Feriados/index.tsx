import { Link } from "react-router-dom";
import { NavFeriados } from "./style.ts";

const HeaderFeriados = () => {
  return (
    <>
      <NavFeriados>
        <nav>
          <p>
            <Link to={"/"}>Home</Link>
          </p>
          <p>
            <Link to={"/consultacep"}>Consultar Cep</Link>
          </p>
          <p>
            <Link to={"/consultaddd"}>Descobrir DDD</Link>
          </p>
          <p>
            <Link to={"/consultacnpj"}>Consultar CNPJ</Link>
          </p>
        </nav>
      </NavFeriados>
    </>
  );
};

export default HeaderFeriados;
