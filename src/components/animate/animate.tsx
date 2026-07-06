import { ReactNode } from "react";
import { IClassName } from "../../utils/IClassName";
import { motion } from "framer-motion";

interface IAnimate extends IClassName {
  children: ReactNode;
}
function Animate({ id = "", className = "", children }: IAnimate) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: false }}
      className={className}
    >
      {children && children}
    </motion.div>
  );
}

export default Animate;
