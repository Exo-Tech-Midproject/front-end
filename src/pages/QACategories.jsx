
import QACategoriesSection from "../containers/QACategoriesSection";
import { motion } from "framer-motion"

const QACategories = () => {
  return (
    <motion.div 
    initial={{width:0}}
    exit={{x:window.innerWidth}}
    animate={{width:"100%"}}
    >
      <QACategoriesSection  />
    </motion.div>
  );
};

export default QACategories;
