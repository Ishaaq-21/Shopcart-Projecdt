import { StarIcon } from "lucide-react";
import React from "react";

const StartsReview = ({
  productIndex,
  fillAll,
}: {
  productIndex?: number;
  fillAll?: boolean;
}) => {
  return (
    <div className="flex item-center gap-2">
      <div className="start flex items-center">
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-4 h-4 text-shop-primary`}
            fill={
              fillAll
                ? "#fbbf24"
                : productIndex !== undefined && productIndex % 2 === 0
                  ? "#fbbf24"
                  : index < 4
                    ? "#fbbf24"
                    : "#fff"
            }
          />
        ))}
      </div>
      <p className="text-gray-400 uppercase text-[10px] self-center">
        5 Reviews
      </p>
    </div>
  );
};

export default StartsReview;
