import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";
import { experiencesData } from "/utils/experiencesData.js";

const Home = () => {
  return (
    <div>
      <Banner id="about" />
      <Skills id="skills" />
      {experiencesData.length > 0 && <Experience id="experience" />}
      <Education id="education" />
      <Project id="projects" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
