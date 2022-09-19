import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex flex-row justify-around items-center font-serif my-5">
      <div className="">
        <Link to="/" className="font-bold text-3xl">
          My CryptoData
        </Link>
      </div>
      <div className="flex gap-10">
        <Link
          to="/"
          className="nav px-8 py-3 hover:bg-[#201E50] active:bg-[#201E50] focus:bg-[#201E50] focus:text-[#F5F4F2] hover:text-[#F5F4F2] rounded-full transition duration-300 ease-in-out text-lg"
        >
          Home
        </Link>
        <Link
          to="/market"
          className="nav px-8 py-3 hover:bg-[#201E50] active:bg-[#201E50] focus:bg-[#201E50] focus:text-[#F5F4F2] hover:text-[#F5F4F2] rounded-full transition duration-300 ease-in-out text-lg"
        >
          Market
        </Link>
        <Link
          to="/about"
          className="nav px-8 py-3 hover:bg-[#201E50] active:bg-[#201E50] focus:bg-[#201E50] focus:text-[#F5F4F2] hover:text-[#F5F4F2] rounded-full transition duration-300 ease-in-out text-lg"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
