import React, { useState } from "react";
import Link from "next/link";

const NavbarMobileDrop = ({
  label,
  loginClick,
  signupClick,
  logoutClick,
  profileClick,
}) => {
  const [isVisible, setVisible] = useState(false);

  const toggleSubClass = () => {
    console.log(isVisible);
    setVisible(!isVisible);
  };
  return (
    <li
      onClick={toggleSubClass}
      className={`group ${
        isVisible ? "open" : ""
      } relative group h-full cursor-pointer text-green-100 hover:text-zinc-200 hover:bg-white/10`}
    >
      <div className={`p-4 text-center font-bold `}>{label}</div>
      {label === "User" && (
        <div className="hidden group-open:block">
          <div
            onClick={loginClick}
            className="text-center p-4 relative text-green-100 hover:text-zinc-200 cursor-pointer"
          >
            <span>Login</span>
          </div>
          <div
            onClick={signupClick}
            className="text-center p-4 relative text-green-100 hover:text-zinc-200 cursor-pointer"
          >
            <span>Sign Up</span>
          </div>
        </div>
      )}

      {label === "Account" && (
        <div className="hidden group-open:block">
          <div
            onClick={profileClick}
            className="text-center p-4 relative text-green-100 hover:text-zinc-200 cursor-pointer"
          >
            <span>Profile</span>
          </div>
          <div
            onClick={logoutClick}
            className="text-center p-4 relative text-green-100 hover:text-zinc-200 cursor-pointer"
          >
            <span>Logunt</span>
          </div>
        </div>
      )}
    </li>
  );
};

export default NavbarMobileDrop;
