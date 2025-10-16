import { motion } from "framer-motion";
import { Animation } from "../../../../config/animationConfig";

interface ISportCard {
  title: string;
  description: string;
  image: string;
  invert: boolean;
}

function SportCard({ title, description, image }: ISportCard) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: false }}
      id="about"
      className={`pagePadding mx-auto flex flex-col items-start justify-start space-y-10 py-16 sm:py-28  lg:flex-row lg:space-x-10 `}
    >
      <motion.img
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: Animation.delay }}
        src={image}
        className="w-full lg:w-1/2"
      />
      <motion.div
        className={`flex w-full flex-col items-start justify-start text-left lg:w-1/2`}
      >
        <h2 className={`boldText mb-4`}>{title}</h2>
        <p className={`whitespace-pre-line text-base`}>{description}</p>
      </motion.div>
    </motion.div>
  );
}

export default SportCard;
