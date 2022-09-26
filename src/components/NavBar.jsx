import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.svg";

function NavBar() {
  return (
    <div className="flex flex-row justify-around items-center font-serif my-5">
        <Link to="/" className="font-bold text-3xl flex items-center">
            <img className="h-20 mr-4"src={logo1} alt="logo" />
            <h1 className="">
              My CryptoData
            </h1>
          </Link>
        

      <div className="flex flex-row gap-10">
        <Link to="/">
          <div className="px-8 py-3 hover:bg-[#201E50] active:bg-[#201E50] focus:bg-[#201E50] focus:text-[#F5F4F2] hover:text-[#F5F4F2] rounded-full transition duration-300 ease-in-out text-lg">
            Home
          </div>
        </Link>
        <Link to="/market">
          <div className="px-8 py-3 hover:bg-[#201E50] active:bg-[#201E50] focus:bg-[#201E50] focus:text-[#F5F4F2] hover:text-[#F5F4F2] rounded-full transition duration-300 ease-in-out text-lg">
            Market
          </div>
        </Link>
        <Link to="/news">
          <div className="px-8 py-3 hover:bg-[#201E50] active:bg-[#201E50] focus:bg-[#201E50] focus:text-[#F5F4F2] hover:text-[#F5F4F2] rounded-full transition duration-300 ease-in-out text-lg">
            Crypto News
          </div>
        </Link>
      </div>

      {/* build the burger menu */}

    </div>
  );
}

export default NavBar;
