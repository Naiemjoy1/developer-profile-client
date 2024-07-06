import { BiSolidMap } from "react-icons/bi";
import Typewriter from "../../Components/Typewriter/Typewriter";

const Home = () => {
  return (
    <div className="container mx-auto w-3/4 justify-center p-6">
      <div className="bg-secondary p-12 justify-center shadow-lg rounded-xl">
        <Typewriter></Typewriter>
        <p className="flex items-center gap-4">
          <BiSolidMap />
          <span>Dhaka, Bangladesh</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
