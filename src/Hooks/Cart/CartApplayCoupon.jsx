import  { useEffect, useState } from "react";
import { applayCoupon } from "../../redux/slice/CuponSlice";
import { useDispatch, useSelector } from "react-redux";
import { CustomeToast } from "../../utils/Toast";

const CartApplayCoupon = () => {
  const [couponName, setCouponName] = useState("");
  const [couponData, setCouponData] = useState("");
  const [totalAfterDiscount, setTotalAfterDiscount] = useState("");
  const dispatch = useDispatch();
  const handelChangeCuponValue = (e) => {
    setCouponName(e.target.value);
  };
  const addCupone = async (e) => {
    e.preventDefault();
    if (couponName === "") {
      CustomeToast("error", "Please Enter Coupon Name");
      return;
    }
    await dispatch(applayCoupon({ couponName: couponName }));
  };
  const { cupon, isLoading, error } = useSelector((state) => state.cupon);

  useEffect(() => {
    if (isLoading === false) {
      if (cupon.data) {
        CustomeToast("success", "   Coupon applied successfully");
        setCouponData(cupon?.data?.coupon);
        setTotalAfterDiscount(cupon?.data?.data?.totalAfterDiscount);
        setCouponName("");
      } else if (!cupon.data) {
        if (error?.data?.status === "fail") {
          CustomeToast("error", error?.data?.message);
          setTotalAfterDiscount("");
          setCouponData("");
        }
      }
    }
  }, [isLoading]);
  return  [
    couponData,
    totalAfterDiscount,
    handelChangeCuponValue,
    addCupone,
    couponName,
  ];
};

export default CartApplayCoupon;
