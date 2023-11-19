import { Link } from "react-router-dom";

const Cards = ({
  className,
  name,
  minAmount,
  maxAmount,
  interestRate,
  maintenance,
  adminFee,
  index,
}) => {
  return (
    <>
      <Link
        to={index}
        className={`grid grid-cols-2  text-white w-[17rem] md:w-[18rem] sm:w-[19rem] h-[13rem] p-[2rem] rounded-xl drop-shadow-xl bg-greyTwo `}
      >
        <div className="flex flex-col gap-y-[0.2rem] justify-center items-center border-r border-b border-gray-300">
          <h1 className="text-grey-500 ">{name}</h1>
          <p className="text-[0.8rem]"> Min: &#8358;{minAmount}</p>
          <p className="text-[0.8rem]"> Max: &#8358;{maxAmount}</p>
        </div>
        <div className="flex flex-col gap-y-[0.2rem] justify-center items-center border-b border-gray-300">
          <h2>Interest Rate</h2>
          <p className="text-grey-500 ">{interestRate}%</p>
        </div>
        <div className="flex flex-col gap-y-[0.2rem] justify-center items-center border-r border-gray-300">
          <h3>Maintenance</h3>
          <p className="text-grey-500 ">&#8358; {maintenance}</p>
        </div>
        <div className="flex flex-col gap-y-[0.2rem] justify-center items-center">
          <h4>Admin Fee</h4>
          <p className="text-grey-500 ">&#8358; {adminFee}</p>
        </div>
      </Link>
    </>
  );
};

export default Cards;
