"use client";
import { AlignRight } from "lucide-react";
import React, { useState } from "react";
import SideBar from "../SideBar";

const MobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="md:hidden">
      <AlignRight
        onClick={() => {
          setIsSideBarOpen(true);
        }}
      />
      <SideBar
        isOpen={isSideBarOpen}
        onClose={() => {
          setIsSideBarOpen(false);
        }}
      />
    </div>
  );
};

export default MobileMenu;
