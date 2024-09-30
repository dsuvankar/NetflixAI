import React, { useEffect } from "react";
import { LOGO } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        // An error happened.
        // navigate("");

        console.log(error);
      });
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

        // if (location.pathname !== "/gpt-search") {
        //   navigate("/browse");
        // }

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);
  return (
    <div className="absolute w-screen p-2 m-2 z-20 flex justify-between">
      <div className="flex w-1/2 justify-start">
        <img
          className="m-2 w-32 h-14 cursor-pointer"
          src={LOGO}
          alt="logo"
          onClick={handleLogoClick}
        />
      </div>

      {user && (
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
      )}
    </div>
  );
};

export default Header;
