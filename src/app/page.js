"use client";
import Navbar from "./{components}/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faL,
  faMoon,
  faPhone,
  faSchool,
  faSun,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Link from "next/link";
import Subscribe from "./{components}/Subscribe";
import Login from "./{components}/Login";
import Signup from "./{components}/Signup";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleLogin = () => {
    setLogin(!isLogin);
    setSignup(false);
  };

  const toggleSignUp = () => {
    setSignup(!isSignup);
    setLogin(false);
  };

  const toggleDefault = () => {
    setLogin(false);
    setSignup(false);
  };

  const hi = () => {
    console.log("Hi");
  };

  return (
    <main className={`${isDarkMode ? "bg-zinc-900" : "bg-zinc-200"}`}>
      <Toaster />
      <div
        onClick={toggleDarkMode}
        className={`${
          isDarkMode ? "bg-zinc-200 text-zinc-900" : "bg-zinc-900 text-zinc-200"
        }  fixed  z-30 top-24 right-0 inline-block w-12 cursor-pointer rounded-l-lg p-2 text-3xl`}
      >
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </div>
      <Navbar
        label={"homePage"}
        login={toggleLogin}
        signup={toggleSignUp}
        home={toggleDefault}
      />
      <div
        style={{ backgroundImage: `url("/backmain.jpg")` }}
        className="bg-cover bg-center bg-fixed flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[400px] max-sm:h-[calc(100vh-400px)]"
      >
        {isLogin && <Login signup={toggleSignUp} />}
        {isSignup && <Signup setLogin={hi} login={toggleLogin} />}
        {!isLogin && !isSignup && <Subscribe />}
      </div>

      <div
        className={`${
          isDarkMode ? "text-zinc-200 " : "text-zinc-900"
        } max-w-screen-lg mx-auto mt-20`}
      >
        <h2 id="feature" className="p-2 text-3xl md:text-5xl md:p-0 font-bold">
          Features
        </h2>
        <p className="max-md:p-2 mt-2 max-md:text-sm">
          Experience top-notch up to date technologies which will add increased
          productivity and smooth experience in running a school
        </p>

        <div className="mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto">
          <div className="min-w-[80%] md:min-w-[40%]">
            <div
              style={{ backgroundImage: `url("/backmain.jpg")` }}
              className=" max-md:h-60 h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
            ></div>
            <h5 className=" max-md:text-lg max-md:px-2 mt-2 font-bold text-xl">
              Terminal Report Generator
            </h5>
            <p className=" max-md:text-sm max-md:px-2">
              Quickly Generate Complex Terminal Reports for students
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${
          isDarkMode ? "bg-zinc-200 text-zinc-900" : "bg-zinc-900 text-zinc-200"
        } flex p-4 justify-center gap-32 max-md:flex-col max-md:gap-6 max-[1000px]:gap-10`}
      >
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl max-md:text-xl">Contact Us</h1>
          <span className="max-md:text-sm">Send Us a Message</span>
          <input
            type="text"
            placeholder="fullname"
            className="mt-4 p-2 rounded-md text-zinc-900 outline-lime-500 caret-lime-500 max-md:text-sm"
          />
          <input
            type="email"
            placeholder="email"
            className="mt-4 p-2 rounded-md text-zinc-900 outline-lime-500 caret-lime-500 max-md:text-sm"
          />
          <textarea
            placeholder="Your Message"
            className="mt-4 p-2 rounded-md text-zinc-900 outline-lime-500 caret-lime-500 max-md:text-sm"
          />

          <button className="bg-gradient-to-r from-green-500 to-lime-500 mt-2 self-start px-4 py-2 rounded-md hover:text-lime-500 hover:border-lime-500  hover:border hover:bg-gradient-to-tr hover:from-zinc-100 hover:to-zinc-100 transition-all ease-in-out">
            Send
          </button>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-bold text-3xl max-md:text-xl">Site Map</h1>
          <span className="max-md:text-sm">All Our Pages</span>
          <div className="mt-4 flex flex-col items-center gap-2 max-md:text-sm">
            <Link href={"/"} onClick={toggleDefault}>
              Home
            </Link>
            <Link href={"/"} onClick={toggleLogin}>
              Login
            </Link>
            <Link href={"/"} onClick={toggleSignUp}>
              SignUp
            </Link>
            <Link href={"#feature"}>Features</Link>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className={`${
                isDarkMode ? "text-zinc-900" : "text-zinc-200"
              } h-[40px]`}
              icon={faSchool}
            />
            <div className=" font-bold text-3xl text-sky-900">
              cl:<span className=" text-red-500">sms</span>
            </div>
          </div>

          <div className="flex self-end items-center justify-center mt-4 max-md:self-center max-md:text-sm">
            <FontAwesomeIcon
              icon={faPhone}
              className={`${
                isDarkMode ? "text-zinc-900" : "text-zinc-200"
              } h-4 mr-4`}
            />
            <span>(+233)599975352</span>
          </div>

          <div className="flex self-end items-center justify-center max-md:self-center max-md:text-sm">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`${
                isDarkMode ? "text-zinc-900" : "text-zinc-200"
              } h-4 mr-4`}
            />
            <span>mramoah@protonmail.com</span>
          </div>
        </div>
      </div>
    </main>
  );
}
