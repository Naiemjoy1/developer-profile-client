import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="transition-all duration-500 m-1 rounded-lg group relative hover:scale-[1.10] cursor-pointer">
      <div className="bg-secondary shadow-2xl rounded-xl text-center py-6 px-6 space-y-4 transition-all duration-500">
        <p className="text-sm">{project.name}</p>
        <div className="h-32 flex justify-center">
          <img
            src={project.img}
            className="h-full w-auto rounded-lg"
            alt={project.name}
          />
        </div>
        <p className="text-sm text-left">{`${project.description.slice(
          0,
          100
        )}...`}</p>
        <div className="overflow-hidden">
          <ul className="flex flex-wrap gap-2 max-w-full">
            <li className="text-sm font-semibold">Tools:</li>
            {project.tools.map((tool, toolIndex) => (
              <li
                className="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
                key={toolIndex}
              >
                &quot;{tool}&quot;
              </li>
            ))}
          </ul>
        </div>
        <section className="text-left text-sm flex gap-2">
          <p className="font-semibold">Links:</p>
          <a href={project.links.live} target="_blank">
            Live
          </a>
          <a href={project.links.client} target="_blank">
            client
          </a>
          <a href={project.links.server} target="_blank">
            server
          </a>
        </section>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.shape({
      live: PropTypes.string.isRequired,
      client: PropTypes.string,
      server: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProjectCard;
