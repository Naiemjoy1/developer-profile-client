import { BiSolidMap } from "react-icons/bi";
import TextTransitionComponent from "../../Components/text-transition/texttransition";
import { PiBagSimpleLight } from "react-icons/pi";
import { MdDownload, MdEmail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import {
  FaDev,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mx-auto w-3/4 justify-center p-6 text-neutral">
      <div className="bg-secondary p-12 justify-center shadow-lg rounded-xl space-y-6">
        <p className="flex gap-2 items-center">
          <PiBagSimpleLight /> <TextTransitionComponent />
        </p>
        <p className="flex items-center gap-2">
          <BiSolidMap />
          <span>Dhaka, Bangladesh</span>{" "}
        </p>
        <p>
          My name is Naiem Hasan. I am a professional and enthusiastic front-end
          developer with a passion for crafting dynamic and responsive web
          applications. I pride myself on being a quick learner with a strong
          self-learning attitude. Exploring new technologies and solving complex
          problems are my driving forces.
        </p>
        <section className="flex gap-2">
          <button className="btn btn-primary rounded-full text-white btn-sm px-4">
            <a href="#contact" className="flex items-center gap-2">
              Get In Touch <RiContactsFill />
            </a>
          </button>
          <button className="btn btn-primary rounded-full text-white btn-sm">
            <a
              href="/MD_Naiemun_Hasan_MERN_STACK_DEVELOPER.pdf"
              download
              className="flex items-center gap-2"
            >
              Get Resume <MdDownload />
            </a>
          </button>
        </section>
        <section className="text-center text-primary text-xl flex gap-20 justify-center">
          <FaGithub />
          <FaTwitter />
          <FaLinkedin />
          <FaFacebookSquare />
          <FaDev />
          <MdEmail />
        </section>
      </div>
    </div>
  );
};

export default Home;
