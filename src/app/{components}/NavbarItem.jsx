import React from "react";
import Link from "next/link";

const NavbarItem = ({ label, link, clickEvent }) => {
  return (
    <li
      onClick={clickEvent}
      className="hover:text-zinc-200 hover:bg-white/10 inline-block p-4 transition-colors ease-in-out mr-6 cursor-pointer"
    >
      <Link href={link}>{label}</Link>
    </li>
  );
};

export default NavbarItem;
