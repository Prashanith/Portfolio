import { motion } from "framer-motion";
import { Animation } from "../../../config/animationConfig";

interface Project {
  title: string;
  logo: string;
  url: string;
  description: string;
}

function ProjectCard({ title, description, url }: Project) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: Animation.delay }}
      className="carousel-item relative my-10 flex aspect-square h-28 flex-col items-center justify-center rounded-lg 
      glass-card p-8 shadow-sm transition-all duration-150 hover:scale-105 hover:shadow-tertiary sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48"
    >
      <div className="mt-2 text-left">
        <h2 className="text-xl font-bold uppercase text-teal-100">{title}</h2>
      </div>
      <div className="mt-2 text-left">
        <p>{description}</p>
      </div>
      <a href={url} className="mt-auto self-end">
        PROJECT URL
      </a>
    </motion.div>
  );
}

export default ProjectCard;

export type { Project };
