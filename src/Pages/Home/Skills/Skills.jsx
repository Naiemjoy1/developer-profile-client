import SkillCard from "./SkillCard";
import { skills } from "/utils/skills.js";

const Skills = () => {
  return (
    <div className="container mx-auto w-10/12 justify-center p-6 text-neutral mt-10">
      <p className="text-center uppercase text-3xl font-bold opacity-70">
        Skills
      </p>
      <section className="grid grid-cols-5 text-sm opacity-70">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill}></SkillCard>
        ))}
      </section>
    </div>
  );
};

export default Skills;
