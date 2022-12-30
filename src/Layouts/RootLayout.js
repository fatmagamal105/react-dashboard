import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
            <Outlet />
      </div>
      
    </>
  );
}
