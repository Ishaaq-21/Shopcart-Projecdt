import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Title configuration
  title: {
    template: "%s - Shopcart online store",
    default: "Shopcart online store",
  },

  // Site description
  description: "Shopcart online store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased`}>{children}</body>
    </html>
  );
}
