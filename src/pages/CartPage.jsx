import CartCard from "../components/cart/CartCard";

const CartPage = () => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div
          className="md:col-span-2 grid gap-8  border  shadow-md rounded-lg border-b p-2 py-4  dark:border-gray-500 bg-white dark:bg-gray-800  ">
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
        <div>
        <CartCard />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
