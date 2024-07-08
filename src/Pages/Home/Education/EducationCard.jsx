import PropTypes from "prop-types";

const EducationCard = ({ edu }) => {
  return (
    <div className="mb-10 ml-6">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
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
        <p className="opacity-50">{edu.duration}</p>
        <p className="font-medium text-sm opacity-65">{edu.institution}</p>
        <p className="opacity-70 text-xl font-medium">{edu.title}</p>
        <p className="text-sm opacity-65">- {edu.group}</p>
      </section>
    </div>
  );
};

EducationCard.propTypes = {
  edu: PropTypes.shape({
    duration: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationCard;
