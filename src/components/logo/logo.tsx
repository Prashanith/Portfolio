import { motion } from "framer-motion";
import { Animation } from "../../config/animationConfig";

function Logo() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0, }}
      transition={{ delay: Animation.delay}}
      className="flex flex-row justify-center items-center text-white"
    >
      <span className="text-[20px]">DEV</span>
      <span>
        <img src={"/logo_loader.svg"} className="h-[40px]" />
      </span>
      <span className="text-[20px]">7</span>
    </motion.div>
  );
}

export default Logo;
