import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.svg";

function NavBar() {


  return (
    <div>
    <div className="menu-desktop flex flex-row justify-around items-center font-serif my-5">
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
      </div>

      {/* build the burger menu */}
      <input type="checkbox" id="menu-toggle" value="checkbox" />
        <label id="menu-button" className="menu-button" htmlFor="menu-toggle">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
        <div id="site-menu">
          <ul id="site-menu-titles">
              <li>
                <Link to="/">
                  <p onClick={"hidden"}>
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/market">
                  <p onClick={"hidden"}>Market</p>
                </Link>
              </li>
              <li>
                <Link to="/news">
                  <p onClick={"hidden"}>Crypto News</p>
                </Link>
              </li>
          </ul>
        </div>
    </div>
  );
}

export default NavBar;
