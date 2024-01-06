import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomeToast, customeContainer } from "../../utils/Toast";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/slice/Authentication";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
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
  
  return (
    <section className=" min-h-screen dark:bg-gray-900">
      {customeContainer()}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center capitalize font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              create account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="userName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  onChange={handelChange}
                  value={handelInput.userName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="alaa_ali22"
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handelChange}
                  value={handelInput.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="phone-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 19 18"
                    >
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="phone-input"
                    name="phone"
                    onChange={handelChange}
                    value={handelInput.phone}
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123-456-7890"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handelChange}
                  value={handelInput.password}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handelChange}
                  value={handelInput.confirmPassword}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                type="submit"
                onClick={onSaveUserData}
                className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
      {customeContainer()}
    </section>
  );
};

export default RegisterPage;
