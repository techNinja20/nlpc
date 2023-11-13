import { createContext, useContext, useState } from "react";


const DataDetails = createContext()
const OnChangeDetails = createContext()


export function useDatas() {
  return useContext(DataDetails);
}
export function useOnChange() {
  return useContext(OnChangeDetails);
}

const GlobalContext = ({ children }) => {
  
  const [datas, setDatas] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword:"",
  });

  function onChangeValue(e) {

    setDatas({...datas, [e.target.name]: e.target.value})
  }
  return (
    <DataDetails.Provider value={datas}>
      <OnChangeDetails.Provider value={onChangeValue}>
        {children}
      </OnChangeDetails.Provider>
    </DataDetails.Provider>
  );

}

export default GlobalContext