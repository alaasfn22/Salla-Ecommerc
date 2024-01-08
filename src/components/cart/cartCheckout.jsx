
const CartCheckout = () => {
  return (
    <div className='w-full overflow-hidden '>
  <div className="flex flex-col justify-center flex-wrap items-center gap-4 mb-6 ">
    <span className="text-gray-700 text-2xl font-semibold dark:text-gray-400">Apply Coupon</span>
    <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xfe584s" />
    <button className="flex-1  p-4 w-full font-bold text-center text-gray-100 bg-sky-500 rounded-md hover:bg-sky-600 md:flex-none">
      Apply
    </button>
  </div>
  <div className="w-full  ">
    <div className="p-6 border rounded-lg border-sky-100 dark:bg-gray-900 dark:border-gray-900 bg-sky-50 md:p-8">
      <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">
        Order Summary
      </h2>
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
        <span className="text-gray-700 dark:text-gray-400">Subtotal</span>
        <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">
          $99
        </span>
      </div>
      <div className="flex items-center justify-between pb-4 mb-4 ">
        <span className="text-gray-700 dark:text-gray-400 ">Shipping</span>
        <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">
          Free
        </span>
      </div>
      <div className="flex items-center justify-between pb-4 mb-4 ">
        <span className="text-gray-700 dark:text-gray-400">Order Total</span>
        <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
          $99.00
        </span>
      </div>
      <h2 className="text-lg text-gray-500 dark:text-gray-400">We offer:</h2>
      <div className="flex items-center mb-4 ">
        <a href="#">
          <img
            src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
            alt=""
            className="object-cover h-16 mr-2 w-26"
          />
        </a>
        <a href="#">
          <img
            src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
            alt=""
            className="object-cover h-16 mr-2 w-26"
          />
        </a>
        <a href="#">
          <img
            src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
            alt=""
            className="object-cover h-16 mr-2 w-26"
          />
        </a>
      </div>
      <div className="flex items-center justify-between ">
        <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-sky-500 rounded-md hover:bg-sky-600">
          Checkout
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default CartCheckout