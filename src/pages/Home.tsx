//import React from 'react'

import Cards from "../components/Homepage/Cards";
import Hero from "../components/Homepage/Hero";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Cards />
      <div className="px-6 lg:px-36 md:px-20">
        <div className="md:px-12 lg:px-24 md:py-12 p-8 md:h-96 h-auto bg-gradient-to-br rounded-2xl from-stone-800 from-10%  via-emerald-700 via-70%  bg-emerald-400 flex gap-4 flex-col md:gap-10 md:flex-row md:justify-between">
          <div className="md:h-full flex md:items-start flex-col justify-center gap-4 text-neutral-100">
            <p className="font-semibold md:text-3xl text-3xl lg:text-5xl font-serif">
              Get in Touch with Us!
            </p>
            <p className="hidden md:block md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="lg:w-1/3 md:w-2/3 md:h-full h-auto rounded-xl md:p-8 p-4 flex flex-col justify-center bg-neutral-100">
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="input-group-1"
                className="bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                placeholder="name@email.com"
              />
            </div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                placeholder="John Doe"
              />
            </div>
            <div className="flex w-full">
              <button className="bg-emerald-400 self-start p-2 px-3 rounded-lg font-semibold font-sans hover:bg-emerald-600 w-auto hover:text-emerald-200 transition-all text-emerald-800">
                Request an Advice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
