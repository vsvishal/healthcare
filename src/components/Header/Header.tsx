import React from "react";
import logo from "../../assets/images/LOGO.png";
// bg-[#066bb1]

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-10 py-6 shadow-2xl">
      <div className="h-14 w-36 -py-14">
        <img src={logo} className="h-14 w-36" alt="logo" />
      </div>
      <div className="">
        <p className="mr-0 md:mr-16 font-bold text-xl md:text-2xl">
          Zevista Healthcare Pvt.Ltd.
        </p>
      </div>
    </header>
  );
};

export default Header;
