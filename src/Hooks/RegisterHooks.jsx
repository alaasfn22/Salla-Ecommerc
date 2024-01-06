import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomeToast } from "../utils/Toast";
import { registerUser } from "../redux/slice/Authentication";

const RegisterHooks = () => {
    const dispatch=useDispatch()
    const [handelInput, setHandelInput] = useState({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
  
    const handelChange = (e) => {
      setHandelInput({
        ...handelInput,
        [e.target.name]: e.target.value,
      });
    };
    const customeValidation=()=>{
      if(handelInput.userName === ""){
        CustomeToast("warn","please Enter Name")
        return;
      }
      if(handelInput.email === ""){
        CustomeToast("warn","please Enter Email")
        return;
      }
       if(handelInput.password === ""){
        CustomeToast("warn","please Enter Password")
        return;
      }
       if(handelInput.confirmPassword === ""){
        CustomeToast("warn","please Enter Confirm Password")
        return;
      }
       if(handelInput.phone === ""){
        CustomeToast("warn","please Enter Phone")
        return;
      }
       if(handelInput.password !== handelInput.confirmPassword ){
        CustomeToast("warn","password not match")
        return;
      }
     
    }
    const {createUser,isLoading,error}=useSelector((state)=>state.auth)
  
    const onSaveUserData =async (e) => {
      e.preventDefault();
      customeValidation();
      const data={
        name:handelInput.userName,
        email:handelInput.email,
        password:handelInput.password,
        passwordConfirm:handelInput.confirmPassword,
        phone:handelInput.phone
      }
      await dispatch(registerUser(data))
  
    };
    useEffect(()=>{
      if(isLoading===false){
        if(createUser){
          if(createUser?.token){
            localStorage.setItem("token",createUser?.token)
            CustomeToast("success","Register Successfully")
            setTimeout(()=>{
              // navigate("/login")   
              window.location.replace("/login")         
            },2000)
          }else{
            localStorage.removeItem("token")
          }
        }
        if(error?.status===400){
          CustomeToast("error",error.data.errors[0].msg)
        }
      }    
    },[isLoading])
  return [
    handelInput,
    handelChange,
    onSaveUserData,
    isLoading
  ]
}

export default RegisterHooks