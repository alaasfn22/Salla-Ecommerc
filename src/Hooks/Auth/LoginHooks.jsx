import { useEffect, useState } from "react";
import { CustomeToast } from "../../utils/Toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slice/Authentication";

const LoginHooks = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
  
    const validation = () => {
      if (email === "") {
        CustomeToast("warn","please Enter Email")
        return;
      } else if (password === "") {
        CustomeToast("warn","please Enter password")
      }
    };
    const sendData = async (e) => {
      e.preventDefault();
      validation();
      await dispatch(loginUser({ email, password }));
  
    };
    const { login, isLoading, error } = useSelector((state) => state.auth);
  
    useEffect(() => {
      if(isLoading===false){
       if(login){
        if (login.token && login.data) {
          localStorage.setItem("token",login.token);
          localStorage.setItem("userData", JSON.stringify( login.data));
          CustomeToast("success","Login Successfully")
          setTimeout(()=>{
            navigate("/");
          },2100)
                     
        }else{
            localStorage.removeItem("token")
            localStorage.removeItem("userData")
        }
       }
      
      if (error?.data?.status === "error") {
        if (error?.data?.message==="Incorrect email or password") {
          CustomeToast("error",error?.data?.message)
        }
      }
      }
    }, [isLoading]);
  return [
    email,
    setEmail,
    password,
    setPassword,
    sendData,
    isLoading,
      ]
}

export default LoginHooks