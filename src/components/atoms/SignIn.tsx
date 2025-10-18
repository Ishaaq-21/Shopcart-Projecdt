import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="self-start text-white/70 md:text-black hover:text-shop-orange hover-effect tracking-wider">
        Signin
      </button>
    </SignInButton>
  );
};

export default SignIn;
