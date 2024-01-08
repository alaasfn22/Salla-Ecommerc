import img1 from "../../assets/TW00A303E-1_1200x630.webp";
const CartCard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 shadow-md rounded-lg border-b p-2 py-4 dark:bg-slate-700 dark:border-gray-500 bg-white ">
      <div className="h-60 sm:w-40 sm:h-24 overflow-hidden ">
        <img
          src={img1}
          alt=""
          className="object-contain w-full  border rounded-lg h-full"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-1 gap-2">
        <div>
          <h3>title</h3>
          <p>$80</p>
        </div>
        <div className="flex justify-between sm:flex-col sm:justify-start gap-3">
          <div className="flex  items-center h-8 overflow-hidden rounded-sm bg-gray-100">
            <span className=" w-8 h-full  text-center font-semibold text-xl cursor-pointer ">
              +
            </span>
            <span className="bg-white h-full font-semibold w-8 border border-gray-200 text-center">
              <p className="py-1">1</p>
            </span>
            <span className=" w-8 text-center h-full font-semibold  text-xl cursor-pointer ">
              -
            </span>
          </div>
          <div className="flex items-center justify-center  gap-3">
            <h3>$80 </h3>
            <p>x</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
