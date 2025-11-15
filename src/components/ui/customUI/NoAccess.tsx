import Logo from "@/components/atoms/Logo";
import SignIn from "@/components/atoms/SignIn";
import Title from "@/components/atoms/Title";
import { SignUpButton } from "@clerk/nextjs";
import React from "react";

const NoAccess = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center gap-5 p-5 border-2 border-black/50 rounded-lg w-fit md:w-sm">
      <Logo />
      <Title className="w-fit">Welcome Back</Title>
      <p className="text-lg text-gray-600 w-fit">
        Please sign in to view your cart.
      </p>
      <SignIn className="flex justify-center items-center w-full border border-black py-1.5 rounded-md bg-shop-primary hover:bg-shop-orange hover-effect hover:!text-black" />
      <p className="text-sm text-gray-500">Don't have an account ? </p>
      <SignUpButton mode="modal">
        <button className="w-full h-full border border-black rounded-md py-1.5 hover:bg-gray-200 hover-effect">
          Create an account
        </button>
      </SignUpButton>
    </div>
  );
};

export default NoAccess;
