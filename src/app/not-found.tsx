import Logo from "@/components/atoms/Logo";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-32 bg-black/20">
      <div className="max-w-xl w-full space-y-8  border border-black/60 rounded-lg px-5 py-10 bg-white">
        <div className="text-center">
          <Logo className="w-fit mx-auto" />

          <h2 className="mt-6 text-3xl font-extrabold text-shop-primary">
            Looking for something?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;re sorry. The Web address you entered is not a functioning
            page on our site.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <Link
              href="/"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-shop-primary hover:bg-shop-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shop-primary hover-effect"
            >
              Go to Shopcart&apos;s home page
            </Link>
            <Link
              href="/help"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-semibold rounded-md text-amazonBlue bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazonBlue"
            >
              Help
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help? Visit the{" "}
            <Link
              href="/help"
              className="font-medium text-amazon-blue hover:text-amazon-blue-dark"
            >
              Help section
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-medium text-amazon-blue hover:text-amazon-blue-dark"
            >
              contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
