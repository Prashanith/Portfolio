import NavBar from "../../components/navbar/navbar";
import About from "./about/about";
import Contact from "./contact/contact.tsx";
import Footer from "./footer/footer";
import Intro from "./intro/intro";
import Projects from "./projects/projects.tsx";
import Skills from "./skills/skills";

function LandingPage() {
  return (
    <div
      className=" bg-primary normalText"
    >
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
