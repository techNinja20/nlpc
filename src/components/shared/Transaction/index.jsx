
const TransactionHistory = ({ amount, date, type, status,rep }) => {
  return (
    <tbody className="border-b h-[3rem]">
      <tr>
        <td>&#8358;{amount}</td>
        <td>{date}</td>
        <td>{type}</td>
        <td>{status}</td>
        <td>{rep}</td>
      </tr>
    </tbody>
  );
};

export default TransactionHistory;
