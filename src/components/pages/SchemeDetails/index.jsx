import { useNavigate, useParams } from "react-router-dom"
import Input from "../../shared/Input"
import {
  useDatas,
  useOnChange,
  usePushIn,
  useSetPushIn,
} from "../../shared/Context"
import { schemeInfos } from "../../shared/Data/data"
import Button from "../../shared/Button"
import { Toast } from "../../shared/Toastify/toast"
import Label from "../../shared/Label"

const SchemeDetails = () => {
  const { id } = useParams()
  const schemeData = schemeInfos[id]
  const { amount, amountInput, startDate, endDate } = useDatas()
  const changeValue = useOnChange()

  const pushIn = usePushIn()
  const setPushIn = useSetPushIn()

  const redirect = useNavigate()
  const start_Date = new Date(startDate)
  const end_Date = new Date(endDate)
  let timeDifference = end_Date.getTime() - start_Date.getTime()
  let daysDifference = timeDifference / (1000 * 3600 * 24)
  let total =
    amountInput * (schemeData.interestRate / 100) * daysDifference -
    (schemeData.maintenance + schemeData.adminFee)

  function handleSubmit(e) {
    e.preventDefault()
    if (startDate > endDate) {
      Toast("Please provide correct date", "warning")
    }else if (
      amountInput < schemeData.minAmount ||
      amountInput > schemeData.maxAmount
    ) {
      Toast(
        `You can only buy shares within #${schemeData.minAmount} to #${schemeData.maxAmount}`,
        "info"
      )
    } 
    else if (amountInput > amount) {
      Toast("Insufficient wallet balance", "error")
    } else if (!amountInput || !startDate || !endDate) {
      Toast("All fields must be inputed", "info")
    } else {
      redirect("/dashboard")
      Toast("You have successfully purchased a share", "success")
      setPushIn([
        ...pushIn,
        {
          amountInput: amountInput,
          startDate: startDate,
          endDate: endDate,
          name: schemeData.name,
          interesrRate: total,
        },
      ])
    }
  }

  return (
    <div className="bg-white flex items-center justify-center font-domine w-full h-screen my-[3rem]">
      <div className="bg-lightblack text-white flex flex-col gap-y-4 items-center justify-center  w-[35rem] sm:w-[25rem]  py-[1rem] rounded-[0.8rem] shadow-2xl ">
        <form className="space-y-[1rem]">
          <div className="text-white">
            <Label labelValue="amount" htmlFor="amountInput" />
            <Input
              type="number"
              name="amountInput"
              value={amountInput}
              onChange={changeValue}
              placeholder="amount"
              className="text-black"
            />
          </div>
          <div className="text-white">
            <Label labelValue="Start Date" htmlFor="startDate" />
            <Input
              type="date"
              name="startDate"
              value={startDate}
              onChange={changeValue}
              className="text-black"
            />
          </div>
          <div>
            <Label labelValue="How Long" htmlFor="endDate" />
            <Input
              type="date"
              name="endDate"
              value={endDate}
              onChange={changeValue}
              placeholder="amount"
              className="text-black"
            />
          </div>

          <div className="flex justify-between">
            <Button text="Submit" type="submit" onClick={handleSubmit} />
            <Button
              text="Cancel"
              className="bg-red"
              type="button"
              onClick={() => redirect("/dashboard")}
            />
          </div>
        </form>
        <div className="w-[25rem] sm:w-[23rem] space-y-[1rem] ">
          <p>Amount Paid: &#8358;{amountInput || 0}</p>
          <p>Interest Rate: {schemeData.interestRate}%</p>
          <p>Number Of Days: {daysDifference || 0} days</p>
          <p>Mainenance: &#8358;{schemeData.maintenance}</p>
          <p>Admin Fee: &#8358;{schemeData.adminFee}</p>

          <div className="flex flex-col items-center">
            <p>Interest Rate:</p>
            <p>{total || 0}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchemeDetails
