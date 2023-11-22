"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMoon,
  faPhone,
  faSchool,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Navbar from "../{components}/Navbar";

const ProfilePage = () => {
  const router = useRouter();
  const [isDarkMode, setDarkMode] = useState(false);
  const [user, setUser] = React.useState({
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    isVerified: "",
    isAdmin: "",
  });

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const logout = async () => {
    try {
      await axios.get("/api/admin/logout");
      toast.success("Logout Succesful");
      router.push("/");
    } catch (error) {
      //console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/admin/me");
    setUser({
      _id: res.data.data._id,
      firstname: res.data.data.firstname,
      lastname: res.data.data.lastname,
      email: res.data.data.email,
      isVerified: res.data.data.isVerified,
      isAdmin: res.data.data.isAdmin,
    });
  };

  useEffect(() => {
    getUserDetails();
  });
  return (
    <main className={`${isDarkMode ? "bg-zinc-900" : "bg-zinc-200"}`}>
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
      <Navbar label={"profile"} logout={logout} />
      <Toaster />
      <div className="flex flex-col h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] max-sm:h-[calc(100vh-80px)]">
        <h1 className="ml-8 mt-4 text-2xl self-start">
          Welcome{" "}
          <span> {user.firstname === "" ? "null" : user.firstname}</span>
        </h1>

        {user.isVerified == false && (
          <div className="flex flex-col gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-center">
              You are not verified yet, check your email to verify your account.
              If verification has expired or you did not recieve a verification
              email click the button below to send one
            </p>

            <button className="bg-sky-900 py-2 px-4 cursor-pointer rounded-md text-sm text-green-100 border-none self-center">
              Verify
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProfilePage;
