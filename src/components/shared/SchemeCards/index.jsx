const SchemeCards = ({ amountInput, interesrRate, endDate, name, total }) => {
  return (
    <div className="flex flex-col justify-between text-black gap-y-[1rem] p-[1rem] text-[1rem]  w-[25rem] md:w-[18rem] sm:w-[19rem] h-[9rem] md:h-[12rem] sm:h-[12rem] border rounded-lg bg-white drop-shadow-lg  ">
      <h1 className="text-center font-bold">Name: {name}</h1>
      <div className="flex justify-between">
        <p>Amount: &#8358;{amountInput}</p>
        <p>Total: &#8358;{total}</p>
      </div>
      <div className="flex sm:flex-col md:flex-col justify-between">
        <p>Interest Rate: {interesrRate}</p>
        <p>How Long: {endDate}</p>
      </div>
    </div>
  )
}

export default SchemeCards
