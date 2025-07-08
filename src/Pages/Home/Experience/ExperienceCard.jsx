import PropTypes from "prop-types";
import { RiMapPin2Line } from "react-icons/ri";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="mb-10 ml-10">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full dark:ring-gray-900 dark:bg-blue-900">
        <svg
          className="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V6a1 1 0 10-2 0v1H7a1 1 0 000 2h1v1a1 1 0 102 0V9h1a1 1 0 100-2h-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <section className="space-y-2">
        <p className="opacity-50">{experience.period}</p>
        <section className="flex gap-2 items-center">
          <div className="h-4">
            <img
              src={experience.logo}
              className="h-full w-auto rounded-lg"
              alt={`${experience.company} logo`}
            />
          </div>
          <a
            className="font-semibold text-sm opacity-65"
            target="_blank"
            href={experience.link}
          >
            {experience.company}
          </a>
        </section>
        <p className="font-medium text-sm opacity-65 flex gap-2 items-center">
          <span>
            <RiMapPin2Line />
          </span>
          {experience.location}
        </p>
        <p className="opacity-70 text-xl font-medium">{experience.jobTitle}</p>
        <p className="text-sm opacity-65 text-justify">
          {experience.description}
        </p>
      </section>
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    period: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
};

export default ExperienceCard;
