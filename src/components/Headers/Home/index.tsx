import { Link } from "react-router-dom";
import { NavHome } from "./style.ts";

const HeaderHome = () => {
  return (
    <>
      <NavHome>
        <nav>
          <p>
            <Link to={"/consultacep"}>Consultar CEP</Link>
          </p>
          <p>
            <Link to={"/consultaddd"}>Descobrir DDD</Link>
          </p>
          <p>
            <Link to={"/feriados"}>Feriados Nacionais</Link>
          </p>
          <p>
            <Link to={"/consultacnpj"}>Consultar CNPJ</Link>
          </p>
        </nav>
      </NavHome>
    </>
  );
};

export default HeaderHome;
