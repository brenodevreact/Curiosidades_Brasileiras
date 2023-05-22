import HeaderCep from "../components/Headers/Cep";
import { motion } from "framer-motion";
import MainCep from "../components/Mains/Cep";

const Cep = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeaderCep />
      <MainCep />
    </motion.div>
  );
};

export default Cep;
