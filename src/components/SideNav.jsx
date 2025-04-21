import { Image, PencilRuler, Shield } from "lucide-react";
import React from "react";

const SideNav = ({selectedIndex}) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];
  return (
    <div className="shadow-sm border h-screen">
      {menuList.map((menu, index) => (
        <h2 
        onClick={()=>selectedIndex(index)}
        className="p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer flex items-center gap-2 hover:bg-red-700 hover:text-white"
        key={index}>
            <menu.icon />
            {menu.name}</h2>
      ))}
    </div>
  );
};

export default SideNav;
