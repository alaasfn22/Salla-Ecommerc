import { useDispatch } from "react-redux";
import {  rempveSpecificProduct } from "../../redux/slice/CartSlice";


const RemoveSpecificCartHooks = (product) => {
 const dispatch=useDispatch()
  const handelDeletItem = async (e) => {
    e.preventDefault();
    await dispatch(rempveSpecificProduct(product._id));
    
  };

  return [handelDeletItem];
};

export default RemoveSpecificCartHooks;
