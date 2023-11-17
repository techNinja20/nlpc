import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import PayButton from "../Payment";
import { Link } from "react-router-dom";
import { useDatas } from "../Context";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { amount } = useDatas()
  

  function openModal() {
    setShowModal(!showModal);
  }

  function handleOpen() {
    setIsOpen((open) => !open);
  }
  return (
    <>
      <div className="space-y-1">
        <div className="flex flex-col p-[1rem] gap-y-[1.5rem] text-white text-[1rem] bg-lightblack w-[18rem] h-[7rem] rounded-t-xl drop-shadow-lg ">
          <h1>Wallet Balance</h1>

          <div className="flex justify-between items-center">
            <p className="w-[15rem] ">
              &#8358;{isOpen ? amount  || 0: "*****"}
            </p>
            <div className="cursor-pointer" onClick={handleOpen}>
              {isOpen ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-white  w-[18rem] h-[4rem] px-[1rem] bg-lightblack p-4 rounded-b-xl">
          <div className="flex flex-col items-center">
            <div
              onClick={openModal}
              className="flex flex-col items-center cursor-pointer"
            >
              <MdAccountBalance className="text-[2rem] text-white " />
              <p className="text-[0.8rem]">Fund Wallet</p>
            </div>
          </div>
          <Link to="" className="flex flex-col items-center">
            <BiMoneyWithdraw className="text-[2rem] text-white " />
            <p className="text-[0.8rem]">Withdraw</p>
          </Link>
          <a href="#table" className="flex flex-col items-center">
            <AiOutlineTransaction className="text-[2rem] text-white " />
            <p className="text-[0.8rem]">View Transaction</p>
          </a>
        </div>
      </div>
      {showModal && <PayButton openModal={openModal} />}
    </>
  );
};

export default Account;
