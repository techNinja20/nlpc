import logo from "../../../assets/images/logo.png";
import Label from "../../shared/Label/index";
import Button from "../../shared/Button";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDatas, useOnChange } from "../../shared/Context";
import { Toast } from "../../shared/Toastify/toast";

const Signup = () => {
  const { firstname, lastname, email, phone, password, confirmpassword } =
    useDatas();
  const onChange = useOnChange();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function togglePassword() {
    setShowPassword((isPasswordShown) => !isPasswordShown);
  }
  function toggleConfirmPassword() {
    setShowConfirmPassword((isPasswordConfirmShown) => !isPasswordConfirmShown);
  }
  function submit(e) {
    try {
      e.preventDefault();
      if (
        !firstname ||
        !lastname ||
        !email ||
        !phone ||
        !password ||
        !confirmpassword ||
        password !== confirmpassword
      ) {
        throw new Error("All the fields are compulsory");
      }
      navigate("/auth/otp");
    } catch (error) {
      Toast("All the fields are compulsory" || error , "error");
    }
  }

  return (
    <div className="bg-grey flex items-center justify-center font-domine w-full min-h-screen">
      <div className="bg-white flex flex-col gap-y-4 items-center justify-center  w-[35rem] sm:w-[25rem] h-[42rem] my-[2rem] rounded-[0.8rem] shadow-2xl ">
        <div className="w-[10rem] ">
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={submit}>
          <div className="space-y-4  ">
            <div>
              <Label labelValue="First name" />
              <input
                name="firstname"
                value={firstname}
                onChange={onChange}
                type="text"
                placeholder="ex. Olawale"
                className={` w-[25rem] sm:w-[23rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block`}
              />
            </div>
            <div>
              <Label labelValue="Last name" />
              <input
                name="lastname"
                value={lastname}
                onChange={onChange}
                type="text"
                placeholder="ex. Olupo"
                className={` w-[25rem] sm:w-[23rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block`}
              />
            </div>
            <div>
              <Label labelValue="Email" />
              <input
                name="email"
                value={email}
                onChange={onChange}
                type="email"
                placeholder="my@email.com"
                className={` w-[25rem] sm:w-[23rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block`}
              />
            </div>
            <div>
              <Label labelValue="Phone number" />
              <input
                name="phone"
                value={phone}
                onChange={onChange}
                type="text"
                placeholder="ex. 08177333492"
                className={` w-[25rem] sm:w-[23rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block`}
              />
            </div>
            <div>
              <Label labelValue="Password" />
              <div className="relative flex ">
                <input
                  name="password"
                  value={password}
                  onChange={onChange}
                  placeholder="*********"
                  type={showPassword ? "text" : "password"}
                  className={` w-[25rem] sm:w-[23rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block`}
                />
                <div
                  className="absolute top-[0.8rem] right-[0.5rem]  cursor-pointer"
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <FaEye className="text-green" />
                  ) : (
                    <FaEyeSlash className="text-green" />
                  )}
                </div>
              </div>
            </div>
            <div>
              <Label labelValue="Confirm Password" />
              <div className="relative flex ">
                <input
                  name="confirmpassword"
                  value={confirmpassword}
                  onChange={onChange}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="*********"
                  className={` w-[25rem] sm:w-[23rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block`}
                />
                <div
                  className="absolute top-[0.8rem] right-[0.5rem]  cursor-pointer"
                  onClick={toggleConfirmPassword}
                >
                  {showPassword ? (
                    <FaEye className="text-green" />
                  ) : (
                    <FaEyeSlash className="text-green" />
                  )}
                </div>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                text=" Sign Up"
                className="w-[25rem] sm:w-[23rem]"
              />
            </div>
          </div>
        </form>
        <h1>
          Already have an account?{" "}
          <Link to="/auth/login" className="text-green">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Signup;
