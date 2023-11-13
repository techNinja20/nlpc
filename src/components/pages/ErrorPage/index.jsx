import React from "react";
import error from "../../../assets/images/errorFourZeroFour.gif";
import Button from "../../shared/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-[0.5rem] bg-white text-black text-center font-semibold font-domine w-full h-screen ">
      <h1 className="text-[2.5rem]">404</h1>
      <div className="w-[30rem] ">
        <img src={error} alt="error" />
      </div>
      <h2 className="text-[1.5rem]">Seems you got lost.</h2>
      <Link to="/auth/login">
        <Button text={"Go to Home"} />
      </Link>
    </div>
  );
};

export default ErrorPage;
