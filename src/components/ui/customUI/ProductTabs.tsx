"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";

export type Tab = {
  tabValue: string;
  tabName: string;
  tabContent: string;
};
export const sampleTabs: Tab[] = [
  {
    tabValue: "overview",
    tabName: "Overview",
    tabContent:
      "This product is designed to make daily tasks easier and more efficient. Built with a focus on reliability and usability, it offers a balance of modern design and practical performance. Whether for home or professional use, it’s meant to simplify your routine without compromising on quality.",
  },
  {
    tabValue: "details",
    tabName: "Details",
    tabContent:
      "Made from durable, high-grade materials to ensure long-lasting performance. Dimensions are optimized for easy handling and storage. The product features intuitive controls, energy-efficient operation, and is compatible with standard accessories. Full technical specifications are listed in the manual for precise configuration needs.",
  },
  {
    tabValue: "reviews",
    tabName: "Reviews",
    tabContent:
      "Users appreciate its sturdy build, ease of use, and consistent performance. Many highlight the product’s thoughtful design and dependable quality. While some mention minor preferences for additional features, overall satisfaction remains high, with most reviewers recommending it for its reliability and value.",
  },
];

const ProductTabs = () => {
  return (
    <div className="mt-10  w-full flex-center">
      <Tabs defaultValue="overview" className="flex-center">
        <TabsList className="h-12">
          {sampleTabs.map((tab) => (
            <TabsTrigger
              key={tab.tabValue}
              value={tab.tabValue}
              className="px-6 md:px-10"
            >
              {tab.tabName}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="p-3">
          {sampleTabs.map((tab) => (
            <TabsContent
              key={tab.tabValue}
              value={tab.tabValue}
              className="md:text-lg tracking-wider text-center"
            >
              {tab.tabContent}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
