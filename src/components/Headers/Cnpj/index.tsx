import { Link } from "react-router-dom";
import { NavCnpj } from "./style.ts";

const HeaderCnpj = () => {
  return (
    <>
      <NavCnpj>
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
            <Link to={"/fipe"}>Tabela FiPE</Link>
          </p>
        </nav>
      </NavCnpj>
    </>
  );
};

export default HeaderCnpj;
