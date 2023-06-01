import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoAnalyticsSharp } from "react-icons/io5";
export default function NavBar2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="box-shadow fixed left-0 top-0 z-10 w-full bg-white lg:hidden">
      <div className="flex items-center justify-between px-2">
        <img
          src="https://unxbot.com/unxtem24/trx_v2/assets/img/logo/logo.png"
          className="w-50 mr-2 h-10"
          alt="Logo"
        />
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black-500 hover:text-black-400 flex items-center rounded px-3 py-2 text-5xl text-secondred"
          >
            <svg
              className={`h-8 w-8 fill-current ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`h-8 w-8 fill-current ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`block w-full flex-grow lg:flex lg:w-auto lg:items-center  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="w-full py-5 text-black">
          <ul className="flex flex-col gap-3 pl-4">
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
              className="bg-gradient-ibiza w-min rounded-md px-7 py-1 text-lg font-bold text-white"
            >
              Dashboard
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
