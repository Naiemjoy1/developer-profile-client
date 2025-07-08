import {
  FaDev,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiBagSimpleLight } from "react-icons/pi";
import { RiMapPin2Line } from "react-icons/ri";
import TextTransitionComponent from "../../../Components/text-transition/texttransition";
import dpImg from "/src/assets/DSC02025.jpg";
import { personalData } from "/utils/personal-data.js";

const Banner = () => {
  return (
    <div
      id="about"
      className="container mx-auto lg:w-10/12 2xl:w-7/12 justify-center p-6 text-neutral relative mt-10"
    >
      <div className="bg-secondary lg:p-12 p-8 justify-center shadow-2xl rounded-xl mt-20">
        <div className="absolute inset-x-0 top-12 flex justify-center">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 lg:w-36 w-28 rounded-full ring-4">
              <img src={dpImg} />
            </div>
          </div>
        </div>
        <div className="text-center lg:mt-16 mt-10">
          <p className="lg:text-3xl uppercase opacity-70">Naiem Hasan</p>
        </div>
        <section className="space-y-4 lg:mt-8 mt-5">
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
                href="/Naiemun_Hasan_Frontend_Developer_Resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <span className="font-thin">Get Resume</span>
              </a>
            </button>
          </section>
        </section>
        <section className="text-primary text-xl flex lg:gap-16 gap-6 md:gap-14 justify-center mt-10">
          <a
            href={personalData.github}
            target="_blank"
            className="hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href={personalData.twitter}
            target="_blank"
            className="hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href={personalData.linkedIn}
            target="_blank"
            className="hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href={personalData.facebook}
            target="_blank"
            className="hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href={personalData.dev}
            target="_blank"
            className="hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer"
            rel="noopener noreferrer"
          >
            <FaDev />
          </a>
          <a
            href="mailto:naiemunhasan.com"
            className="hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <MdEmail />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Banner;
