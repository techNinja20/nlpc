import { PaystackButton } from "react-paystack";
import { Toast } from "../Toastify/toast";
import { useState } from "react";
import {useDatas} from '../Context'

const PayButton = ({ text, icon, openModal }) => {
  const {email} =useDatas()
  const [amount, setAmount] = useState("");

  function handleOpenModal(e) {
    e.target.id === "modal" && openModal();
  }

  function submit(e) {
    e.preventDefault();
  }

  const publicKey = process.env.REACT_APP_PK_KEY;

  const handlePaystackSuccessAction = () => {};

  const componentProps = {
    email: email,
    amount: amount * 10,
    publicKey,
    text: "Fund ",
    onSuccess: () => handlePaystackSuccessAction(),
    onClose: () => Toast("Payment canceled by user.", "warning"),
  };

  return (
    <>
      <div
        onClick={handleOpenModal}
        id="modal"
        className=" fixed inset-0 bg-black bg-opacity-60 text-[#25313CA6]  flex justify-center items-center w-full z-10"
      >
        <div className="bg-white w-[30rem] h-[15rem] rounded-lg drop-shadow-lg flex flex-col items-center justify-center ">
          <form onSubmit={submit}>
            <input
              type="email"
              placeholder="email"
              value={email}
              className={` w-[25rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block`}
            />
            <input
              type="text"
              placeholder="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={` w-[25rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] mt-[2rem] outline-none block`}
            />
            <PaystackButton
              {...componentProps}
              className={`bg-green text-white text-center py-[0.5rem] px-[1rem] rounded-[0.5rem] mt-[2rem] hover:opacity-90`}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PayButton;
