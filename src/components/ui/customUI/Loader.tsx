import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex-center min-h-80 w-full bg-shop-light-bg mt-10 font-semibold">
      <div className="flex  gap-x-3 text-shop-dark-green">
        <Loader2 className="animate-spin" />
        <p>Products are Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
