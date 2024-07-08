import { PiBagSimpleLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import { personalData } from "/utils/personal-data.js";
import {
  FaDev,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import dpImg from "/src/assets/DSC02025.jpg";
import TextTransitionComponent from "../../../Components/text-transition/texttransition";

const Banner = () => {
  return (
    <div
      id="about"
      className="container mx-auto w-10/12 justify-center p-6 text-neutral relative mt-10"
    >
      <div className="bg-secondary p-12 justify-center shadow-2xl rounded-xl mt-20">
        <div className="absolute inset-x-0 top-12 flex justify-center">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-36 rounded-full ring-4">
              <img src={dpImg} />
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <p className="text-3xl uppercase opacity-70">Naiem Hasan</p>
        </div>
        <section className="space-y-4 mt-8">
          <p className="flex gap-2 items-center">
            <PiBagSimpleLight /> <TextTransitionComponent />
          </p>
          <p className="flex items-center gap-2">
            <RiMapPin2Line />
            <span>Dhaka, Bangladesh</span>
          </p>
          <p className=" text-sm opacity-70">
            Dedicated and passionate front-end developer specializing in
            creating dynamic and responsive web applications. With a Bachelor’s
            degree in Computer Science from American International University -
            Bangladesh (AIUB), I am committed to continuous learning and excel
            in adapting to new technologies. My strong problem-solving skills
            and enthusiasm for tackling complex challenges drive my professional
            growth and success.
          </p>
          <section className="flex gap-2 ">
            <button className="btn btn-primary rounded-full text-white btn-sm px-4">
              <a href="#contact" className="flex items-center gap-2">
                <span className="font-thin">Get In Touch</span>
              </a>
            </button>
            <button className="btn btn-primary rounded-full text-white btn-sm">
              <a
                href="/MD_Naiemun_Hasan_MERN_STACK_DEVELOPER.pdf"
                download
                className="flex items-center gap-2"
              >
                <span className="font-thin">Get Resume</span>
              </a>
            </button>
          </section>
        </section>
        <section className="text-center text-primary text-xl flex gap-16 justify-center mt-10">
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
          <a href={personalData.dev} target="_blank" rel="noopener noreferrer">
            <FaDev />
          </a>
          <a href="mailto:naiemunhasan.com">
            <MdEmail />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Banner;
