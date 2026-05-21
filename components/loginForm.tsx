import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const LoginFormComponent = () => {
  return (
    <div className="bg-linear-to-r from-[#00aee7] to-[#006db1] h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 lg:w-5/12 md:w-8/12 w-11/12  bg-white rounded-2xl p-8 text-black items-center">
        <Image
          src={"/img/logo.png"}
          width={200}
          height={200}
          alt="komdigi"
          className="w-44 h-auto"
        />
        <input
          type="email"
          className="outline-gray-500 outline-1 rounded-[5px] w-full py-2 px-4 placeholder:text-sm focus:outline-[#00aee7] focus:outline-2 transition duration-200"
          placeholder="Masukkan Email Anda . . ."
        />
        <input
          type="password"
          className="outline-gray-500 outline-1 rounded-[5px] w-full py-2 px-4 placeholder:text-sm focus:outline-[#00aee7] focus:outline-2 transition duration-200"
          placeholder="Masukkan Kata Sandi . . ."
        />
        <div className="w-full flex md:flex-row flex-col items-center md:gap-4 gap-2">
          <button className="bg-[#00aee7] cursor-pointer font-semibold rounded-lg py-2 px-8 w-full text-white">
            Login
          </button>
          <SignInButton forceRedirectUrl={"/dashboard"}>
            <button className="w-full flex items-center cursor-pointer gap-2 justify-center border lg:px-8 px-4 py-2 rounded-lg">
              <Image
                alt=""
                src={"/img/google.png"}
                width={200}
                height={200}
                className="w-5 h-auto"
              />
              <p>Sign In With Google</p>
            </button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;
