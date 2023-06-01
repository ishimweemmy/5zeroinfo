import React from "react";
import { BiHome } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import NavBar2 from "./global/Navbar2";

const OthersWrapper: React.FC = () => {
  return (
    <main className="main">
      <NavBar2 />
      <header className="hidden items-center justify-start gap-4 border-b border-b-gray-200  px-5 py-8 lg:flex">
        <h1 className="text-xl font-bold">TX MINING</h1>
        <a href="" className="flex items-center gap-1 text-lg font-bold">
          <BiHome /> Home
        </a>
        <a href="" className="flex items-center gap-1 text-lg font-bold">
          <IoAnalyticsSharp /> Analytics
        </a>
        <a href="" className="flex items-center gap-1 text-lg font-bold">
          <FiUsers /> Affiliate Program
        </a>
        <a href="" className="flex items-center gap-1 text-lg font-bold">
          <FiUsers /> Help
        </a>
        <a
          href="/dashboard"
          className="bg-gradient-ibiza ml-auto rounded-md px-7 py-1 text-lg font-bold text-white"
        >
          Dashboard
        </a>
      </header>
      <Outlet />
      <footer className="flex w-full flex-col gap-10 border-t border-t-gray-200 px-10 py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="flex flex-col justify-start gap-2 lg:w-[20%]">
          <h1 className="text-xl font-bold">TX MINING</h1>
          <img
            src="https://cryptofy.ca/assets/images/govuk.png"
            className="h-32 w-32"
            alt=""
          />
          <p>60 Mordaunt St, London, United Kingdom, SW9 9RB</p>
          <p>Copyright © 2023. All right reserved.</p>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Parteners</h1>
            <img
              className="h-20 w-32"
              src="https://cryptofy.ca/assets/images/coinpayments.png"
              alt=""
            />
            <img
              className="h-20 w-32"
              src="https://cryptofy.ca/assets/images/binance.svg"
              alt=""
            />
            <img
              className="h-20 w-32"
              src="https://cryptofy.ca/assets/images/trustpilot.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Pages</h1>

            <a href="#">Home</a>
            <a href="#">Statistics</a>
            <a href="#">Affiliate program</a>
            <a href="#">FAQ</a>
            <a href="#">About us</a>
            <a href="#">Terms</a>
            <a href="#">Plans</a>
            <a href="#">Contacts</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default OthersWrapper;
