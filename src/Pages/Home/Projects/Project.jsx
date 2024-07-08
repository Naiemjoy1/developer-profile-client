import ProjectCard from "./ProjectCard";
import { Projects } from "/utils/Projects";

const Project = () => {
  return (
    <div
      id="projects"
      className="container mx-auto lg:w-10/12 justify-center p-6 text-neutral mt-10"
    >
      <p className="text-center uppercase text-3xl font-bold opacity-70">
        my projects
      </p>
      <div className="mt-5 grid lg:grid-cols-3 justify-center gap-8 ">
        {Projects.map((project, index) => (
          <ProjectCard key={index} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Project;
