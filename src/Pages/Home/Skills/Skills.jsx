import SkillCard from "./SkillCard";
import { skills } from "/utils/skills.js";

const Skills = () => {
  return (
    <div
      id="skills"
      className="container mx-auto lg:w-10/12 justify-center p-6 text-neutral mt-10"
    >
      <p className="text-center uppercase text-3xl font-bold opacity-70">
        Skills
      </p>
      <section className="grid lg:grid-cols-5 grid-cols-2 text-sm opacity-70 mt-5">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill}></SkillCard>
        ))}
      </section>
    </div>
  );
};

export default Skills;
