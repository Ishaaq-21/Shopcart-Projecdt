import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="bg-shop-light-bg flex justify-center md:justify-between items-center px-20 py-16 relative gap-10 rounded-md">
      <div className="text w-full md:w-96 text-center md:text-left ">
        <h2 className="text-3xl text-shop-dark-green font-bold mb-5 tracking-wider">
          Grab up to 50% Off On Selected Headphones
        </h2>
        <Button className="bg-shop-btn-dark-green text-white font-semibold px-5">
          Buy now
        </Button>
      </div>
      <div className="image absolute bottom-0 md:-right-10  lg:right-[5%] hidden md:block w-96 h-60">
        <Image src={"/banner.png"} alt="Banner picture" fill={true} />
      </div>
    </div>
  );
};

export default HomeBanner;
