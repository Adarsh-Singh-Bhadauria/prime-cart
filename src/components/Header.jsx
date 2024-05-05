import React from "react";
import { NavLink } from "react-router-dom";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header fixed w-screen top-0 bg-[#FAFAFE] flex justify-between items-center py-5 px-12 shadow-lg">
      <div className="navBaar flex gap-16 items-center">
        <div className="flex items-center">
          <IoPhonePortraitOutline className="h-8 w-8 text-[#]" />
          <span className="text-4xl font-bold tetx-[#100A55] ml-2">
            Prime<span className="text-[#CACAAA]">Cart</span>
          </span>
        </div>
      </div>
      <div>
        <span>
          <NavLink
            className="text-lg py-2 px-4 text-[#7F636E] rounded-lg font-semibold hover:bg-[#f8e9f0]"
            active=""
            to={"./"}
          >
            Buy
          </NavLink>
        </span>
        <span>
          <NavLink
            className="text-lg py-2 px-4 text-[#7F636E] rounded-lg font-semibold hover:bg-[#f8e9f0]"
            active=""
            to={"./favorite"}
          >
            Wishlist
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default Header;
