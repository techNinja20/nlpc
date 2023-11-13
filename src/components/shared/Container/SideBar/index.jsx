import { AiFillSetting } from "react-icons/ai";
import { PiPowerFill } from "react-icons/pi";
import { RiProfileFill, RiDashboardFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import logoTwo from "../../../../assets/images/logoTwo.png";
import { useDatas } from "../../Context";

const SideBar = () => {
  const { firstname, lastname, email } = useDatas();
  return (
    <div className="flex flex-col items-center gap-y-[5rem] bg-darkgreen opacity-90 w-[19%] md:w-[23%] min-h-screen ">
      <div className="w-[10rem] sm:w-[3rem] mt-[2rem] mx-auto ">
        <img src={logo} alt="logo" className="sm:hidden" />
        <img src={logoTwo} alt="logo" className="lg:hidden md:hidden" />
      </div>
      <div className="space-y-2 ">
        <div className="flex bg-lightgreen items-center justify-center w-[7rem] sm:w-[4rem] h-[7rem] sm:h-[4rem] rounded-full ">
          <h1>
            {firstname.charAt(0).toUpperCase() || email.charAt(0).toUpperCase()}{" "}
            {lastname.charAt(0).toUpperCase()}
          </h1>
        </div>
        <h2 className="text-center sm:hidden">
          {firstname.toUpperCase() || email.replace(/@.*/, "").toUpperCase()}
          {lastname}
        </h2>
      </div>

      <div className="space-y-7">
        <Link to="/dashboard" className="flex gap-x-2 items-center">
          <RiDashboardFill />
          <p className="sm:hidden">Dashboard</p>
        </Link>
        <Link className="flex gap-x-2 items-center">
          <RiProfileFill />
          <p className="sm:hidden">Profile</p>
        </Link>
        <Link className="flex gap-x-2 items-center">
          <AiFillSetting />
          <p className="sm:hidden">Settings</p>
        </Link>
        <Link to="/auth/login" className="flex gap-x-2 items-center">
          <PiPowerFill />
          <p className="sm:hidden">Sign Out</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
