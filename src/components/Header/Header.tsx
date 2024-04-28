import React from "react";
import logo from "../../assets/images/LOGO.png";

const Header = () => {
  return (
    <div className="flex justify-between px-10 py-5 bg-white shadow-2xl">
      <div className="h-14 w-36 -py-14">
        <img src={logo} className="" alt="logo" />
      </div>
      <p className="mr-44 text-2xl">Zevista Healthcare Pvt.Ltd.</p>
    </div>
  );
};

export default Header;
