import { Product } from "../../sanity.types";

export type HeaderMenuItemType = {
  title: "Home" | "Shop" | "Blog" | "Contact" | "Hot Deal";
  href: "/" | "/shop" | "/blog" | "/contact" | "/deal";
};

export type QuickLinkTitle =
  | "About us"
  | "Contact us"
  | "Terms & Conditions"
  | "Privacy Policy"
  | "FAQs"
  | "Help";

export type QuickLinkHref =
  | "/about"
  | "/contact"
  | "/terms"
  | "/privacy"
  | "/faqs"
  | "/help";
export type QuickLink = {
  title: QuickLinkTitle;
  href: QuickLinkHref;
};
export type CategoryLink = {
  title: string;
  href:
    | "mobiles"
    | "appliances"
    | "smartphones"
    | "air-conditioners"
    | "washing-machine"
    | "kitchen-appliances"
    | "gadget-accessories";
};

// Type for each item in the cart
export type CartItem = {
  product: Product;
  quantity: number;
};

// Type for the overall cart state
export type CartState = {
  items: CartItem[]; // how can I map over only the products ?
  totalItems: number; // sum of all quantities
  totalPrice: number; // total price of all items
};
