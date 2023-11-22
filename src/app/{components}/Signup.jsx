import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = ({ login, reset }) => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeatpassword: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/admin/signup", user);
      if (res.status === 200) {
        toast.success("Signup success");
        router.push("/profile");
      } else {
        toast.error("Unable To Sign in");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const onDisabled = () => {
    toast.error(`Invalid action`);
  };

  React.useEffect(() => {
    if (
      user.firstname.length > 0 &&
      user.lastname.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.repeatpassword.length > 0
    ) {
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
        <div className="font-bold text-xl text-green-100 max-sm:text-sm">
          Sign Up Form
        </div>
      </div>

      <div className="font-bold mt-3 text-sm text-green-100">
        By filling the from below and signing up you agree to our{" "}
        <span className=" text-red-600 cursor-pointer">
          Terms and Conditions
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Firstname"
          id="firstname"
          name="firstname"
          onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          className="outline-lime-500 backdrop-blur-md p-2 font-bold text-sky-900 caret-lime-500  placeholder-green-100 rounded-sm-border border-white/40 bg-white/30"
        />

        <input
          type="text"
          placeholder="Lastname"
          id="lastname"
          name="lastname"
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          className="outline-lime-500 backdrop-blur-md p-2 font-bold text-sky-900 caret-lime-500  placeholder-green-100 rounded-sm-border border-white/40 bg-white/30"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="outline-lime-500 backdrop-blur-md p-2 font-bold text-sky-900 caret-lime-500  placeholder-green-100 rounded-sm-border border-white/40 bg-white/30"
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="outline-lime-500 backdrop-blur-md p-2 font-bold text-sky-900 caret-lime-500  placeholder-green-100 rounded-sm-border border-white/40 bg-white/30"
        />

        <input
          type="password"
          placeholder="Repeat Password"
          id="repeatpassword"
          name="repeatpassword"
          onChange={(e) => setUser({ ...user, repeatpassword: e.target.value })}
          className="outline-lime-500 backdrop-blur-md p-2 font-bold text-sky-900 caret-lime-500  placeholder-green-100 rounded-sm-border border-white/40 bg-white/30"
        />
        <button
          onClick={buttonDisabled ? onDisabled : onSignup}
          className={
            buttonDisabled
              ? "cursor-not-allowed opacity-50 rounded-sm bg-lime-400 text-green-100 py-2 px-4 border-none"
              : "cursor-pointer rounded-sm bg-lime-500 text-green-100 py-2 px-4 border-none font-bold transition-colors hover:bg-sky-900 hover:drop-shadow-lg"
          }
        >
          Sign Up
        </button>

        <div className="flex justify-between items-center">
          <div onClick={reset} className="text-green-100 cursor-pointer">
            <span>Forgot Password</span>
          </div>

          <div
            onClick={login}
            className=" bg-sky-900 py-1 px-2 cursor-pointer rounded-sm text-sm"
          >
            <span className="text-green-100">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
