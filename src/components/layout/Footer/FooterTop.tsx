import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const ContactsArr: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "New Orlean, USA",
    icon: (
      <MapPin className="h-6 w-6 text-black/70 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+213795274134",
    icon: (
      <Phone className="h-6 w-6 text-black/70 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-black/70 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "ishaq.hk.pro22@gmail.com",
    icon: (
      <Mail className="h-7 w-7 text-black/70 group-hover:text-primary transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 place-items-start  md:place-items-center gap-y-5 gap-x-2 border-black/50 border-b py-5">
      {ContactsArr.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 group w-full hover:bg-gray-50 p-1 md:p-3 hover-effect"
        >
          <p>{item.icon}</p>
          <div>
            <p className="text-black/70 group-hover:text-primary transition-colors mb-1 font-bold group-hover">
              {item.title}
            </p>
            <p className="text-[10px] sm:text-xs text-black/70 group-hover:text-primary transition-colors ">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
