import { Button } from "@/components/ui/button";
import React from "react";

const HomeTabs = ["Gadget", "Appliances", "Refrigerators", "Others"];

const HomeTab = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}) => {
  return (
    <div className="flex justify-between items-center p-5">
      <ul className="flex justify-between items-center gap-5">
        {HomeTabs.map((tab) => (
          <Button
            onClick={() => setSelectedTab(tab)}
            key={tab}
            className={`text-black font-semibold px-5 py-3 rounded-2xl hover:bg-shop-primary border border-shop-primary hover-effect ${selectedTab === tab ? "bg-shop-primary" : "bg-shop-light-bg"}`}
          >
            {tab}
          </Button>
        ))}
      </ul>
      <Button
        onClick={() => setSelectedTab("all")}
        className="text-black font-semibold px-4 py-2 rounded-2xl bg-shop-light-bg  hover:bg-shop-primary border border-shop-primary hover-effect"
      >
        See All
      </Button>
    </div>
  );
};

export default HomeTab;
