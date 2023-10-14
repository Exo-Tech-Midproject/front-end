
import LoginSection from "../containers/LoginSection";
import { motion } from "framer-motion"
const Login = () => {
  return (
    <motion.div
    initial={{width:0}}
    exit={{x:window.innerWidth}}
    animate={{width:"100%"}}>
      <LoginSection  />
    </motion.div>
  );
};

export default Login;
