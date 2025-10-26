import Title from "@/components/atoms/Title";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Brand } from "../../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import NoProductAvailable from "@/components/ui/customUI/NoProductsAvailable";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";

const extraData = [
  {
    title: "Free Delivery",
    description: "Free shipping over $100",
    icon: <Truck size={35} />,
  },
  {
    title: "Free Return",
    description: "Free shipping over $100",
    icon: <GitCompareArrows size={35} />,
  },
  {
    title: "Customer Support",
    description: "Friendly 27/7 customer support",
    icon: <Headset size={35} />,
  },
  {
    title: "Money Back guarantee",
    description: "Quality checked by our team",
    icon: <ShieldCheck size={35} />,
  },
];

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  return (
    <div className="w-full border rounded-md px-7 pt-7 pb-5 my-10 bg-deal-bg">
      <div className="flex justify-between items-center w-full">
        <Title>Shop By Brands</Title>
        <Link
          href={"/shop"}
          className="font-semibold text-sm hover:text-shop-orange hover-effect"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 w-full my-12 gap-5 ">
        {brands.length > 0 ? (
          brands.map((brand: Brand) => {
            return brand.image ? (
              <Link
                href={`/shop?brands=${brand.slug?.current}`}
                key={brand._id}
                className="p-2 bg-white relative min-h-28 flex-center overflow-hidden rounded-md hover:shadow-2xl hover-effect"
              >
                <Image
                  src={urlFor(brand.image).url()}
                  alt={`${brand.title}`}
                  width={100}
                  height={100}
                />
              </Link>
            ) : null;
          })
        ) : (
          <NoProductAvailable message="Brands" />
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-5 gap-5 gap-y-8">
        {extraData.map((data) => {
          return (
            <div key={data.title} className="flex gap-5 items-center">
              <div className="text-gray-600">{data.icon}</div>
              <div className="text-gray-600 font-semibold">
                <p className="title text-sm mb-1">{data.title}</p>
                <p className="text-xs text-gray-500">{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByBrands;
