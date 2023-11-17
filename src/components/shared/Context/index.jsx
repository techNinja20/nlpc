import { createContext, useContext, useState } from "react"

const DataDetails = createContext()
const OnChangeDetails = createContext()
const PushNewShcema = createContext()
const SetPushNewShcema = createContext()

export function useDatas() {
  return useContext(DataDetails)
}
export function useOnChange() {
  return useContext(OnChangeDetails)
}
export function usePushIn() {
  return useContext(PushNewShcema)
}
export function useSetPushIn() {
  return useContext(SetPushNewShcema)
}
const GlobalContext = ({ children }) => {
  const [datas, setDatas] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    amount: "",
    amountInput: "",
    startDate: "",
    endDate: "",
  })
  const [pushIn, setPushIn] = useState([])

  function onChangeValue(e) {
    setDatas({ ...datas, [e.target.name]: e.target.value })
  }
  return (
    <DataDetails.Provider value={datas}>
      <OnChangeDetails.Provider value={onChangeValue}>
        <PushNewShcema.Provider value={pushIn}>
          <SetPushNewShcema.Provider value={setPushIn}>
            {children}
          </SetPushNewShcema.Provider>
        </PushNewShcema.Provider>
      </OnChangeDetails.Provider>
    </DataDetails.Provider>
  )
}

export default GlobalContext
