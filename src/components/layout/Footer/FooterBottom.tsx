import Logo from "@/components/atoms/Logo";
import React from "react";

const FooterBottom = () => {
  return (
    <p className="w-fit flex items-center gap-x-1.5 mx-auto py-5 text-sm md:text-base text-nowrap font-normal">
      © {new Date().getFullYear()} <Logo className="!text-sm md:!text-base" />{" "}
      All rights reserved.
    </p>
  );
};

export default FooterBottom;
