import HeaderHome from "../components/Headers/Home";
import MainHome from "../components/Mains/Home";
import { Main } from "../globalStyle";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeaderHome />
      <Main>
        <MainHome />
      </Main>
    </motion.div>
  );
};

export default Home;
