import HeaderCnpj from "../components/Headers/Cnpj";
import MainCnpj from "../components/Mains/Cnpj";
import { motion } from "framer-motion";

const Cnpj = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeaderCnpj />
      <MainCnpj />
    </motion.div>
  );
};

export default Cnpj;
