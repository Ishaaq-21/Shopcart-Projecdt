import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const OrdersPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const order = await getMyOrders();

  return <div>OrdersPage</div>;
};

export default OrdersPage;
