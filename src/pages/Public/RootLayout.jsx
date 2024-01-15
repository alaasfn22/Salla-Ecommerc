import { Outlet } from "react-router-dom";
import NaveBar from "../../utils/NaveBar";
import Footer from "../../utils/Footer";
const RootLayout = () => {
  
  return (
    <div className=" min-h-screen flex flex-col">
      <NaveBar />

      <div className='w-full grow  bg-main-Color dark:bg-gray-800 dark:border-gray-700'>
                <Outlet></Outlet>
            </div>
   
    <Footer/>
    </div>
  );
};

export default RootLayout;
