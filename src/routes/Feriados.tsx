import HeaderFeriados from "../components/Headers/Feriados";
import MainFeriado from "../components/Mains/Feriado";
import { motion } from "framer-motion";

const Feriados = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeaderFeriados />
      <MainFeriado />
    </motion.div>
  );
};

export default Feriados;
