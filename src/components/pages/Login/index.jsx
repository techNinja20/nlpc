import logo from "../../../assets/images/logo.png";
import Label from "../../shared/Label/index";
import Button from "../../shared/Button";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDatas, useOnChange } from "../../shared/Context";
import { Toast } from "../../shared/Toastify/toast";

const Login = () => {
  const Datas = useDatas();
  const onChange = useOnChange();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((isPasswordShown) => !isPasswordShown);
  }

  function handleLogin(e) {
    try {
      e.preventDefault();
      if (!Datas.email || !Datas.password) {
        throw new Error("All the fields are compulsory");
      } 
        navigate("/dashboard");
        Toast(
          `Welcome ${Datas.firstname || Datas.email.replace(/@.*/, "")} `,
          "success"
        );
      
    } catch (error) {
      Toast("Provide necessary fields" || error, "error");
    }
  }

  return (
    <div className="bg-grey flex items-center justify-center font-domine w-full h-screen">
      <div className="bg-white flex flex-col gap-y-4 items-center justify-center  w-[35rem] sm:w-[25rem] h-[25rem] rounded-[0.8rem] shadow-2xl ">
        <div className="w-[10rem] ">
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="space-y-4  ">
            <div>
              <Label labelValue="email" />
              <input
                name="email"
                value={Datas.email}
                onChange={onChange}
                type="text"
                placeholder="my@email.com"
                className={` w-[25rem] sm:w-[23rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block`}
              />
            </div>
            <div>
              <Label labelValue="password" />
              <div className="relative flex ">
                <input
                  name="password"
                  value={Datas.password}
                  onChange={onChange}
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
            <Button
              type="submit"
              text="Login"
              className="w-[25rem] sm:w-[23rem] mt-[1rem]"
            />
          </div>
        </form>
        <h1>
          Don't have an account?{" "}
          <Link to="/auth/sign-up" className="text-green">
            Sign Up
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
