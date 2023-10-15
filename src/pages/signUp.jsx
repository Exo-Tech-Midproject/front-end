import SignupSection from "../containers/SignupSection"
import { motion } from "framer-motion"

const Signup = () => {
  return (
    <motion.div
    initial={{width:0}}
    exit={{x:window.innerWidth}}
    animate={{width:"100%"}}>
      <SignupSection  />
    </motion.div>
  );
};

export default Signup;
