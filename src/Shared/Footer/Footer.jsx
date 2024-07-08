import {
  FaDev,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { personalData } from "/utils/personal-data.js";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center py-6">
        <aside className=" space-y-2">
          <section className="text-center text-primary text-sm flex gap-10 justify-center mt-10">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={personalData.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalData.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href={personalData.dev}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDev />
            </a>
            <a href="mailto:naiemunhasan.com">
              <MdEmail />
            </a>
          </section>
          <p className="opacity-55">
            © {new Date().getFullYear()} - Naiem Hasan
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
