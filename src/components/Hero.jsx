import deskHero from "../assets/images/bg-boost-desktop.svg";
import mobHero from "../assets/images/bg-boost-mobile.svg";
import illustration from "../assets/images/illustration-working.svg";
import UrlForm from "./UrlForm";
const Hero = () => {
  return (
    <div className="md:py-20 md:pl-20 mb-32 md:mb-5 mt-20   max-w-screen h-full overflow-hidden ">
      <div className=" flex flex-col md:flex-row-reverse  justify-between items-center  ">
        <div className="flex-initial ">
          <img src={illustration} alt="" className="translate-x-10" />
        </div>
        <div className="md:text-left text-center ">
          <h1 className="text-4xl md:text-7xl  font-bold py-4 px-4">
            More than just shorter links
          </h1>
          <p className="text-xl px-4 lg:w-2/3">
            Build your brand’s recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="bg-Cyan px-9 py-3 m-4 font-semi-bold text-xl  text-white rounded-full ">
            Get Started
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
