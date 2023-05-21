import HeaderHome from "../components/Headers/Home";
import MainHome from "../components/Mains/Home";
import { Main } from "../globalStyle";

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <Main>
        <MainHome />
      </Main>
    </div>
  );
};

export default Home;
