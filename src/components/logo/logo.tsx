import { motion } from "framer-motion";
import { Animation } from "../../config/animationConfig";

function Logo() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: Animation.delay }}
      className="flex flex-row items-center justify-center text-white"
    >
      <span>
        <img src={"/null.png"} className="h-[20px]" />
      </span>
      <span>
        <img src={"/infinity.svg"} className="ml-2 h-[40px]" />
      </span>
    </motion.div>
  );
}

export default Logo;
