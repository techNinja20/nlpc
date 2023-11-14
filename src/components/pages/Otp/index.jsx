import { useState } from "react";
import logo from "../../../assets/images/logo.png";
import Button from "../../shared/Button";
import OtpInput from "react-otp-input";
import {  useNavigate } from "react-router-dom";
import { Toast } from "../../shared/Toastify/toast";
import { useDatas } from "../../shared/Context";

const Otp = () => {
  const { firstname } = useDatas()
  const [otp, setOtp] = useState("");

  const navigate = useNavigate()
    function handleOtpVerify(e) {
    e.preventDefault();
      Toast("Your Otp has successfully been verified", "success");
      navigate('/auth/login')
  }
  return (
    <div className="bg-grey flex items-center justify-center font-domine w-full h-screen">
      <div className="bg-white flex flex-col gap-y-4 items-center justify-center  w-[35rem] sm:w-[25rem] h-[25rem] rounded-[0.8rem] shadow-2xl ">
        <div className="w-[10rem] ">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-center w-[20rem] ">
          Hi {firstname}, Kindly check your email/ phone for otp verification
        </h1>
        <form>
          <div className="space-y-6  ">
            <div className="flex justify-center mt-[1.5rem]">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputStyle={{
                  border: "1px solid grey",
                  width: "3rem",
                  height: "3rem",
                }}
                containerStyle={{ display: "flex", gap: "1rem" }}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <Button
              type="submit"
              text="Send Otp"
              className="w-[25rem] sm:w-[23rem]"
              onClick={handleOtpVerify}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otp;
