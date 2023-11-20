import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, fas } from "@fortawesome/free-solid-svg-icons";

const NavbarLogo = () => {
  return (
    <div className="flex items-center p-2 gap-2">
      <FontAwesomeIcon className=" ml-8 h-[30px] text-white" icon={faSchool} />
      <div className=" font-bold text-2xl text-sky-900">
        cl:<span className=" text-red-500">sms</span>
      </div>
    </div>
  );
};

export default NavbarLogo;
