import { Link } from "react-router-dom";
import { NavCep } from "./style.ts";

const HeaderCep = () => {
  return (
    <>
      <NavCep>
        <nav>
          <p>
            <Link to={"/"}>Home</Link>
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
      </NavCep>
    </>
  );
};

export default HeaderCep;
