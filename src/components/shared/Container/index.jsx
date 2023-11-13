
import SideBar from "./SideBar";

const Container = ({ children }) => {
  return (
    <div className="flex text-white font-domine w-full min-h-screen" >
      <SideBar/>
      {children}
    </div>
  );
};

export default Container;
