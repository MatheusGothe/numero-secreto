"use client";
import { handleSignIn } from "@/app/login/helped";
import { useRouter } from "next/navigation";
import React from "react";

const LoginButton: React.FC = () => {

  const router = useRouter()

 

  return (
    <button
      onClick={ () => handleSignIn(router)}
      className="p-4 border-black-rounded border-2 rounded-md hover:bg-grap-100"
    >
      Sign in With Google
    </button>
  );
};

export default LoginButton;
