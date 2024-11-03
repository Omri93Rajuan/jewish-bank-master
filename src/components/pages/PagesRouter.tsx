import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Credit from "./Credit";
import Transactions from "./Transactions";

export default function PagesRouter() {
  return (
    <div className="main">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </div>
  );
}
