import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner id="about" />
      <Skills id="skills" />
      <Education id="education" />
      <Project id="projects"></Project>
      <Contact id="contact" />
    </div>
  );
};

export default Home;
