import { motion } from "framer-motion";
import { Animation } from "../../../config/animationConfig";

interface Skill {
  skill: string;
  logo: string;
}

function SkillCard({ skill, logo }: Skill) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: Animation.delay }}
      className="my-10 relative carousel-item flex flex-col items-center justify-center h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48 aspect-square shadow-sm p-8 bg-primary/50 border-tertiary border rounded-lg"
    >
      <img src={logo} alt="image" className="rounded-xl object-fill w-full h-full p-5" />
      <div className="text-center mt-4">
        <h2 className="font-bold uppercase text-xl text-teal-100">{skill}</h2>
      </div>
    </motion.div>
  );
}

export default SkillCard;

export type { Skill };
