import { Button } from "@/components/ui/button";
import { FileX, Link } from "lucide-react";
import React from "react";

const NoOrders = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <FileX className="h-24 w-24 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-900">No orders found</h2>
      <p className="mt-2 text-sm text-gray-600 text-center max-w-md">
        It looks like you haven&apos;t placed any orders yet. Start shopping to
        see your orders here!
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Browse Products</Link>
      </Button>
    </div>
  );
};

export default NoOrders;
