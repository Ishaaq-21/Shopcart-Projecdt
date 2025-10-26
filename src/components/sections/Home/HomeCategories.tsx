import Title from "@/components/atoms/Title";
import { getCategories } from "@/sanity/queries";
import React from "react";
import { Category } from "../../../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const HomeCategories = async () => {
  const categories = await getCategories(6);
  return (
    <div className="w-full border rounded-md px-7 pt-7 pb-5">
      <Title className="pb-3 border-b border-black/15">
        Popular categories
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 p-5  gap-5">
        {categories?.map((category: Category) => (
          <div
            key={category._id}
            className="flex items-center gap-5 group bg-lightColor rounded-lg p-5"
          >
            {category?.image && (
              <div className="w-20 h-20 p-3 border bg-white border-shop-orange overflow-hidden relative">
                <Link href={`/category/${category?.slug?.current}`}>
                  <Image
                    src={urlFor(category?.image).url()}
                    alt={`${category.title} picture`}
                    fill={true}
                    className="group-hover:scale-110 hover-effect p-2"
                  />
                </Link>
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {category.title}
              </h3>
              <p className="text-sm text-white/80">
                ({category.productCount}) items available
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
