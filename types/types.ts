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
