import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";

const MainLayOut = () => {
  return (
    <div className="max-w-[1140px] px-4 font-poppins mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
