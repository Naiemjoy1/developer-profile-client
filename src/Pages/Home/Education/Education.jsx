import { educations } from "/utils/educations.js";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div
      id="education"
      className="container mx-auto lg:w-10/12 justify-center p-6 text-neutral mt-10"
    >
      <p className="text-center uppercase text-3xl font-bold opacity-70">
        Education
      </p>
      <div className="bg-secondary p-12 justify-center shadow-2xl rounded-xl mt-5">
        <div className="relative border-l border-gray-200 dark:border-gray-700 mt-5">
          {educations.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
