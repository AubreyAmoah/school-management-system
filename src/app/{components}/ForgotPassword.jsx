import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const ForgotPassword = ({ login, signup }) => {
  const [user, setUser] = React.useState({
    email: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onDisabled = () => {
    toast.error(`Invalid Action`);
  };

  const onResetPassword = () => {};

  React.useEffect(() => {
    if (user.email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="relative bg-white/30 py-4 px-8 rounded-xl text-center backdrop-blur-md max-md:w-full">
      <div className="flex items-center justify-between">
        <div className="flex justify-center items-center gap-2">
          <FontAwesomeIcon
            className="h-[20px] text-lime-500 max-sm:h-[20px]"
            icon={faSchool}
          />

          <div className="text-xl text-sky-900 font-bold max-sm:text-sm">
            cl:<span className="text-red-500">sms</span>
          </div>
        </div>
      </div>

      <div className="font-bold mt-3 text-sm text-green-100">
        Enter your email
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="outline-lime-500 backdrop-blur-md p-2 font-bold text-sky-900 caret-lime-500  placeholder-green-100 rounded-sm-border border-white/40 bg-white/30"
        />
        <button
          onClick={buttonDisabled ? onDisabled : onResetPassword}
          className={
            buttonDisabled
              ? "cursor-not-allowed opacity-50 rounded-sm bg-lime-400 text-green-100 py-2 px-4 border-none"
              : "cursor-pointer rounded-sm bg-lime-500 text-green-100 py-2 px-4 border-none font-bold transition-colors hover:bg-sky-900 hover:drop-shadow-lg"
          }
        >
          Reset Password
        </button>

        <div className="flex justify-between items-center">
          <div
            onClick={login}
            className=" bg-sky-900 py-1 px-2 cursor-pointer rounded-sm text-sm"
          >
            <span className="text-green-100">Login</span>
          </div>

          <div
            onClick={signup}
            className=" bg-sky-900 py-1 px-2 cursor-pointer rounded-sm text-sm"
          >
            <span className="text-green-100">Signup</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
