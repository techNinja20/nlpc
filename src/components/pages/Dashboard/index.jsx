import Account from "../../shared/Account"
import Cards from "../../shared/Cards"
import Chart from "../../shared/Chart"
import Container from "../../shared/Container"
import TransactionHistory from "../../shared/Transaction"
import { schemeInfos, transactionHistory } from "../../shared/Data/data"
import { usePushIn } from "../../shared/Context"
import SchemeCards from "../../shared/SchemeCards"
import Empty from "../../shared/EmptySchemeCard"

const Dashboard = () => {

  const pushIn = usePushIn()
  
  return (
    <Container>
      <div className="bg-grey text-black w-[81%] pt-[5rem] px-[1rem]  pb-[5rem] space-y-[2rem] ">
        <div className="text-[1.5rem] text-lightgreen border-b border-green  pb-4 ">
          <h1>Shares Bought</h1>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-[2rem]" >
          {
            pushIn.length === 0 ? <Empty/> :             
              pushIn.map((push,i)=>(<SchemeCards {...push} key={i} />))
            
            }

          </div>

          
        </div>

        <div className="flex md:flex-col sm:flex-col gap-y-[1rem] justify-between">
          <Account />
          <div className="w-full h-[20rem] px-[0.5rem] ">
            <Chart />
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-[1rem]">
          {schemeInfos.map((scheme, i) => (
            <Cards key={i} {...scheme} index={`/Scheme-details/${i}`}  />
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
    </Container>
  )
}

export default Dashboard
