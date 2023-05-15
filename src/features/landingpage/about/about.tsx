import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: false }}
      id="about"
      className="py-16 sm:py-28 mx-auto text-left  md:text-center flex flex-col justify-center md:items-center items-start pagePadding"
    >
      <p className="boldText">About Me</p>
      <div className="mt-5 self-center">
        <p className="italic font-black">
          I am B Prashanith,a Full Stack Developer and a part time freelancer.
          Simply putting, I believe in the process. Working on improving the
          user experience wherever I work is my passion. I also play a lot of
          sports like Football, Badminton and Cricket. Let me know if you are a
          Barcelona Fan 😉
          <br />I am LINUX User, I use ARCH, BTW
        </p>
      </div>
    </motion.div>
  );
}

export default About;
