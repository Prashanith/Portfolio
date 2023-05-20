import { motion } from "framer-motion";
import { Animation } from "../../config/animationConfig";

function Logo() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: Animation.delay }}
      className="flex flex-row justify-center items-center text-white"
    >
      <span>
        <img src={"/null.svg"} className="h-[40px]" />
      </span>
      <span>
        <img src={"/logo_loader.svg"} className="h-[40px]" />
      </span>
    </motion.div>
  );
}

export default Logo;
