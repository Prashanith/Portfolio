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
      className=" md:w-88 carousel-item relative flex h-40 w-48 flex-col items-start justify-start rounded-lg bg-secondary p-8 shadow-xl md:h-52"
    >
      <div className="mt-2 text-left">
        <h2 className="text-xl font-bold uppercase text-teal-100">{title}</h2>
      </div>
      <div className="text-left mt-2">
        <p>{description}</p>
      </div>
      <a href={url} className="self-end mt-auto">PROJECT URL</a>
    </motion.div>
  );
}

export default ProjectCard;

export type { Project };
