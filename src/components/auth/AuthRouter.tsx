import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function AuthRouter() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
