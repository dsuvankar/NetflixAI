import React from "react";
import { LOGO } from "../utils/Constants";

const Header = () => {
  return (
    <div className="absolute w-screen p-2 m-2 z-20 flex justify-between">
      <div className="flex w-1/2 justify-start">
        <img
          className="m-2 w-32 h-14 cursor-pointer"
          src={LOGO}
          alt="logo"
          //   onClick={handleLogoClick}
        />
      </div>
    </div>
  );
};

export default Header;
