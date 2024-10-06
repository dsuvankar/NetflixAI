import React, { useEffect } from "react";
import { LOGO } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store) => store.user);

  const handleLogoClick = () => {
    if (user) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGptClick = () => {
    if (location.pathname === "/gpt-search") {
      navigate("/browse");
    } else {
      navigate("/gpt-search");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        if (location.pathname !== "/gpt-search") {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [location.pathname, navigate, dispatch]);

  return (
    <div className="absolute w-full p-2 m-2 z-20 flex justify-between">
      <div className="flex w-1/2 justify-start">
        <img
          className="m-2 w-32 h-14 cursor-pointer"
          src={LOGO}
          alt="logo"
          onClick={handleLogoClick}
        />
      </div>

      {user && (
        <div className="flex">
          {location.pathname !== "/gpt-search" && (
            <button
              onClick={handleGptClick}
              className="text-white text-[0.65rem] sm:text-[0.8rem] lg:text-[1.1rem] border-gray-200 border-2 w-[95px] sm:w-[120px] lg:w-[150px] p-1 sm:p-2 h-10 mt-5 mr-2 lg:p-2 lg:h-12 lg:mt-4 lg:mr-5 rounded-md bg-black bg-opacity-50 hover:shadow-[0_8px_20px_rgba(32,_198,_219,_0.7)]">
              <svg
                fill="#ffffff"
                className="w-4 lg:w-6 float-left"
                viewBox="0 0 488.4 488.4"
                stroke="#ffffff">
                <g id="SVGRepo_iconCarrier">
                  <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z" />
                </g>
              </svg>
              <span className="font-bold">GPT Search</span>
            </button>
          )}
          {location.pathname === "/gpt-search" && (
            <button
              onClick={handleGptClick}
              className="text-white text-[0.6rem] sm:text-[0.8rem] lg:text-[1.1rem] border-gray-200 border-2 w-[90px] sm:w-[120px] lg:w-[150px] p-1 sm:p-2 h-10 mt-5 mr-2 lg:p-2 lg:h-12 lg:mt-4 lg:mr-5 rounded-md bg-black bg-opacity-50 hover:shadow-[0_8px_20px_rgba(32,_198,_219,_0.7)]">
              <span className="font-bold">Back to Home</span>
            </button>
          )}
          <button
            className="grid items-center mr-6 sm:mr-8 hover:bg-gray-800 hover:bg-opacity-60 p-2 rounded-lg"
            onClick={handleSignOut}>
            <img
              className="ml-[2px] h-12 rounded-lg"
              alt="usericon"
              src={user?.photoURL || "https://placehold.co/300"}
            />
            <span className="font-semibold mt-1 text-white rounded-lg text-[10px] sm:text-[12px]">
              Sign Out
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
