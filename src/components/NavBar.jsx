import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex flex-row justify-around items-center font-serif my-5">
        <Link to="/" className="font-bold text-3xl">
          <div className="">
            My CryptoData
          </div>
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
    </div>
  );
}

export default NavBar;
