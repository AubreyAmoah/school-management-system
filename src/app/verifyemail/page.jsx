"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../{components}/Navbar";
import { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMoon,
  faPhone,
  faSchool,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const VerifyEmailPage = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error) {
      setError(true);
      console.log(error.response.data);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);
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
      <Navbar />
      <h1 className="text-4xl">VerifyEmail</h1>
      {verified && (
        <div>
          <h2 className="text-2xl">Email Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className="text-2xl bg-red-500 text-black">Error</h2>
        </div>
      )}
    </main>
  );
};

export default VerifyEmailPage;
