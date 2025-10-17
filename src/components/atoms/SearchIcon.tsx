import { Search } from "lucide-react";
import React from "react";

const SearchIcon = () => {
  return (
    <div>
      <Search
        role="button"
        className="w-5 h-5 hover:text-shop-primary hover-effect"
      />
    </div>
  );
};

export default SearchIcon;
