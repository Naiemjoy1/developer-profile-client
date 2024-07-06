import { useTypewriter } from "react-simple-typewriter";
import bag from "/public/bag-svgrepo-com.svg";
import { PiBagSimpleLight } from "react-icons/pi";

const Typewriter = () => {
  const [typeEffect] = useTypewriter({
    words: ["MERN Stack Developer"],
    loop: true,
    typeSpeed: 200,
    delaySpeed: 500,
  });

  return (
    <div>
      <p className="flex gap-4 items-center">
        <PiBagSimpleLight /> {typeEffect}
      </p>
    </div>
  );
};

export default Typewriter;
