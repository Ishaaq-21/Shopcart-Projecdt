import Container from "@/components/common/Container";
import WishlistProducts from "@/components/sections/wishlist/WishlistProducts";
import NoAccess from "@/components/ui/customUI/NoAccess";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const user = await currentUser();
  return (
    <div className="py-20 text-left p-2">
      <Container className="overflow-x-auto">
        {user ? <WishlistProducts /> : <NoAccess message="wishlist" />}
      </Container>
    </div>
  );
};

export default page;
