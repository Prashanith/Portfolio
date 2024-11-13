import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: false }}
      id="about"
      className="pagePadding mx-auto flex flex-col  items-start justify-center py-16 text-left sm:py-28 md:items-center md:text-center"
    >
      <p className="boldText">About Me</p>
      <div className="mt-5 self-center text-base">
        <p className="font-black italic text-xl">
          Greetings fellow humans! I am B.Prashanith, a coding sorcerer who
          dabbles in the mystical arts of full stack development. With my
          wizardly skills, I freelance clients for web/mobile-app solutions.
          Making the User Experience magisterial wherever I work is my passion.
          Improving my wizardry and exploring several things right now.
          <br />I am LINUX User, I use ARCH, BTW
        </p>
      </div>
    </motion.div>
  );
}

export default About;
