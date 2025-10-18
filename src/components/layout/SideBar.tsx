import React from "react";
import Logo from "../atoms/Logo";
import HeaderNav from "./Header/HeaderNav";

import { X } from "lucide-react";
import IconLinks from "./Header/IconLinks";
import SocialLinks from "../ui/customUI/SocialLinks";

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};
const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  return (
    <div
      className={`side-bar fixed ${
        isOpen ? "left-0" : "-left-full"
      } !top-0 z-50 w-full h-[100vh] bg-black/50 hover-effect`}
    >
      <div className="h-full w-3/4 bg-black p-7">
        <div className="side-bar-header flex-between mb-7">
          <Logo className="text-shop-light-bg text-xl sm:text-2xl" />
          <button onClick={onClose}>
            <X className="text-white w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        <HeaderNav isOpened={isOpen} />
        <IconLinks isOpen={isOpen} />
        <SocialLinks />
      </div>
    </div>
  );
};

export default SideBar;
