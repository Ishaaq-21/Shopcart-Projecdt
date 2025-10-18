import React, { ReactElement } from "react";
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

type SocialLink = {
  title: "Youtube" | "Github" | "Linkedin" | "Facebook" | "Slack"; // restrict titles
  href: string; // must be a valid URL string
  icon: ReactElement; // must be a valid React element
};

const SocialLinksArr: SocialLink[] = [
  {
    title: "Github",
    href: "https://github.com/Ishaaq-21",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "www.linkedin.com/in/h-ishaq-hk",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/hk.ishaq",
    icon: <Facebook className="w-5 h-5" />,
  },
];

const SocialLinks = () => {
  return (
    <ul className="flex gap-5 ">
      {SocialLinksArr.map((linkItem: SocialLink) => (
        <Tooltip key={linkItem.title}>
          <TooltipTrigger asChild>
            <Link
              href={linkItem.href}
              rel="noopener noreferrer"
              target="_blank"
              className="p-2 rounded-full border text-white/70 md:text-black hover:text-white hover:border-shop-primary hover-effect "
            >
              {linkItem.icon}
            </Link>
          </TooltipTrigger>
          <TooltipContent className="font-semibold ">
            <p>{linkItem.title}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </ul>
  );
};

export default SocialLinks;
