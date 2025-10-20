export type HeaderMenuItemType = {
  title: "Home" | "Shop" | "Blog" | "Contact" | "Hot Deal";
  href: "/" | "/shop" | "/blog" | "/contact" | "/deal";
};

export const headerMenuData: HeaderMenuItemType[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Hot Deal",
    href: "/deal",
  },
];

//Quick Links in the footer --------------------------
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
export const quickLinksData: QuickLink[] = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "FAQs", href: "/faqs" },
  { title: "Help", href: "/help" },
];

//-----------------------------------------------------

// Categories in the footer ------------------------------
export type Category = {
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

// 2️⃣ Initialize the array with that strict type
export const categoriesData: Category[] = [
  { title: "Mobiles", href: "mobiles" },
  { title: "Appliances", href: "appliances" },
  { title: "Smartphones", href: "smartphones" },
  { title: "Air Conditioners", href: "air-conditioners" },
  { title: "Washing Machine", href: "washing-machine" },
  { title: "Kitchen Appliances", href: "kitchen-appliances" },
  { title: "gadget accessories", href: "gadget-accessories" },
];
//-------------------------------------------------------------
