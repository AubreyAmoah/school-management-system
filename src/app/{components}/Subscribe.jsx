import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

const Subscribe = () => {
  return (
    <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md max-md:w-full">
      <div className="relative">
        <FontAwesomeIcon
          className="h-[100px] text-lime-500 max-sm:h-[60px]"
          icon={faSchool}
        />
      </div>
      <div className="text-5xl text-sky-900 font-bold max-sm:text-3xl">
        cl:<span className="text-red-500">sms</span>
      </div>
      <div className="font-bold mt-3 text-sm text-green-100">
        Keep yourself updated with news and promotions
      </div>
      <div className="mt-3 flex gap-2">
        <input
          type="email"
          placeholder="Email"
          className="outline-lime-500 backdrop-blur-md p-2 font-bold text-sky-900 caret-lime-500  placeholder-green-100 rounded-sm-border border-white/40 bg-white/30"
        />
        <button className="cursor-pointer rounded-sm bg-lime-500 text-green-100 py-2 px-4 border-none font-bold transition-colors hover:bg-sky-900 hover:drop-shadow-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
