import { Heart } from "lucide-react";
import React from "react";

const FavIcon = () => {
  return (
    <div className="relative">
      <Heart
        role="button"
        className="w-5 h-5 hover:text-shop-primary hover-effect"
      />
      <span className="header-icon-span">0</span>
    </div>
  );
};

export default FavIcon;
