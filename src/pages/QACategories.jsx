
import QACategoriesSection from "../containers/QACategoriesSection";
import { motion } from "framer-motion"

const QACategories = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.2 }}
    >
      <QACategoriesSection />
    </motion.div>
  );
};

export default QACategories;
