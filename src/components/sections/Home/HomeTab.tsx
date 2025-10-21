import { Button } from "@/components/ui/button";
import { productType } from "@/constants/data";
import Link from "next/link";
import React from "react";

const HomeTab = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center p-5 gap-y-5">
      <ul className="flex justify-start md:justify-between flex-wrap items-center gap-5">
        {productType.map((item) => (
          <Button
            onClick={() => setSelectedTab(item.title)}
            key={item.title}
            className={`text-black font-semibold px-5 py-3 rounded-2xl hover:bg-shop-primary border border-shop-primary hover-effect ${selectedTab === item.title ? "bg-shop-primary" : "bg-shop-light-bg"}`}
          >
            {item.title}
          </Button>
        ))}
      </ul>
      <Link
        href="/shop"
        className="text-black font-semibold px-4 py-2 rounded-4xl text-sm bg-shop-light-bg  hover:bg-shop-primary border border-shop-primary hover-effect"
      >
        See All
      </Link>
    </div>
  );
};

export default HomeTab;
