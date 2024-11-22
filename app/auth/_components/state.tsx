"use client";
import React from "react";
import Verify from "./verify";
import { useAuth } from "@/hooks/useAuth";
import SignIn from "./sign-in";

const StateAuth = () => {
  const { step } = useAuth();
  return (
    <>
      {step === "login" && <SignIn />}
      {step === "verify" && <Verify />}
    </>
  );
};

export default StateAuth;
