"use client";
import {
  createCheckoutSession,
  MetaData,
} from "@/actions/createCheckoutSession";
import { useCartContext } from "@/contexts/CartFavContextProvider";

import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";

const CheckoutBtn = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { cartState } = useCartContext();
  const handleCheckout = async () => {
    try {
      setLoading(true);
      const metadata: MetaData = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName || "Unknown",
        customerEmail: user?.emailAddresses[0]?.emailAddress || "Unknown",
        clerkUserId: user?.id as string,
      };
      const checkoutUrl = await createCheckoutSession(
        cartState.items,
        metadata
      );
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-shop-primary hover:bg-shop-orange hover-effect w-full rounded-full py-2 text-lg text-white font-semibold"
    >
      {loading ? "Processing..." : "Proceed to Checkout"}
    </button>
  );
};

export default CheckoutBtn;
