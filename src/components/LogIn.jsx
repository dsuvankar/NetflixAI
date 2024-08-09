import React, { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_BG } from "../utils/Constants";
import checkValidData from "./Validate"; // Import the updated validation function
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
const LogIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUpForm, setIsSignUpForm] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errorMsg = checkValidData(
      password.current.value,
      confirmPassword.current?.value,
      isSignUpForm
    );

    if (errorMsg) {
      setErrorMessage(errorMsg);
    } else {
      setErrorMessage("");
      if (isSignUpForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + "--" + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            if (error.code === "auth/invalid-credential") {
              setErrorMessage("Invalid email/password");
            } else {
              console.log(error.code, error.message);
            }
          });
      }
    }
  };

  const toggleSignUpForm = () => {
    setErrorMessage("");
    setIsSignUpForm(!isSignUpForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={LOGIN_BG}
        alt="background"
      />
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <form
          onSubmit={handleFormSubmit} // Single handler for both sign-up and sign-in
          className="bg-black bg-opacity-60 text-white p-6 rounded-lg w-full max-w-[400px]">
          <h1 className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUpForm && (
            <div className="relative mb-4">
              <input
                className="peer placeholder-transparent text-sm lg:text-md w-full p-4 rounded-md bg-transparent text-white border-2 border-gray-500"
                type="text"
                id="name"
                placeholder="Name"
                aria-label="Name"
              />
              <label
                className="absolute top-0 left-4 text-xs transition-all text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs"
                htmlFor="name">
                Name
              </label>
            </div>
          )}
          <div className="relative mb-4">
            <input
              ref={email}
              className="peer placeholder-transparent text-sm lg:text-md w-full p-4 rounded-md bg-transparent text-white border-2 border-gray-500"
              type="text"
              id="email"
              placeholder="Email"
              aria-label="Email"
            />
            <label
              className="absolute top-0 left-4 text-xs transition-all text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs"
              htmlFor="email">
              Email
            </label>
          </div>
          <div className="relative mb-4">
            <input
              ref={password}
              className="peer placeholder-transparent text-sm lg:text-md w-full p-4 rounded-md bg-transparent text-white border-2 border-gray-500"
              id="password"
              type="password"
              placeholder="Enter your Password"
              aria-label="Password"
            />
            <label
              className="absolute top-0 left-4 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs"
              htmlFor="password">
              Password
            </label>
          </div>

          {isSignUpForm && (
            <div className="relative">
              <input
                ref={confirmPassword}
                className="peer placeholder-transparent text-sm lg:text-md w-full p-4 rounded-md bg-transparent text-white border-2 border-gray-500"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
              />
              <label
                className="absolute top-0 left-4 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs"
                htmlFor="confirmPassword">
                Confirm Password
              </label>
            </div>
          )}
          <p className="font-bold text-xs mb-4 text-red-600">{errorMessage}</p>
          <button
            className="p-2 xl:p-4 my-2 w-full font-bold text-sm xl:text-md bg-red-600 rounded-md text-center hover:brightness-150"
            type="submit">
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </button>
          <p
            className="text-gray-300 py-4 cursor-pointer hover:underline text-sm xl:text-md"
            onClick={toggleSignUpForm}>
            {isSignUpForm
              ? "Already registered? Sign In Now"
              : "New to Netflix? Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
