import { Outlet } from "react-router-dom";
import NaveBar from "../utils/NaveBar";
import Footer from "../utils/Footer";
const RootLayout = () => {
  
  return (
    <div className=" h-screen">
      <NaveBar />

      {/* <div className=''>
                <Outlet></Outlet>
            </div> */}
      <div
        // style={{ backgroundColor: "#f0f9ff" }}
        className="bg-main-Color  w-full min-h-[610px] sm:min-h-[507px]  md:min-h-[475px] lg:min-h-[460px] left-0  dark:bg-gray-800 dark:border-gray-700"
      >
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
