import {Outlet} from "react-router-dom";
import NaveBar from "../../utils/NaveBar";
import Footer from "../../utils/Footer";
import SwitchBtn from "../../utils/switchBtn/SwitchBtn";
const RootLayout = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <NaveBar />

      <div className="w-full grow relative  bg-main-Color dark:bg-gray-800 dark:border-gray-700">
        <Outlet></Outlet>
        <SwitchBtn />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
