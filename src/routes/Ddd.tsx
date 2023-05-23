import HeaderDdd from "../components/Headers/Ddd";
import MainDDD from "../components/Mains/Ddd";
import { motion } from "framer-motion";

const Ddd = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeaderDdd />
      <MainDDD />
    </motion.div>
  );
};

export default Ddd;
