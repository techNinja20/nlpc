import { PaystackButton } from "react-paystack"
import { Toast } from "../Toastify/toast"
import { useDatas, useOnChange } from "../Context"
import Input from "../Input"

const PayButton = ({ openModal }) => {
  const { email,  amount} = useDatas()
  const onchange = useOnChange()

  function handleOpenModal(e) {
    e.target.id === "modal" && openModal()
  }

  function submit(e) {
    e.preventDefault()
  }

  const publicKey = process.env.REACT_APP_PK_KEY

  const handlePaystackSuccessAction = () => {
    Toast("Payment Successful.", "success")
    
  }

  const componentProps = {
    email: email,
    amount: amount * 100,
    publicKey,
    text: "Fund ",
    onSuccess: () => handlePaystackSuccessAction(),
    onClose: () => Toast("Payment canceled by user.", "warning"),
  }

  return (
    <>
      <div
        onClick={handleOpenModal}
        id="modal"
        className=" fixed inset-0 bg-black bg-opacity-60 text-[#25313CA6]  flex justify-center items-center w-full z-10"
      >
        <div className="bg-white w-[30rem] sm:w-[25rem] h-[15rem] rounded-lg drop-shadow-lg flex flex-col items-center justify-center ">
          <form onSubmit={submit} className="space-y-4">
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={onchange}
              name="email"
              className={` w-[25rem] sm:w-[23rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block`}
            />
            <Input
              type="text"
              name="amount"
              placeholder="amount"
              value={amount}
              onChange={onchange}
            />
            <PaystackButton
              {...componentProps}
              className={`bg-green text-white text-center py-[0.5rem] px-[1rem] rounded-[0.5rem] mt-[2rem] hover:opacity-90`}
        
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default PayButton
