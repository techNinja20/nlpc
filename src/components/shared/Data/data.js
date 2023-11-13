import { FaExclamation } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineQuestionMark } from "react-icons/md";

export const accountDetail = {
  balance: "40000",
  savings: "10000",
}

export const schemeInfos = [
  {
    name: "Coca Cola",
    amount: 10000,
    interestRate: 50,
    maintenance: 500,
    adminFee: 300,
  },
  {
    name: "Amazon",
    amount: 3000,
    interestRate: 20,
    maintenance: 200,
    adminFee: 100,
  },
  {
    name: "Dangote",
    amount: 2000,
    interestRate: 10,
    maintenance: 250,
    adminFee: 50,
  },
  {
    name: "Oando",
    amount: 9000,
    interestRate: 80,
    maintenance: 700,
    adminFee: 190,
  },
  {
    name: "Tesla",
    amount: 7000,
    interestRate: 25,
    maintenance: 450,
    adminFee: 100,
  },
  {
    name: "Real Estate",
    amount: 8500,
    interestRate: 60,
    maintenance: 320,
    adminFee: 310,
  },
];

export const transactionHistory = [
  {
    amount: 3000,
    date: " 09-11-2023",
    type: "Deposit",
    status: "success",
    rep: <GiCheckMark className="text-green" />,
  },
  {
    amount: 600,
    date: " 09-11-2023",
    type: "Interest gain",
    status: "success",
    rep: <GiCheckMark className="text-green" />,
  },
  {
    amount: 1000,
    date: " 09-11-2023",
    type: "Deposit",
    status: "failed",
    rep: <MdOutlineQuestionMark className="text-red " />,
  },
  {
    amount: 12000,
    date: " 10-11-2023",
    type: "Scheme bought",
    status: "success",
    rep: <GiCheckMark className="text-green" />,
  },
  {
    amount: 6000,
    date: " 12-11-2023",
    type: "Scheme bought",
    status: "pending",
    rep: <FaExclamation className="text-yellow " />,
  },
  {
    amount: 500,
    date: " 12-11-2023",
    type: "Interest gain",
    status: "success",
    rep: <GiCheckMark className="text-green" />,
  },
]
