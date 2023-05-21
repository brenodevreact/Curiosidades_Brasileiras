import { Link } from "react-router-dom";
import { NavDdd } from "./style.ts";

const HeaderDdd = () => {
  return (
    <>
      <NavDdd>
        <nav>
          <p>
            <Link to={"/"}>Home</Link>
          </p>
          <p>
            <Link to={"/consultacep"}>Consultar Cep</Link>
          </p>
          <p>
            <Link to={"/feriados"}>Feriados Nacionais</Link>
          </p>
          <p>
            <Link to={"/consultacnpj"}>Consultar CNPJ</Link>
          </p>
          <p>
            <Link to={"/fipe"}>Tabela FiPE</Link>
          </p>
        </nav>
      </NavDdd>
    </>
  );
};

export default HeaderDdd;
