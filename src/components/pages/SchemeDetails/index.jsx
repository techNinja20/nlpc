import { useParams } from "react-router-dom"
import { schemeInfos } from "../../shared/Data/data"
import { FaTimes, FaDivide, FaMinus, FaPlus } from "react-icons/fa"

const SchemeDetails = () => {
  const { id } = useParams()
  console.log("schemeInfos:", schemeInfos)
  const datas = schemeInfos[id]

  return (
    <div className="bg-grey flex items-center justify-center font-domine w-full h-screen">
      <div className="bg-lightblack text-white flex flex-col gap-y-4 items-center justify-center  w-[35rem] sm:w-[25rem] h-[25rem] rounded-[0.8rem] shadow-2xl ">
        <div className="flex justify-between w-[30rem] ">
          <div className="space-y-5 border-r ">
            <h1>
              <span className="font-bold">Name:</span> {datas.name}
            </h1>
            <h2>
              <span className="font-bold">Amount:</span> &#8358; {datas.amount}{" "}
            </h2>
            <h3>
              <span className="font-bold">Interest Rate:</span> &#8358;{" "}
              {datas.interestRate}
            </h3>
            <h4>
              <span className="font-bold">Maintenance:</span> &#8358;{" "}
              {datas.maintenance}
            </h4>
            <h5>
              <span className="font-bold">AdminFee:</span> &#8358;{" "}
              {datas.adminFee}
            </h5>
          </div>
          <div className=" flex text- font-bold w-[20rem] items-center justify-center gap-x-[0.7rem] ">
            {datas.amount}{" "}
            <FaTimes className="text-lightgreen font-bold" />{" "}
            {datas.interestRate}{" "}
            <FaDivide className="text-red font-bold" /> 100{" "}
            <FaMinus className="text-grey font-bold" />
            {datas.maintenance}{" "}
            <FaPlus className="text-yellow font-bold" />{" "}
            {datas.adminFee}
          </div>
        </div>
        <p className="text-lightgreen text-[2rem]">
          Total Gain ={" "}
          {datas.amount * (datas.interestRate / 100) -
            (datas.maintenance + datas.adminFee)}
        </p>
      </div>
    </div>
  )
}

export default SchemeDetails
