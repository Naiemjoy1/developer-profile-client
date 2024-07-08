import ExperienceCard from "./ExperienceCard";
import { experiencesData } from "/utils/experiencesData.js";

const Experience = () => {
  return (
    <div
      id="experience"
      className="container mx-auto lg:w-10/12 2xl:w-7/12 justify-center p-6 text-neutral mt-10"
    >
      <p className="text-center uppercase text-3xl font-bold opacity-70">
        experience
      </p>
      <div className="bg-secondary p-12 justify-center shadow-2xl rounded-xl mt-5">
        <div className="relative border-l border-gray-200 dark:border-gray-700 mt-5">
          {experiencesData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
