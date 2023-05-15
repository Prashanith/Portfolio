import { motion } from "framer-motion";
import NavBar from "../../components/navbar/navbar";
import About from "./about/about";
import Contact from "./contact/contact.tsx";
import Footer from "./footer/footer";
import Intro from "./intro/intro";
// import Projects from "./projects/projects.tsx";
import Skills from "./skills/skills";

function LandingPage() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{
        stiffness: 130,
        delay: 0,
        when: "beforeChildren",
        staggerChildren: 0.8,
      }}
      className=" bg-primary"
    >
      <NavBar />
      <Intro />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default LandingPage;
