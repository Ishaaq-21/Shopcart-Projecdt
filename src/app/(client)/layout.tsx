import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/Header/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/layout/Footer/Footer";
export const metadata: Metadata = {
  // Title configuration
  title: {
    template: "%s - Shopcart online store",
    default: "Shopcart online store",
  },

  // Site description
  description: "Shopcart online store, Your one stop shop for all your needs",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Header />
      {children}
      <Footer />
    </ClerkProvider>
  );
}
