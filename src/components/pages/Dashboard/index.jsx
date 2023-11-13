import Account from "../../shared/Account";
import Cards from "../../shared/Cards";
import Chart from "../../shared/Chart";
import Container from "../../shared/Container";
import TransactionHistory from "../../shared/Transaction";
import { schemeInfos, transactionHistory } from "../../shared/Data/data";
import { useState } from "react";

const Dashboard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    function openModal() {
      setIsModalOpen((modalOpen) => !modalOpen);
    }
    function handleOpenModal(e) {
      e.target.id === "modal" && openModal();
  }
  
  return (
    <Container>
      <div className="bg-grey text-black w-[81%] pt-[5rem] px-[1rem] pb-[5rem] space-y-[2rem] ">
        <h1 className="text-[1.5rem] text-lightgreen border-b border-green  pb-4 ">
          Overview
        </h1>

        <div className="flex justify-between">
          <Account />
          <div className="w-full h-[20rem] px-[0.5rem] ">
            <Chart />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-y-[1rem]">
          {schemeInfos.map((scheme, i) => (
            <Cards key={i} {...scheme} />
          ))}
        </div>

        <table className="w-full  text-center " id="table">
          <thead className="border-b ">
            <tr className=" ">
              <th>Amount</th>
              <th>Date</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          {transactionHistory.map((transaction, i) => (
            <TransactionHistory key={i} {...transaction} />
          ))}
        </table>
      </div>

      {isModalOpen && (
        <div
          onClick={handleOpenModal}
          id="modal"
          className=" fixed inset-0 bg-black bg-opacity-60 text-[#25313CA6]  flex justify-center items-center w-full z-10"
        >
          <div className="bg-white w-[30rem] h-[15rem] rounded-lg drop-shadow-lg flex flex-col items-center justify-center ">
            {schemeInfos.map((schemeInfo, index) => (
              <div
                key={index}
                className={`w-[25rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block`}
              >
                <h1 className="text-grey-500 ">
                  {schemeInfo.amount * (schemeInfo.interestRate / 100) -
                    (schemeInfo.interestRate + schemeInfo.adminFee)}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Dashboard;
