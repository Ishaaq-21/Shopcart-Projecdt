import { Search } from "lucide-react";
import React from "react";

const SearchIcon = () => {
  return (
    <div className="relative flex-between gap-3">
      <span className="text-gray-400 md:hidden">Search</span>
      <Search
        role="button"
        className="w-4 h-4 md:w-5 md:h-5 text-white md:text-black hover:text-shop-primary hover-effect"
      />
    </div>
  );
};

export default SearchIcon;
