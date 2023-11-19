import { FaExclamation } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineQuestionMark } from "react-icons/md";

export const schemeInfos = [
  {
    name: "Coca Cola",
    minAmount: 10000,
    maxAmount: 25000,
    interestRate: 5,
    maintenance: 500,
    adminFee: 300,
  },
  {
    name: "Amazon",
    minAmount: 3000,
    maxAmount: 6000,
    interestRate: 8,
    maintenance: 200,
    adminFee: 100,
  },
  {
    name: "Dangote",
    minAmount: 2000,
    maxAmount: 5000,
    interestRate: 16,
    maintenance: 250,
    adminFee: 50,
  },
  {
    name: "Oando",
    minAmount: 9000,
    maxAmount: 14500,
    interestRate: 10,
    maintenance: 700,
    adminFee: 190,
  },
  {
    name: "Tesla",
    minAmount: 7000,
    maxAmount: 16000,
    interestRate: 7,
    maintenance: 450,
    adminFee: 100,
  },
  {
    name: "Real Estate",
    minAmount: 8500,
    maxAmount: 20000,
    interestRate: 6,
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
