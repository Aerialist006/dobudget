import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PiCurrencyCircleDollarBold } from "react-icons/pi";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={` ${
        open ? "h-auto flex-col md:flex-row" : "h-16"
      } flex bg-white h-16 md:h-18  w-screen fixed z-10`}
    >
      <div className="h-16 md:h-18 px-6 lg:px-36 md:px-20 justify-between w-full flex items-center">
        <div
          className={`flex gap-1 items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 cursor-pointer`}
          onClick={() => {
            navigate("/");
          }}
        >
          <p className="text-3xl text-emerald-700">
            <PiCurrencyCircleDollarBold />
          </p>
          <div className="flex flex-col leading-5">
            <p className="font-serif tracking-wide font-bold text-3xl">
              dobudget
            </p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="items-center gap-4 hidden md:flex w-full md:w-auto">
          <div className="hover:text-emerald-500 hover:bg-stone-100 transition-all rounded-lg py-2 p-3 cursor-pointer">
            Services
          </div>
          <div className="bg-gradient-to-l hover:from-emerald-800 hover:to-emerald-600 transition-all from-emerald-700 to-emerald-500 font-medium text-white p-3 rounded-lg py-2 cursor-pointer">
            Contact Us
          </div>
          <div className="hover:text-emerald-500 hover:bg-stone-100 transition-all rounded-lg py-2 p-3 cursor-pointer">
            Pricing
          </div>
          <div className="font-semibold hover:text-emerald-500 hover:bg-stone-100 transition-all rounded-lg py-2 p-3 cursor-pointer">
            About Us
          </div>
        </div>
      </div>
      <div
        className={` ${
          open ? "flex" : "hidden"
        } flex-col w-full px-6 lg:px-36 md:px-20 pb-6  shadow-lg`}
      >
        <div className="hover:text-emerald-500 hover:bg-stone-100 transition-all rounded-lg py-2 p-3 w-auto cursor-pointer">
          Services
        </div>
        <div className="font-semibold hover:text-emerald-500 hover:bg-stone-100 transition-all rounded-lg py-2 p-3 cursor-pointer">
          Contact Us
        </div>
        <div className="hover:text-emerald-500 hover:bg-stone-100 transition-all rounded-lg py-2 p-3 cursor-pointer">
          Pricing
        </div>
        <div className="font-semibold hover:text-emerald-500 hover:bg-stone-100 transition-all rounded-lg py-2 p-3 cursor-pointer">
          About Us
        </div>
      </div>
    </div>
  );
};

export default Navbar;
