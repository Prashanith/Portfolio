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
      className="glass-card carousel-item relative my-10 flex aspect-square h-28 flex-col items-center justify-center rounded-lg
       border-[1pt] p-8 shadow-sm transition-all duration-150 hover:scale-105 hover:shadow-tertiary 
       sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48"
    >
      <img
        src={logo}
        alt="image"
        className="h-[90%] w-full rounded-xl object-contain p-3"
      />
      <div className="h-[10%] text-center">
        <h2 className="text-xl font-bold uppercase text-teal-100">{skill}</h2>
      </div>
    </motion.div>
  );
}

export default SkillCard;

export type { Skill };
