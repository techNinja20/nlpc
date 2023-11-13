import reduxLogo from "../../../assets/images/redux.png";
import { useSelector, useDispatch } from "react-redux";
import { addCount, deleteCount, resetCount } from "../../redux/countAction";

const Count = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="bg-grey flex items-center justify-center w-full h-screen">
      <div className="w-[30rem] sm:w-[25rem] h-[15rem] rounded-lg drop-shadow-lg bg-white flex flex-col items-center justify-center gap-y-[1rem] px-[4rem] ">
        <div className="w-[5rem] ">
          <img src={reduxLogo} alt="reduxLogo" />
        </div>
        <div className="flex items-center gap-x-[1rem]">
          <button
            className="bg-red text-white text-center py-[0.5rem] px-[1rem] rounded-[0.5rem] hover:opacity-90"
            disabled={state.numOfItems <= 0 ? true : false}
            onClick={() => {
              dispatch(deleteCount());
            }}
          >
            Decrease
          </button>
          <p className="text-[1.5rem] font-bold ">{state.numOfItems}</p>

          <button
            className="bg-green text-white text-center py-[0.5rem] px-[1rem] rounded-[0.5rem] hover:opacity-90"
            onClick={() => {
              dispatch(addCount());
            }}
          >
            Increase
          </button>
        </div>
        <button
          className="bg-yellow text-white text-center py-[0.5rem] px-[1rem] rounded-[0.5rem] hover:opacity-90"
          onClick={() => {
            dispatch(resetCount());
          }}
        >Reset</button>
      </div>
    </div>
  );
};

export default Count;
