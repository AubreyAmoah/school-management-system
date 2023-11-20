import React from "react";
import Link from "next/link";

const NavbarMobileItem = ({ link, label, clickEvent }) => {
  return (
    <li
      onClick={clickEvent}
      className=" relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-green-100 hover:text-zinc-200 hover:bg-white/10"
    >
      <Link href={link}>{label}</Link>
    </li>
  );
};

export default NavbarMobileItem;
