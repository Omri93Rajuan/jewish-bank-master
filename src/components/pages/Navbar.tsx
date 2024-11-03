import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <NavLink to={"/pages"} end>
        Home
      </NavLink>
      <NavLink to={"/pages/credit"}>Credit</NavLink>
      <NavLink to={"/pages/transactions"}>Transactions</NavLink>
    </div>
  );
}
