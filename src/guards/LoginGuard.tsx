import React from "react";
import { Navigate } from "react-router-dom";
interface childrenProp {
  children: React.ReactNode;
}

export default function LoginGuard({ children }: childrenProp) {
  const isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    console.log("אתה לא מורשה כניסה");

    return <Navigate to="/auth/login" />;
  }
  return children;
}
