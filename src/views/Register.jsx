import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { checkInputs } from "../utils/functions";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const confirmPasswordRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const errors = checkInputs(
      password,
      confirmPasswordRef,
      email,
      firstName,
      lastName
    );

    setErrors(errors);
    setSubmitting(true);
  }

  async function createAccount() {
    if (!(Object.keys(errors).length > 0) && submitting) {
      console.log("here");
      await axios
        .post(import.meta.env.VITE_API_URL + "api/user/new", {
          email: email,
          firstname: firstName,
          lastname: lastName,
          password: password,
          newsletter: newsLetter,
          roles: ["ROLE_USER"],
        })
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          console.log("Error:", error);
          setErrors({
            network: "This email is already used by another account.",
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    }
  }

  useEffect(() => {
    createAccount();
  }, [errors]);

  return (
    <div className="flex overflow-hidden relative flex-col justify-center min-h-screen uppercase">
      <div className="p-6 m-auto bg-[#9F948B] border-2 border-[#222421] shadow-xl lg:max-w-xl">
        <h1
          style={{ fontFamily: "ClashDisplay-SemiBold" }}
          className="text-2xl font-bold text-center md:text-3xl lg:text-4xl"
        >
          Register
        </h1>

        <div className="mt-2">
          {errors["password"] && typeof errors["password"] !== "string"
            ? Object.values(errors["password"]).map((error, index) => (
              <p
                key={index}
                className="border border-[#c12522] mb-2 text-[#c12522] bg-[#c1252220] p-2"
              >
                {error}
              </p>
            ))
            : ""}
        </div>

        {errors["network"] && (
          <p className="border border-[#c12522] mb-2 text-[#c12522] bg-[#c1252220] p-2">
            {errors["network"]}
          </p>
        )}

        <form
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl"
          onSubmit={handleSubmit}
          method="post"
        >
          <div className="mb-2">
            <label htmlFor="email" className="block text-base">
              Email
            </label>
            <input
              type="email"
              autoComplete="email"
              placeholder="EMAIL HERE..."
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: errors["email"] && "#c12522" }}
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"
            ></input>
            <p
              className={`text-sm text-[#c12522] mt-1 ${!errors["email"] && "hidden"
                }`}
            >
              {errors["email"]}
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mb-2 md:mr-2">
              <label htmlFor="firstname" className="block text-base">
                Firstname
              </label>
              <input
                type="text"
                autoComplete="off"
                placeholder="FIRSTNAME HERE..."
                onChange={(e) => setFirstName(e.target.value)}
                style={{ borderColor: errors["firstname"] && "#c12522" }}
                className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190] "
              />
              <p
                className={`text-sm text-[#c12522] mt-1 ${!errors["firstname"] && "hidden"
                  }`}
              >
                {errors["firstname"]}
              </p>
            </div>

            <div className="mb-2 md:ml-2">
              <label htmlFor="lastname" className="block text-base">
                Lastname
              </label>
              <input
                type="text"
                autoComplete="off"
                placeholder="LASTNAME HERE..."
                onChange={(e) => setLastName(e.target.value)}
                style={{ borderColor: errors["lastname"] && "#c12522" }}
                className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"
              />
              <p
                className={`text-sm text-[#c12522] mt-1 ${!errors["lastname"] && "hidden"
                  }`}
              >
                {errors["lastname"]}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mb-2 md:mr-2">
              <label htmlFor="password" className="block text-base">
                Password
              </label>
              <input
                type="password"
                autoComplete="new-password"
                placeholder="PASSWORD HERE..."
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderColor: errors["password"] && "#c12522" }}
                className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"
              />
            </div>

            <div className="mb-2 md:ml-2">
              <label htmlFor="confirmpassword" className="block text-base">
                Confirm Password
              </label>
              <input
                ref={confirmPasswordRef}
                type="password"
                autoComplete="new-password"
                placeholder="PASSWORD HERE..."
                style={{ borderColor: errors["password"] && "#c12522" }}
                className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"
              />
            </div>
          </div>

          <div className="mt-5 text-xs form-control">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                onChange={() => setNewsLetter(!newsLetter)}
              />
              <span className="label-text"> Sign Up for Newsletter</span>
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg text-[#b0a49a] transition-colors duration-200 transform bg-[#222421] hover:bg-[#30322e] active:bg-[#383a36] uppercase"
            >
              Create an Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
