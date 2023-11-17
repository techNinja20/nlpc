import banner from "../../../assets/images/banner.jpg"
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "../../shared/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Landing = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" w-full h-screen">
      <nav className="flex items-center justify-between w-full  py-[0.5rem] px-[5rem] md:px-[1rem] sm:px-[1rem] flex-wrap">
        <div className="w-[10rem] ">
          <img src={logo} alt="logo" />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
          {isOpen ? (
            <AiOutlineClose className="hidden sm:block w-[2.5rem] h-[2.5rem]" />
          ) : (
            <AiOutlineMenu className="hidden sm:block w-[2.5rem] h-[2.5rem]" />
          )}
        </button>

        <div
          className={`${
            isOpen ? "block " : "hidden"
          } w-full lg:flex md:flex  lg:items-center md:items-center md:w-auto lg:gap-x-2 md:gap-x-2 lg:w-auto sm:space-y-[2rem] `}
        >
          <Link to="/auth/sign-up"  >
            <Button text="Sign Up" className="bg-lightgreen block w-[10rem] mt-[2rem]" />
          </Link>
          <Link to="/auth/login">
            <Button text="Login" className="block mt-[2rem]" />
          </Link>
        </div>
      </nav>
      <img src={banner} alt="banner" />
    </div>
  );
};

export default Landing;
