import React, { useState } from "react";
import { LoginBg2, Logo } from "../assets";
import { LoginInput } from "../Components";
import { MdEmail, MdOutlinePassword, MdNumbers } from "react-icons/md";

const Login = () => {
  // using usestate to get the values :
  const [userEmail, setuserEmail] = useState("");
  const [signUp, setsignUp] = useState(false);
  const [isPass, setisPass] = useState("");
  const [isConfirmedPass, setisConfirmedPass] = useState("");

  return (
    <div className="w-screen h-screen relative overflow-hidden flex ">
      {/* background image */}
      <img
        src={LoginBg2}
        alt="Login_Page"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      {/* login screen */}

      <div className="flex flex-col w-560 items-center gap-6 bg-lightOverlay z-10 w-[80%] md:w-375 h-full backdrop-blur-md">
        <div className="flex w-full justify-start items-center gap-2 p-2">
          <img src={Logo} alt="Logo" className="w-6 h-7" />
          <p className="font-bold text-lg">TastyBites</p>
        </div>
        {/* welcome text */}
        <p className="font-bold text-xl">Welcome Back</p>
        {!signUp ? (
          <p className="-mt-6">Sign in Here!</p>
        ) : (
          <p className="-mt-6">Create Your Account</p>
        )}

        {/* input section */}

        <div className="w-full flex flex-col justify-center items-center gap-6 ">
          <LoginInput
            placeHolder={"Enter Email "}
            icon={<MdEmail className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setuserEmail}
            isSignUp={signUp}
            type={"email"}
          />
          <LoginInput
            placeHolder={"Enter Password"}
            icon={<MdOutlinePassword className="text-xl text-textColor" />}
            inputState={isPass}
            inputStateFunc={setisPass}
            isSignUp={signUp}
            type={"password"}
          />

          {signUp && (
            <LoginInput
              placeHolder={"Confirm Password"}
              icon={<MdOutlinePassword className="text-xl text-textColor" />}
              inputState={isConfirmedPass}
              inputStateFunc={setisConfirmedPass}
              isSignUp={signUp}
              type={"password"}
            />
          )}

          {!signUp ? (
            <p className="text-sm -mt-5 font-bold">Don't have an Account , <button className="text-red-500 underline" onClick={()=>setsignUp(true)}>Create one</button> </p>
          ) : (
            <p className="text-sm -mt-4 font-bold">Already have an Account , <button className="text-red-500 underline" onClick={()=>setsignUp(false)}>Click here</button> </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
