import Logo from "@/components/atoms/Logo";
import NewsLetterForm from "@/components/ui/customUI/NewsLetterForm";
import SocialLinks from "@/components/ui/customUI/SocialLinks";
import {
  categoriesData,
  Category,
  QuickLink,
  quickLinksData,
} from "@/constants/data";
import Link from "next/link";
import React from "react";

const FooterMiddle = () => {
  return (
    <div className="flex flex-col gap-y-5 md:gap-y-10  md:flex-row md:flex-wrap justify-between items-start py-8 border-b border-b-black/70">
      <div className="footer-btm-div space-y-5">
        <Logo />
        <p className="text-black/70 mt-3 max-w-72 ">
          {" "}
          Discover curated furniture collections at Shopcartyt, blending style
          and comfort to elevate your living spaces.
        </p>
        <SocialLinks className="hover:!text-shop-primary !text-black/70 border-black/70" />
      </div>
      {/* Quick Links */}
      <div className="footer-btm-div">
        <h3 className="text-lg font-bold mb-3">Quick Links</h3>
        <div className="flex flex-col gap-2">
          {quickLinksData.map((item: QuickLink) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-black/70 hover:text-black hover-effect transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {/* Categories */}
      <div className="footer-btm-div">
        <h3 className="text-lg font-bold mb-3">Categories</h3>
        <div className="flex flex-col gap-2">
          {categoriesData.map((item: Category) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-black/70 hover:text-black hover-effect transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {/* News Letter */}
      <div className="footer-btm-div">
        <h3 className="text-lg font-bold ">News Letter</h3>
        <p className="text-black/70 max-w-72 my-3">
          {" "}
          Subscribe to our newsletter to receive updates and exclusive offers.
        </p>
        <NewsLetterForm />
      </div>
    </div>
  );
};

export default FooterMiddle;
