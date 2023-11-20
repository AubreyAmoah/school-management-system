import React, { useState } from "react";

import Link from "next/link";
import NavbarMobileItem from "./NavbarMobileItem";
import NavbarMobileDrop from "./NavbarMobileDrop";
import NavbarLogo from "./NavbarLogo";
import NavbarItem from "./NavbarItem";
import NavbarDrop from "./NavbarDrop";

const Navbar = ({ label, login, signup, home }) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const disableClass = () => {
    setActive(false);
  };

  return (
    <nav className="sticky z-30 top-0 bg-gradient-to-r from-green-500 to-lime-500 flex justify-between items-center w-full h-20 text-green-100">
      <NavbarLogo />
      <div className="md:hidden block ml-auto pr-4 my-auto cursor-pointer">
        <div
          onClick={toggleClass}
          className={`group peer ${isActive ? "open" : ""}`}
        >
          <div className=" bg-green-100 rounded-full w-8 h-1 group-open:rotate-45 transition-all group-open:top-2 relative top-0"></div>
          <div className=" bg-green-100 rounded-full w-8 h-1 mt-1 opacity-100 group-open:opacity-0 transition-all"></div>
          <div className=" bg-green-100 rounded-full w-8 h-1 mt-1 group-open:-rotate-45 transition-all group-open:-top-2 relative top-0"></div>
        </div>

        <div className="hidden peer-open:block absolute w-full top-[62px] left-0 bg-gradient-to-r from-green-500 to-lime-500">
          {label === "homePage" ? (
            <ul className="flex flex-col items-center justify-end h-full">
              <NavbarMobileItem link={"/"} label={"Home"} clickEvent={home} />
              <NavbarMobileDrop
                label={"User"}
                loginClick={login}
                signupClick={signup}
              />
              <NavbarMobileItem label={"Features"} link={"#feature"} />
            </ul>
          ) : (
            ``
          )}
        </div>
      </div>

      {label === "homePage" ? (
        <ul className="flex-1 md:flex hidden items-center justify-end h-full">
          <NavbarItem link={"/"} label={"Home"} clickEvent={home} />
          <NavbarDrop label={"User"} loginClick={login} signupClick={signup} />
          <NavbarItem link={"#feature"} label={"Features"} />
        </ul>
      ) : (
        ``
      )}
    </nav>
  );
};

export default Navbar;
