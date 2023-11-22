import React from "react";

const NavbarDrop = ({
  label,
  loginClick,
  signupClick,
  profileClick,
  logoutClick,
}) => {
  return (
    <li className="group relative hover:text-zinc-200 hover:bg-white/10 inline-block p-4 transition-colors ease-in-out mr-6 cursor-pointer">
      <span>{label}</span>
      {label === "User" && (
        <div className="hidden group-hover:flex absolute top-full right-0 bg-lime-500 flex-col justify-end rounded-b-md">
          <div
            onClick={loginClick}
            className=" hover:text-zinc-200 hover:bg-white/10 inline-block transition-colors ease-in-out p-4 w-60 cursor-pointer"
          >
            <span>Login</span>
          </div>
          <div
            onClick={signupClick}
            className=" hover:text-zinc-200 hover:bg-white/10 inline-block transition-colors ease-in-out p-4 w-60 cursor-pointer"
          >
            <span>Sign Up</span>
          </div>
        </div>
      )}

      {label === "Account" && (
        <div className="hidden group-hover:flex absolute top-full right-0 bg-lime-500 flex-col justify-end rounded-b-md">
          <div
            onClick={profileClick}
            className=" hover:text-zinc-200 hover:bg-white/10 inline-block transition-colors ease-in-out p-4 w-60 cursor-pointer"
          >
            <span>Profile</span>
          </div>
          <div
            onClick={logoutClick}
            className=" hover:text-zinc-200 hover:bg-white/10 inline-block transition-colors ease-in-out p-4 w-60 cursor-pointer"
          >
            <span>Logout</span>
          </div>
        </div>
      )}
    </li>
  );
};

export default NavbarDrop;
