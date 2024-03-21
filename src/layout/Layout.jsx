import React from "react";
import BottomNav from "./BottomNav";
import SideNav from "./SideNav";

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      {children}
      <BottomNav />
      <SideNav />
    </div>
  );
};
